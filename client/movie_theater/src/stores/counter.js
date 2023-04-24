import { defineStore } from 'pinia';
import axios from 'axios';

export const useCounterStore = defineStore('counter', {
  state: () => ({
    baseUrl: 'http://localhost:3000',
    moviesHome: [],
    moviesPopuler: [],
    isLogin: false,
    movie: {},
    moviesTvSow: [],
    moviesTopAiring: [],
    moviesForKids: [],
    keyTrailer: [],
    page: 1,
    idMovie: 0,
  }),
  getters: {},
  actions: {
    async register(bodyRegister) {
      try {
        let formData = new FormData();
        formData.append('username', bodyRegister.username);
        formData.append('email', bodyRegister.email);
        formData.append('password', bodyRegister.password);
        formData.append('profile_picture', bodyRegister.profile_picture);

        const { data } = await axios({
          method: 'POST',
          url: `${this.baseUrl}/register`,
          data: formData,
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        this.router.push('/login');

        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer);
            toast.addEventListener('mouseleave', Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: 'success',
          title: `${data.message}`,
        });
      } catch (error) {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: error.response.data.message,
          showConfirmButton: false,
          timer: 2000,
        });
      }
    },

    async login(bodyLogin) {
      try {
        const { data } = await axios({
          method: 'POST',
          url: `${this.baseUrl}/login`,
          data: bodyLogin,
        });

        localStorage.setItem('access_token', data.access_token);
        this.router.push('/');
        this.isLogin = true;

        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer);
            toast.addEventListener('mouseleave', Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: 'success',
          title: 'Signed in successfully',
        });
      } catch (error) {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: error.response.data.message,
          showConfirmButton: false,
          timer: 2000,
        });
      }
    },

    async fetchMoviesHome() {
      try {
        const { data } = await axios({
          method: 'GET',
          url: `${this.baseUrl}/movies/home`,
          params: {
            page: this.page,
          },
        });

        if (this.page > 1) {
          data.forEach((el) => {
            this.moviesPopuler.push(el);
          });
        } else {
          this.moviesPopuler = data;
        }

        this.moviesHome = data;
        this.movieById();
        this.trailerById();
      } catch (error) {
        console.log(error);
      }
    },

    async fetchMoviesTvShow() {
      try {
        const { data } = await axios({
          method: 'GET',
          url: `${this.baseUrl}/movies/home/tvShow`,
        });

        if (this.page > 1) {
          data.forEach((el) => {
            this.moviesTvSow.push(el);
          });
        } else {
          this.moviesTvSow = data;
        }
      } catch (error) {
        console.log(error);
      }
    },

    async fetchMoviesTopAiring() {
      try {
        const { data } = await axios({
          method: 'GET',
          url: `${this.baseUrl}/movies/home/topAiring`,
        });
        if (this.page > 1) {
          data.forEach((el) => {
            this.moviesTopAiring.push(el);
          });
        } else {
          this.moviesTopAiring = data;
        }
      } catch (error) {
        console.log(error);
      }
    },

    async fetchMoviesForKids() {
      try {
        const { data } = await axios({
          method: 'GET',
          url: `${this.baseUrl}/movies/home/forKids`,
        });
        if (this.page > 1) {
          data.forEach((el) => {
            this.moviesTopAiring.push(el);
          });
        } else {
          this.moviesForKids = data;
        }
      } catch (error) {
        console.log(error);
      }
    },

    async trailerById(id) {
      try {
        this.idMovie = id;

        const { data } = await axios({
          method: 'GET',
          url: `${this.baseUrl}/movies/home/trailers/${this.idMovie}`,
        });

        this.keyTrailer = [];
        this.keyTrailer += data[0].key;
      } catch (error) {
        console.log(error);
      }
    },

    async movieById(id) {
      try {
        if (id) {
          this.idMovie = id;
        }
        const { data } = await axios({
          method: 'GET',
          url: `${this.baseUrl}/movies/home/${this.idMovie}`,
        });

        this.movie = data;
      } catch (error) {
        console.log(error);
      }
    },

    async updatePayment(bodyUpdate) {
      try {
        const { data } = await axios({
          method: 'POST',
          url: `${this.baseUrl}/paymen`,
          data: {
            bodyUpdate,
          },
          headers: {
            access_token: localStorage.access_token,
          },
        });

        const callback = this.updateStatusPayment;

        window.snap.pay(data.midtrans.token, {
          onSuccess: async function (result) {
            /* You may add your own implementation here */
            alert('payment success!');
            console.log(result);
            callback(data.ticket);
          },
          onPending: function (result) {
            /* You may add your own implementation here */
            alert('wating your payment!');
            console.log(result);
          },
          onError: function (result) {
            /* You may add your own implementation here */
            alert('payment failed!');
            console.log(result);
          },
          onClose: function () {
            /* You may add your own implementation here */
            alert('you closed the popup without finishing the payment');
          },
        });
      } catch (err) {
        console.log(err);
      }
    },

    async updateStatusPayment(id) {
      try {
        const { data } = await axios({
          method: 'PATCH',
          url: `${this.baseUrl}/payment/status/${id}`,
          headers: {
            access_token: localStorage.access_token,
          },
        });
      } catch (error) {
        console.log(err);
      }
    },
  },
});
