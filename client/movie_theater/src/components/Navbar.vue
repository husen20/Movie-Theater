<script>
import { mapState } from 'pinia'
import { useCounterStore } from '../stores/counter'

export default{
    computed:{
        ...mapState(useCounterStore, ['isLogin'])
    }
}
</script>

<template>
        <div class="navbar-dashboard">
            <div class="logo-dashboard">
                <h3>IMDb</h3>
            </div>
            <div class="navbar-list">
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
            </div>
            <div class="account ms-5">
                <RouterLink to="login">
                    <a href="#" v-if="!isLogin"><i class="bi bi-person"></i> Sign In</a>
                </RouterLink>
                <a href="#" v-if="isLogin"><i class="bi bi-person"></i> Ismail Husain</a>
                <a href="#" class="nav-text ms-4" @click.prevent="logout" v-if="isLogin"><i class="bi bi-box-arrow-right"></i></a>
            </div>
        </div>
</template>