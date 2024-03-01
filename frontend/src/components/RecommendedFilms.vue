<template>
    <div class="recommended-group">
        <div class="title-group d-flex">
            <p class="title-selection-group">{{ textProp }}</p>
            <a href="#" class="view-more">View all ></a>
        </div>
        <CardFilm />
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import CardFilm from './CardFilm.vue';


export default defineComponent({
    components: {
        CardFilm,
    },  
    props: {
        textProp: String,
    },
    setup() {
        
    }
});
</script>