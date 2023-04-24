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
        this.fetchMoviesTvShow();
    },
    computed:{
        ...mapState(useCounterStore, ['moviesTvSow']),
        ...mapWritableState(useCounterStore, ['page'])
    },
    methods: {
        ...mapActions(useCounterStore, ['fetchMoviesTvShow']),

        pagination(){
            this.page++;
            this.fetchMoviesTvShow();
        },
    },

}
</script>

<template>
    <div class="main-dashboard">
        <Navbar />

        <div class="box-cards">
            <h4 style="margin-left: 50px; margin-top: 30px; color: white;">Tv Show</h4>
            <div class="cards">
                <PartCard v-for="movie in moviesTvSow" :key="movie.id" :movie="movie"/>
            </div>
            <div style="display: flex; justify-content: center; margin-top: 50px; margin-bottom: 50px;">
                <button class="btn btn-primary" @click.privent="pagination">Load More</button>
            </div>
        </div>

    </div>
</template>