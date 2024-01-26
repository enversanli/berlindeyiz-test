<template>
  <MetaHead />
  <div class="bg-white">

    <div class="relative">
      <div class="mx-auto max-w-7xl">
        <div class="relative z-10 pt-1 lg:w-full lg:max-w-2xl">
          <svg class="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            <polygon points="0,0 90,0 50,100 0,100" />
          </svg>

          <div class="relative px-6 py-1 sm:py-1 lg:px-8 lg:py-56 lg:pr-0">
            <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
              <div class="hidden sm:mb-10 sm:flex">
                <div class="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                  Yaklaşan etkinlikleri hemen görüntüleyin : <a href="#etkinlikler" class="whitespace-nowrap font-semibold text-theme-color"><span class="absolute inset-0" aria-hidden="true"></span>Etkinlikleri Görüntüle <span aria-hidden="true">&darr;</span></a>
                </div>
              </div>
              <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Berlindeyiz</h1>
              <p class="mt-6 text-lg leading-8 text-gray-600">Almanya'da yaşayan Türklerin özgün ve Türkçe platformu !</p>
              <p class="mt-6 text-lg leading-8 text-gray-600"><small>Sosyal ve kültürel faaliyetlerden, Almanya'da yaşayan Türklerin haberlerine kadar bir çok farkı alanda içerik ve kağnağa ulaşabileceğiniz size özel bir platform.</small></p>
              <div class="mt-10 flex items-center gap-x-6">
                <a href="/iletisim" class="rounded-md bg-theme-color px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Bize Ulaşın <span aria-hidden="true">→</span></a>
                <a href="/hakkimizda" class="text-sm font-semibold leading-6 text-theme-color">Hakkımızda </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img class="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full" src="/images/brandenburger.jpg" alt="">
      </div>
    </div>
  </div>

  <stories></stories>
  <div class="container" id="etkinlikler">
  <div
      class="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 text-lg text-theme-color mt-10">
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
        class="block w-60 text-center p-2 mx-auto bpy-1 px-2 bg-theme-color text-white text-xl rounded shadow-sm transition duration-300 hover:bg-red-700"
        to="/etkinlikler"
    >

      <i class="fas fa-star"></i> Tüm Etkinlikler
    </NuxtLink>
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
import ServiceTeaser from "../components/services/ServiceTeaser.vue";
import ServiceSlider from "../components/services/ServiceSlider.vue";
import Stories from "../components/common/Stories.vue";
import MetaHead from "../components/meta/MetaHead.vue";


  const priced = ref(false);
  const status = ref('');
  const free = ref(false);
  const all = ref(true);
  const date = ref('');
  const category = ref("");
  const type = ref("etkinlikler");
  const goBack = ref(true);
  const links = ref(null);

  const services = ref([]);
  const lastAddedServices = ref([]);


  const filterServices = async (expected, isRequest = 'status') => {

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
        "&date=" + date.value;

    if (status.value === null) {
      url = "/services";
      goBack.value = false;
    }

    services.value = await $fetch(url);
  }

</script>
