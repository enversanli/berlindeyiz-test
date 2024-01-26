<template>
  <MetaHead />

  <div class="container">

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

    <button
        @click="filterServices('', 'nextPage')"
        class="block w-auto mx-auto bpy-1 px-2 bg-theme-color text-white text-xl rounded shadow-sm transition duration-300 hover:bg-red-700"
    >

      <i class="fas fa-arrow-down"></i> Daha Fazla Yükle
    </button>
  </div>

  <ServiceSlider
      v-if="lastAddedServices"
      :services="lastAddedServices.data"
      :title="'Son Eklenenler'"
  />
  </div>
</template>

<script setup>
import { ref } from 'vue';

import ServiceTeaser from "../../components/services/ServiceTeaser.vue";
import ServiceSlider from "../../components/services/ServiceSlider.vue";
import SearchFilter from "../../components/partials/SearchFilter.vue";

const priced = ref(false);
const status = ref('');
const free = ref(false);
const all = ref(true);
const date = ref('');
const category = ref("");
const type = ref("etkinlikler");
const goBack = ref(true);
const metaLinks = ref(null);
let currentPage = ref(1);

const services = ref([]);
const lastAddedServices = ref([]);

const typeSlug = useRoute().params.slug;


services.value = await $fetch("/api/services?category=&type="+typeSlug+"&date=&city=&status=all");

metaLinks.value = services.value.meta;
currentPage.value = metaLinks.value.current_page;

lastAddedServices.value = await $fetch("/api/last-added");

const filterServices = async (expected, isRequest = 'status') => {

  if (isRequest === 'nextPage' && metaLinks.value.last_page > currentPage.value){
    currentPage.value += 1;
  }

  if (isRequest === 'category'){
    category.value = expected;
  }

  if (isRequest === 'type'){
    type.value = expected;
  }

  if (isRequest === 'date'){
    date.value = expected;
  }

  if (isRequest === 'status'){
    free.value = false;
    priced.value = false;
    all.value = false;
    status.value = expected;

    if (expected === "free") {
      free.value = true;
    } else if (expected === "priced") {
      priced.value = true;
    } else {
      all.value = true;
    }
  }

  var url =
      "/api/services?status=" + status.value
      + "&category=" +
      category.value +
      "&type=" +
      type.value +
      "&date=" + date.value+
      "&page=" + currentPage.value;

  if (status.value === null) {
    url = "/services";
    goBack.value = false;
  }

  if (isRequest === 'nextPage'){
    const apiResponse = await $fetch(url);

    services.value.data = [...services.value.data, ...apiResponse.data];
    return;
  }

  services.value = await $fetch(url);
}

</script>
