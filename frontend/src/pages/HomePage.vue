<template>
    <div class="wrapper">
        <NavBar />
        <Stand />
        <MainPartMainPage />
        <MainFooter />
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import NavBar from 'components/NavBar.vue'
import Stand from 'src/components/StandMain.vue';
import MainPartMainPage from 'src/components/MainPartMainPage.vue';
import MainFooter from 'src/components/MainFooter.vue';

export default defineComponent({
    name: 'HomePage',

    components: {
        NavBar,
        Stand,
        MainPartMainPage,
        MainFooter,
    },
});
</script>
