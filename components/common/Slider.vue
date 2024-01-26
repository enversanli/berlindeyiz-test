<template>
    <carousel v-bind="settings"
              class="w-full  animate__animated animate__fadeIn shadow shadow-sm mb-5">
      <slide class="w-full overflow-hidden" v-for="slider in sliders.data">
        <img class="w-full h-72 object-cover"
             :alt="slider.title"
             :src="generateUrl(slider.image)">
      </slide>
      <template #addons>
        <Navigation/>
        <Pagination/>
      </template>
    </carousel>
</template>

<script>
import axios from "axios";

import {Carousel, Navigation, Pagination, Slide} from 'vue3-carousel'

export default defineNuxtComponent({
  name: "Slider",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },

  data() {
    return {

      settings: {
        itemsToShow: 1,
        snapAlign: 'center',
        transition: 800,
        autoplay: 1800,
        wrapAround: true
      },
    }
  },

  async asyncData() {
    const sliders = await $fetch(
        import.meta.env.VITE_API_URL + '/api/sliders'
    );

    return {
      sliders,
    };
  },

  methods: {
    getSliders() {
      axios.get(import.meta.env.VITE_API_URL + '/api/sliders').then(response => {
        this.sliders = response.data.data
      });
    },
    generateUrl(imgUrl){
      return import.meta.env.VITE_API_URL + imgUrl;
    }
  }
});
</script>

<style scoped>

</style>