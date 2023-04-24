<script>
import { mapActions, mapState } from 'pinia';
import { useCounterStore } from '../stores/counter';

export default{
    props: ['movie'],

    created(){
        this.movieById()
        this.trailerById()
    },
    
    computed: {
        ...mapState(useCounterStore, ['keyTrailer'])
    },

    methods:{
        ...mapActions(useCounterStore,['trailerById', 'movieById']),
        trigerTrailer(id){
            this.movieById(id)
            this.trailerById(id)
            this.$router.push(`/detail/${id}`)
        },

    }
}
</script>

<template>
    <a @click.prevent="trigerTrailer(movie.id)" href="#" class="card">
        <img :src="movie.poster_path" alt="" class="poster">
        <div class="rest_card">
            <img :src="movie.backdrop_path" alt="">
            <div class="cont">
                <h4 style="font-size: 15px;">{{ movie.title }}</h4>
                <div class="sub">
                    <p>{{ movie.first_air_date }}</p>
                    <h3><span>IMDB</span><i class="bi bi-star-fill"></i> {{ movie.vote_average }}</h3>
                </div>
            </div>
        </div>
    </a>
</template>