<template>
    <div class="wrapper">
        <NavBar />
        <FilmInfo />
        <CommentsFilm />
        <MainFooter />
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import NavBar from 'src/components/NavBar.vue';
import MainFooter from 'src/components/MainFooter.vue';
import FilmInfo from 'src/components/FilmInfo.vue';
import CommentsFilm from 'src/components/CommentsFilm.vue';

export default defineComponent({
    components: {
        NavBar,
        FilmInfo,
        MainFooter,
        CommentsFilm,
    },
});
</script>
