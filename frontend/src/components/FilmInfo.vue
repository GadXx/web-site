<template>
    <div class="card-film d-flex">
        <img :src="image" alt="">
        <div class="film-description">

            <div class="d-flex">
                <div class="movie-title">Сказка о рыбаке и рыбке</div>
                <div class="date">2014</div>
            </div>

            <div class="description-parameter d-flex">
                <div>Страна:</div>
                <div class="">USA</div>
            </div>

            <div class="description-parameter d-flex">
              <div>Жанр:</div>
              <div class="">USA</div>
            </div>

            <div class="description-parameter d-flex">
                <div>Время:</div>
                <div class="">{{formatted_time}}</div>
            </div>

            <div class="description-parameter d-flex">
                <div>Режисер:</div>
                <div class="">USA</div>
            </div>

            <div class="description-parameter d-flex">
                <div>Сценарий:</div>
                <div class="">USA</div>
            </div>

            <div class="description-parameter d-flex">
                <div>Продюсер:</div>
                <div class="">USA</div>
            </div>

            <div class="description-parameter d-flex">
                <div>Бюджет:</div>
                <div class="">USA</div>
            </div>

            <div class="description-parameter d-flex">
                <div>Маркетинг:</div>
                <div class="">USA</div>
            </div>

            <div class="description-parameter d-flex">
                <div>Сборы:</div>
                <div class="">USA</div>
            </div>
        </div>
    </div>

        <div class="description">
        <p class="text-description">dfsj sko gnfd s jngod fsngujnf djksgnkj dfsng kjnd fjkg ndfkjngkjdf nsgk dfsj skogn fdsjngodfs ngujnfd jksgnkj dfsjsko gnfdsjng odfsngujnfd jksgnkjdkj ngkj dfnsgk jndfskj gndfjkn gjik
            dfsngk jndfjkg ndfkjngkjdf nsgkjndfskj gndfjkngji kjndfskjg ndfjkn text-des cript iont ext-descriptiontext-text-desc ript ionte xt-des criptio ntext-descrip tionde script iongjik</p>
        <div class="rating q-pa-md d-flex">
            <q-rating
                v-model="model"
                max="5"
                size="3.5em"
                color="yellow"
                icon="star_border"
                icon-selected="star"
                icon-half="star_half"
            />
            <p class="rating_count">({{ model }})</p>
        </div>

    </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import image from 'assets/image20.png';

export default defineComponent ({
    setup() {
        const time = 1231;
        let hours = Math.floor(time / 60 / 60);
        let minutes = Math.floor(time / 60) - (hours * 60);
        let seconds = time % 60;
        let formatted_time = hours + ':' + minutes + ':' + seconds;

        const Film = {
            name: '',
            description: {

            }
        }

        return {
            image,
            model: ref(3.5),
            formatted_time,
            rating: 0,
            text: ref(''),
        }
    },
});
</script>
