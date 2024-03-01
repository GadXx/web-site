<template>
    <div class="main-part">
        <Recommended :textProp="lable1"/>
        <Recommended :textProp="lable2"/>
        <Recommended :textProp="lable3"/>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import Recommended from './RecommendedFilms.vue';


export default defineComponent({
    components: {
        Recommended,
    },
    setup() {
        return {
            lable1: "Recommended Movies",
            lable2: "New Movies",
            lable3: "Popular Movies",
        };
    },
});
</script>
