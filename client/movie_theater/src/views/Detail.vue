<script>
import CardMovie from '../components/CardMovie.vue'
import YoutubeModal from '../components/YoutubeModal.vue'
import {mapActions, mapState} from 'pinia'
import {useCounterStore} from '../stores/counter'

export default{
  data(){
    return {
      modal: false,
      price: Math.ceil(Math.random() * 100000)
    }
  },
  components:{
    CardMovie,
    YoutubeModal
  },

  created(){
    this.fetchMoviesHome();
  },

  computed:{
    ...mapState(useCounterStore, ['moviesHome', "keyTrailer", "movie"])
  },

  methods:{
    ...mapActions(useCounterStore,['fetchMoviesHome', 'updatePayment']),

    trigeredRight(){
      let cards = document.getElementsByClassName('cards')[0];
      cards.scrollLeft += 200;
    },

    trigeredLeft(){
      let cards = document.getElementsByClassName('cards')[0];
      cards.scrollLeft -= 200;
    },

    payment(){
      this.updatePayment({
        price: this.price,
        movieName: this.movie.title,
        movieId: this.movie.id,
      });
    }

  }
}

</script>

<template>
  <div class="main">
    <header>
      <video src="/video/theboys.webm" autoplay muted></video>
      <nav>
        <div class="logo_ul">
          <img src="/img/logo.png" alt="">
          <ul>
              <li>
                <RouterLink to="/">
                    <a href="#">Home</a>
                </RouterLink>
                </li>
                <li>
                    <RouterLink to="/populer">
                        <a href="#">Populer</a>
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="/tvshow">
                        <a href="#">Tv SHow</a>
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="/topairing">
                        <a href="#">Top Airing</a>
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="/forkids">
                        <a href="#">For Kids</a>
                    </RouterLink>
                </li>
          </ul>
        </div>
        <YoutubeModal v-if="!keyTrailer" :trailer ="keyTrailer"/>
          </nav>
          <div class="content">
            
              <h1 id="title">{{ movie.title }}</h1>
              <p>{{ movie.overview}} </p>
              <div class="details">
                  <h6>A Netflix Original Film</h6>
                  <h5 id="gen">{{ movie.genres[0].name }}</h5>
                  <h4>{{ movie.release_date }}</h4>
                  <h3 id="rate"><span>IMDB</span><i class="bi bi-star-fill"></i> {{ movie.vote_average }}</h3>
              </div>
              <div class="btns">
                  <a @click.prevent="payment" href="#" id="play">Rp. {{ price }} <i class="bi bi-cart3"></i></a>
                  <a href="#" id="download_main"><i class="bi bi-cloud-arrow-down-fill"></i></a>
              </div>
          </div>
          <section>
            <div class="movies-box">
              <h4>Populer</h4>
              <i @click.prevent="trigeredLeft" class="bi bi-chevron-left"></i>
              <i @click.prevent="trigeredRight" class="bi bi-chevron-right"></i>
              <div class="cards">
                <CardMovie v-for="movie in moviesHome" :key="movie.id" :movie="movie" />
              </div>
            </div>
          </section>
        </header>
      </div>
</template>
