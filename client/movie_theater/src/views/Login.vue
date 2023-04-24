<script>
import { mapActions } from 'pinia';
import { useCounterStore } from '../stores/counter';

export default{
    data(){
        return {
            email: '',
            password: ''
        }
    }, 
    methods: {
        ...mapActions(useCounterStore, ['login']),
        submitLogin(){
            this.login({
                email: this.email,
                password: this.password
            })
        }
    }
    
}
</script>

<template>
    <div class="main">
        <div class="box-login">
            <div class="box-login-image">
                <img src="/img/login_image.png" class="img-login" alt="">
            </div>
            <div class="login-form">
                <h2 style="margin-left: 50px; font-weight: 700;">Login</h2>
                <form style="margin-top: 35px;" @submit.prevent="submitLogin">
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input v-model="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input v-model="password" type="password" class="form-control" id="exampleInputPassword1">
                    </div>
                    <button type="submit" class="btn btn-primary mt-4">Submit</button>

                    <div id="register-help" class="form-text mt-3">Not a member ? 
                        <RouterLink to="register" class="register-link">
                            Register
                        </RouterLink>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>