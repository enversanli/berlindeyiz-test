<template>
  <div>
    <form action="/hizmet-ara">
      <h1 clasS="text-center text-3xl mb-2">Berlindeyiz.de</h1>
      <h2 clasS="text-center text-xl">Aradığın Her Şey Berlindeyiz.de!</h2>
      <div class="grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-1 text-lg text-theme-color w-2/3 mx-auto">


        <select
                @change="trigger('type')"
                v-model="type"
                class="h-9 m-1 p-1 bg-white shadow-md rounded-lg transition duration-700 hover:shadow-xl cursor-pointer animate__animated animate__fadeIn border border-none">
          <option value="" disabled selected>Ne Arıyorsun ?</option>
          <option v-for="serviceType in serviceTypes" :value="serviceType.slug">{{ serviceType.title }}</option>
        </select>
        <select
                @change="trigger('category')"
                v-model="category"
                class="h-9 m-1 p-1 bg-white shadow-md rounded-lg transition duration-700 hover:shadow-xl cursor-pointer animate__animated animate__fadeIn border border-none">
          <option :value="''">Kategori</option>
          <option :value="'all'">Kategori</option>
          <option v-for="category in categories" :value="category.slug">{{ category.name }}</option>
        </select>
        <!--<select name="sehir"
                class="h-9 m-1 p-1 bg-white shadow-md rounded-lg transition duration-700 hover:shadow-xl cursor-pointer animate__animated animate__fadeIn">
          <option value="">Şehir</option>
          <option v-for="city in cities" :value="city.slug">{{ city.name }}</option>
        </select>-->
        <select
            @change="trigger('date')"
            v-model="date"
            class="h-9  m-1 p-1 bg-white shadow-md rounded-lg transition duration-700 hover:shadow-xl cursor-pointer animate__animated animate__fadeIn border border-none">
          <option :value="''">Tarih</option>
          <option :value="'bu-hafta'">Bu Hafta</option>
          <option :value="'gelecek-hafta'">Gelecek Hafta</option>
          <option :value="'bu-ay'">Bu Ay</option>
          <option :value="'gelecek-ay'">Gelecek Ay</option>
          <option @click="selectDate()" :value="true">Tarih Belirle</option>
        </select>
        <button type="submit"
                class="h-9  m-1 p-1 bg-white shadow-md rounded-lg transition duration-700 hover:shadow-xl cursor-pointer animate__animated animate__fadeIn ">
          Ara
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const date = ref(null);
const type = ref(null);
const category = ref(null);
const categories = ref(null);
const serviceTypes = ref(null);

const props = defineProps({
  filterServices: {
    type: Object,
    required: true,
  },
});

serviceTypes.value = (await $fetch(import.meta.env.VITE_API_URL + '/api/service-types')).data;
categories.value = (await $fetch(import.meta.env.VITE_API_URL + '/api/categories')).data;

const trigger = async (requestType) => {
  var value = '';
  if (requestType === 'type'){
    value = type.value;
  }

  if (requestType === 'category'){
    value = category.value;
  }

  if (requestType === 'date'){
    value = date.value;
  }

  props.filterServices(value, requestType);
}

</script>

<script>
import axios from "axios";

export default {
  name: "SearchFilter",
  data() {
    return {
      date: null,
      //serviceTypes: null,
      //categories: null,
      cities: null,
      dateSelectOption: true
    }
  },

  mounted() {
    //this.getCities();
    //this.getCategories();
    // this.getServiceTypes();
  },

  methods: {
    getCategories() {
      var endPoint = import.meta.env.VITE_API_URL + '/api/categories';

      if (this.type !== ''){
        endPoint += '?type=' + this.type;
      }

      axios.get(endPoint).then(response => {
        this.categories = response.data.data;
      });
    },

    getServiceTypes() {
      axios.get(import.meta.env.VITE_API_URL + '/api/service-types').then(response => {
        this.serviceTypes = response.data.data;
      });
    },
    getCities() {
      axios.get(import.meta.env.VITE_API_URL + '/api/cities').then(response => {
        this.cities = response.data.data;
      })
    },

    selectDate($event) {
      if ($event.target.value === true) {
        alert("DATE SELECT");
      }

    }
  }
}
</script>
