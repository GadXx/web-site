<template>
    <div class="comments">
        <div class="q-pa-md" style="width: 80%">
        <q-input
        v-model="text"
        filled
        autogrow
        class="input"
        />
        </div>
        <q-btn color="white" text-color="black" label="Standard" />
        <AllComments />
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import AllComments from './AllComments.vue';

export default defineComponent({
    components: {
        AllComments,
    },
    setup() {
        return {

        }
    }
});
</script>

