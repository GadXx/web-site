<template>
    <div class="selection d-flex" @click="ophenFilm">
        <div 
        v-for="(image, index) in Images" 
        :key="index" 
        :style="{ backgroundImage: `url(${image})`, backgroundSize: 'cover' }" 
        class="item-film"
        @mouseover="showOverlay = true"
        @mouseleave="showOverlay = false"
        >
            <div v-if="showOverlay" class="overlay">
                <div class="rating">9</div>
                <p class="overlay-text">Название</p>
                <p class="text">Тут какой-то текст, описание... Побольше текста, ту-ту-ту-ту</p>
                <p class="learn-more">Узнать больше ></p>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent, ref } from 'vue';

import image1 from '../assets/image20.png';
import image2 from '../assets/image201.png';
import image3 from '../assets/image202.png';
import image4 from '../assets/image203.png';
import image5 from '../assets/image204.png';
import image6 from '../assets/image205.png';

export default defineComponent({
    setup() {
        const showOverlay = ref(false);
            
        return {
            Images: [image1, image2, image3, image4, image5, image6],
            showOverlay,
        };
    },
    methods: {
        ophenFilm() {
            this.$router.push('/card-film')
        }
    },
});
</script>
