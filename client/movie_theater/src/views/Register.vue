<script>
import { mapActions } from 'pinia'
import { useCounterStore } from '../stores/counter'
import Navbar from '../components/Navbar.vue'

export default{
    components:{
        Navbar
    },
    data(){
        return{
            username: '',
            email: '',
            password: '',
            profile_picture: ''
        }
    },

    methods:{
        ...mapActions(useCounterStore, ['register']),
        submitRegister(){
            this.register({
                username: this.username,
                email: this.email,
                password: this.password,
                profile_picture: this.profile_picture
            })
        },
        onChangeFile(event) {
            this.profile_picture = event.target.files[0]
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
            <div class="register-form">
                <h2 style="margin-left: 50px; font-weight: 700;">Register</h2>
                <form @submit.prevent="submitRegister" enctype="multipart/form-data">
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Username</label>
                        <input v-model="username" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input v-model="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input v-model="password" type="password" class="form-control" id="exampleInputPassword1">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Profile Picture</label>
                        <input v-on:change="onChangeFile" type="file" class="form-control" id="exampleInputPassword1" name="profile_picture">
                    </div>
                    <button type="submit" class="btn btn-primary mt-4">Submit</button>
                </form>
            </div>
        </div>
    </div>
</template>