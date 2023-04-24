<script>
import CardMovie from '../components/CardMovie.vue'
import Navbar from '../components/Navbar.vue'
import {mapActions, mapState} from 'pinia'
import {useCounterStore} from '../stores/counter'

export default{
    components:{
        CardMovie,
        Navbar
    },
    created(){
        this.fetchMoviesHome();
        this.fetchMoviesTvShow();
        this.fetchMoviesForKids();
        this.fetchMoviesTopAiring();
    },
    computed:{
        ...mapState(useCounterStore, ['moviesHome', 'moviesTvSow', 'moviesTopAiring', 'moviesForKids'])
    },
    methods: {
        ...mapActions(useCounterStore, ['fetchMoviesHome', 'fetchMoviesTvShow', 'fetchMoviesTopAiring', 'fetchMoviesForKids']),

        trigeredRight(){
          let cards = document.getElementsByClassName('cards')[0];
          cards.scrollLeft += 200;
        },
    
        trigeredLeft(){
          let cards = document.getElementsByClassName('cards')[0];
          cards.scrollLeft -= 200;
        },
    },

}

</script>

<template>
    <div class="main-dashboard">
        <Navbar />

        <section>
            <h4>Populer</h4>
            <i @click.prevent="trigeredLeft" class="bi bi-chevron-left"></i>
            <i @click.prevent="trigeredRight" class="bi bi-chevron-right"></i>
            <div class="cards">
                <CardMovie v-for="movie in moviesHome" :key="movie.id" :movie="movie" />
            </div>
        </section>

        <section>
            <h4>Tv Show</h4>
            <i @click.prevent="trigeredLeft" class="bi bi-chevron-left"></i>
            <i @click.prevent="trigeredRight" class="bi bi-chevron-right"></i>
            <div class="cards">
                <CardMovie v-for="movie in moviesTvSow" :key="movie.id" :movie="movie" />
            </div>
        </section>

        <section>
            <h4>Top Airing</h4>
            <i @click.prevent="trigeredLeft" class="bi bi-chevron-left"></i>
            <i @click.prevent="trigeredRight" class="bi bi-chevron-right"></i>
            <div class="cards">
                <CardMovie v-for="movie in moviesTopAiring" :key="movie.id" :movie="movie" />
            </div>
        </section>

        <section>
            <h4>For Kids</h4>
            <i @click.prevent="trigeredLeft" class="bi bi-chevron-left"></i>
            <i @click.prevent="trigeredRight" class="bi bi-chevron-right"></i>
            <div class="cards">
                <CardMovie v-for="movie in moviesForKids" :key="movie.id" :movie="movie" />
            </div>
        </section>

    </div>
</template>

<style>
.navbar-list{
    margin-left: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.navbar-list li{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 30px;
}

.navbar-list li a{
    text-decoration: none;
    color: white;
}
</style>