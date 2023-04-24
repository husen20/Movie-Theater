<script>
import PartCard from '../components/PartCard.vue'
import Navbar from '../components/Navbar.vue'
import {mapActions, mapState, mapWritableState} from 'pinia'
import {useCounterStore} from '../stores/counter'

export default{
    components:{
        PartCard,
        Navbar
    },
    created(){
        this.fetchMoviesHome();
    },
    computed:{
        ...mapState(useCounterStore, ['moviesPopuler']),
        ...mapWritableState(useCounterStore, ['pagePopuler'])
    },
    methods: {
        ...mapActions(useCounterStore, ['fetchMoviesPopuler', 'fetchMoviesHome']),

        pagination(){
            this.pagePopuler++;
            this.fetchMoviesHome();
        },

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

        <div class="box-cards">
            <h4 style="margin-left: 50px; margin-top: 30px; color: white;">Populer</h4>
            <div class="cards">
                <PartCard v-for="movie in moviesPopuler" :key="movie.id" :movie="movie"/>
            </div>
            <div style="display: flex; justify-content: center; margin-top: 50px; margin-bottom: 50px;">
                <button class="btn btn-primary" @click.privent="pagination">Load More</button>
            </div>
        </div>

    </div>
</template>