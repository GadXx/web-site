<template>
    <div class="main-stand">
        <p class="text">Dive into a universe of un-ending content and channels</p>
        <q-btn class="glossy" rounded label="Start FREE trial" />
        <img :src="slide1" alt="">
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import slide1 from '../assets/onair-slide-1 1.png';
    export default defineComponent({
        setup() {
            return {
                slide1,
            }
        }
    });
</script>
