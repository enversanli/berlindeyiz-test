<template>
  <MetaHead />
  <Slider></Slider>
  <SearchFilter></SearchFilter>
  <div
      class="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 text-lg text-theme-color mt-10"
  >
    <div
        class="h-9 m-3 p-1  shadow-md rounded-lg transition duration-700 hover:shadow-xl cursor-pointer filter-button"
        :class="[all === true ? 'shadow-xl active-service' : '']"
        @click="filterServices('all')"
    >
      <p class="text-center font-weight-bold">
        <i class="far fa-check-circle"></i> Tümü
      </p>
    </div>
    <div
        class="h-9 m-3 p-1  shadow-md rounded-lg transition duration-700 hover:shadow-xl cursor-pointer filter-button"
        :class="[free === true ? 'shadow-xl active-service' : '']"
        @click="filterServices('free')"
    >
      <p class="text-center font-weight-bold">
        <i class="far fa-arrow-alt-circle-right"></i> Ücretsiz
      </p>
    </div>

    <div
        class="h-9 m-3 p-1  shadow-md rounded-lg transition duration-700 hover:shadow-xl cursor-pointer filter-button"
        :class="[priced === true ? 'shadow-xl active-service' : '']"
        @click="filterServices('priced')"
    >
      <p class="text-center font-weight-bold">
        <i class="far fa-check-circle"></i> Ücretli
      </p>
    </div>
  </div>

  <ServiceTeaser v-if="services && services.data && services.data.length" :services="services.data" />


  <div class="w-full">

    <NuxtLink
        class="block w-40 mx-auto bpy-1 px-2 bg-theme-color text-white text-xl rounded shadow-sm transition duration-300 hover:bg-red-700"
        to="/etkinlikler"
    >

      <i class="fas fa-arrow-down"></i> Daha Fazla Yükle
    </NuxtLink>
  </div>

  <ServiceSlider
      v-if="lastAddedServices"
      :services="lastAddedServices.data"
      :title="'Son Eklenenler'"
  />
</template>

<script setup>
import ServiceTeaser from "../../components/services/ServiceTeaser.vue";
import ServiceSlider from "../../components/services/ServiceSlider.vue";
import SearchFilter from "../../components/partials/SearchFilter.vue";
import Slider from "../../components/common/Slider.vue";


import { ref } from 'vue';
import axios from "axios";

const priced = ref(false);
const free = ref(false);
const all = ref(true);
const category = ref("");
const type = ref("");
const goBack = ref(true);
const links = ref(null);

const services = ref([]);
const lastAddedServices = ref([]);

services.value = await $fetch("/api/activities?category=&type=etkinlikler&date=&city=&status=all");

lastAddedServices.value = await $fetch("/api/last-added");


const filterServices = async (status) => {
  free.value = false;
  priced.value = false;
  all.value = false;

  if (status === "free") {
    free.value = true;
  } else if (status === "priced") {
    priced.value = true;
  } else {
    all.value = true;
  }

  var url =
      import.meta.env.VITE_API_URL +
      "/api/activities?status=" +
      status +
      "&category=" +
      category.value +
      "&type=" +
      type.value;

  if (status === null) {
    url = "/services";
    goBack.value = false;
  }

  axios.get(url).then((response) => {
    services.value = response.data.data;
    links.value = response.data.links;
  });
}

</script>
