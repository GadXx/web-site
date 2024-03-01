<template>
    <div class="navbar">
        <div class="nav-left d-flex">
            <img :src="logoImg" alt="" class="logo">
            <a href="#" class="nav-item">Movies</a>
            <a href="#" class="nav-item">Series</a>
            <a href="#" class="nav-item">Channels</a>
            <a href="#" class="nav-item">Music</a>
        </div>
        <div class="nav-right d-flex">
            <a href="#" class="nav-item">Search</a>
            <a href="#" class="nav-item">Sign in</a>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import logoImg from '../assets/white-onair-logo.svg';

export default defineComponent ({
    name: 'NavBar',
    setup() {
        return {
            logoImg,
        }
    }
});
</script>
