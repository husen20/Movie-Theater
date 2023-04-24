const { User, Ticket } = require('../models');
const { compare } = require('../helpers/bcrypt');
const { create } = require('../helpers/jwt');
const midtransClient = require('midtrans-client');
const API_KEY = process.env.API_KEY;
const URL_IMAGE = 'https://image.tmdb.org/t/p/w500';
const API_MIDTRANS = process.env.API_MIDTRANS;
const axios = require('axios');
const ConfigEmail = require('../helpers/configEmail');

class Controller {
  static async register(req, res, next) {
    try {
      const { username, email, password } = req.body;

      if (!req.file) {
        throw { name: 'badrequest' };
      }

      await User.create({
        username,
        email,
        password,
        profile_picture: req.file.path,
      });

      res.status(201).json({
        message: `${email} has been created successfully`,
      });
    } catch (err) {
      next(err);
    }
  }

  static async login(req, res, next) {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        throw { name: 'emailOrPasswordRequired' };
      }

      const user = await User.findOne({ where: { email } });

      if (!user) {
        throw { name: 'emailOrPasswordNotFound' };
      }

      const comparePassword = compare(password, user.password);

      if (!comparePassword) {
        throw { name: 'emailOrPasswordNotFound' };
      }

      const payload = {
        id: user.id,
      };

      const access_token = create(payload);
      res.status(200).json({ access_token });
    } catch (err) {
      next(err);
    }
  }

  static async fetchMoviesHome(req, res, next) {
    try {
      let { page } = req.query;

      if (page === '' || !page) {
        page = 1;
      }

      const { data } = await axios({
        method: 'GET',
        url: `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&language=en-US&page=${page}`,
      });
      data.results.forEach((el) => {
        el.backdrop_path = URL_IMAGE + el.backdrop_path;
        el.poster_path = URL_IMAGE + el.poster_path;
        el.vote_average = el.vote_average.toFixed(1);
      });
      res.status(200).json(data.results);
    } catch (err) {
      console.log(err);
    }
  }

  static async fetchMoviesTvShow(req, res, next) {
    try {
      const { data } = await axios({
        method: 'GET',
        url: `https://api.themoviedb.org/3/trending/tv/day?api_key=${API_KEY}&language=en-US`,
      });

      data.results.forEach((el) => {
        el.backdrop_path = URL_IMAGE + el.backdrop_path;
        el.poster_path = URL_IMAGE + el.poster_path;
        el.vote_average = el.vote_average.toFixed(1);
      });

      res.status(200).json(data.results);
    } catch (err) {
      next(err);
    }
  }

  static async fetchMoviesTopAiring(req, res, next) {
    try {
      const { data } = await axios({
        method: 'GET',
        url: `https://api.themoviedb.org/3/trending/tv/day?api_key=${API_KEY}&language=en-US&page=50`,
      });

      data.results.forEach((el) => {
        el.backdrop_path = URL_IMAGE + el.backdrop_path;
        el.poster_path = URL_IMAGE + el.poster_path;
        el.vote_average = el.vote_average.toFixed(1);
      });

      res.status(200).json(data.results);
    } catch (err) {
      next(err);
    }
  }

  static async fetchMoviesForKids(req, res, next) {
    try {
      const { data } = await axios({
        method: 'GET',
        url: `https://api.themoviedb.org/3/discover/movie?api_key=f27c03b78e4ca3a0d626e1c911229fc5&certification_country=US&certification.lte=G&with_genres=16&include_adult=false&sort_by=popularity.desc`,
      });

      data.results.forEach((el) => {
        el.backdrop_path = URL_IMAGE + el.backdrop_path;
        el.poster_path = URL_IMAGE + el.poster_path;
        el.vote_average = el.vote_average.toFixed(1);
      });
      res.status(200).json(data.results);
    } catch (err) {
      next(err);
    }
  }

  static async trailerById(req, res, next) {
    try {
      const { id } = req.params;

      const { data } = await axios({
        method: 'GET',
        url: `https://api.themoviedb.org/3/discover/movie/${id}?api_key=${API_KEY}&append_to_response=videos`,
      });
      let result = [];

      data.videos.results.forEach((el, i) => {
        if (el.type === 'Teaser') {
          el.key = `https://www.youtube.com/embed/${el.key}`;
          result.push(el);
        }
      });

      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  }

  static async movieById(req, res, next) {
    try {
      const { id } = req.params;

      const { data } = await axios({
        method: 'GET',
        url: `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`,
      });
      data.backdrop_path = URL_IMAGE + data.backdrop_path;
      data.poster_path = URL_IMAGE + data.poster_path;
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  }

  static async paymentMethods(req, res, next) {
    try {
      const ticket = await Ticket.create({
        UserId: req.user.id,
        movie_uniq: req.body.bodyUpdate.movieId,
        movieName: req.body.bodyUpdate.movieName,
        price: req.body.bodyUpdate.price,
      });

      const orderNumber = Math.ceil(Math.random() * 100000);
      let snap = new midtransClient.Snap({
        isProduction: false,
        serverKey: `${API_MIDTRANS}`,
      });

      let parameter = {
        transaction_details: {
          order_id: `YOUR-ORDERID-${orderNumber}`,
          gross_amount: ticket.price,
        },
        credit_card: {
          secure: true,
        },
        customer_details: {
          first_name: 'budi',
          last_name: 'pratama',
          email: 'budi.pra@example.com',
          phone: '08111222333',
        },
      };

      const transaction = await snap.createTransaction(parameter);

      res.status(201).json({ midtrans: transaction, ticket: ticket.id });
    } catch (error) {
      next(error);
    }
  }

  static async updatePaymentStatus(req, res, next) {
    try {
      const { id } = req.params;

      const user = await User.findByPk(req.user.id);

      console.log(user);

      await Ticket.update(
        {
          paymentStatus: true,
        },
        { where: { id: id } }
      );

      ConfigEmail.message('bumpa.heyho@gmail.com', 1);

      res.status(200).json({ message: 'payment successfull' });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Controller;
