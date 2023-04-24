const express = require('express');
const Controller = require('../controllers/controller');
const router = express.Router();

router.get('/movies/home', Controller.fetchMoviesHome);
router.get('/movies/home/tvShow', Controller.fetchMoviesTvShow);
router.get('/movies/home/topAiring', Controller.fetchMoviesTopAiring);
router.get('/movies/home/forKids', Controller.fetchMoviesForKids);
router.get('/movies/home/:id', Controller.movieById);
router.get('/movies/home/trailers/:id', Controller.trailerById);

module.exports = router;
