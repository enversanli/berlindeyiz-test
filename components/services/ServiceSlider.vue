<template>
  <h2 class="text-xl my-5">{{ title }}</h2>
  <carousel
    v-bind="settings"
    :breakpoints="breakpoints"
    class="w-full animate__animated animate__fadeIn shadow shadow-sm mb-10 h-60 mt-4"
    v-if="services && services.length > 0"
  >
    <slide
      class="h-60 overflow-hidden relative mx-1"
      v-for="service in services"
    >
      <NuxtLink :to="'/etkinlikler/' + service.slug">
        <img
          class="w-full h-60 object-cover"
          :alt="`${service.title}`"
          :src="generateImgUrl(service)"
        />

        <div
          class="z-10 bg-theme-color opacity-95 hover:opacity-100 p-2 absolute bottom-0 right-0 left-0"
        >
          {{ service.title }}
        </div>
      </NuxtLink>
    </slide>
    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </carousel>
</template>

<script setup>
import {ref} from "vue";

const props = defineProps({
  services:{
    type: Object,
    required: true,
  },
});
</script>

<script>
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";

export default {
  name: "ServiceSlider",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  props: ["title"],

  data() {
    return {
      settings: {
        itemsToShow: 4,
        transition: 800,
        autoplay: 1800,
        wrapAround: true,
      },
      breakpoints: {
        300: {
          itemsToShow: 1,
          snapAlign: "center",
        },

        500: {
          itemsToShow: 2,
          snapAlign: "center",
        },
        // 700px and up
        700: {
          itemsToShow: 2.5,
          snapAlign: "center",
        },
        // 1024 and up
        1024: {
          itemsToShow: 3.5,
          snapAlign: "start",
        },
      },
    };
  },

  methods: {
    generateImgUrl(service) {
      return import.meta.env.VITE_API_URL + "/storage/" + service.logo;
    },
  },
};
</script>