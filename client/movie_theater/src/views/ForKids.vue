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
        this.fetchMoviesForKids();
    },
    computed:{
        ...mapState(useCounterStore, ['moviesForKids']),
        ...mapWritableState(useCounterStore, ['page'])
    },
    methods: {
        ...mapActions(useCounterStore, ['fetchMoviesForKids']),

        pagination(){
            this.page++;
            this.fetchMoviesForKids();
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
                <PartCard v-for="movie in moviesForKids" :key="movie.id" :movie="movie"/>
            </div>
            <div style="display: flex; justify-content: center; margin-top: 50px; margin-bottom: 50px;">
                <button class="btn btn-primary" @click.privent="pagination">Load More</button>
            </div>
        </div>

    </div>
</template>