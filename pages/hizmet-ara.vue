<template>
  <Head>
    <Title>Hello It's Me!</Title>
  </Head>
  <Slider></Slider>
  <SearchFilter></SearchFilter>
  <div
    class="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 text-lg text-theme-color mt-10"
  >
    <div
      class="h-9 m-3 p-1 bg-white shadow-md rounded-lg transition duration-700 hover:shadow-xl cursor-pointer animate__animated animate__fadeIn"
      :class="[all === true ? 'shadow-xl active-service' : '']"
      @click="filterServices('all')"
    >
      <p class="text-center font-weight-bold">
        <i class="far fa-check-circle"></i> Tümü
      </p>
    </div>
    <div
      class="h-9 m-3 p-1 bg-white shadow-md rounded-lg transition duration-700 hover:shadow-xl cursor-pointer animate__animated animate__fadeIn"
      :class="[free === true ? 'shadow-xl active-service' : '']"
      @click="filterServices('free')"
    >
      <p class="text-center font-weight-bold">
        <i class="far fa-arrow-alt-circle-right"></i> Ücretsiz
      </p>
    </div>
    <div
      class="h-9 m-3 p-1 bg-white shadow-md rounded-lg transition duration-700 hover:shadow-xl cursor-pointer animate__animated animate__fadeIn"
      :class="[priced === true ? 'shadow-xl active-service' : '']"
      @click="filterServices('priced')"
    >
      <p class="text-center font-weight-bold">
        <i class="far fa-check-circle"></i> Ücretli
      </p>
    </div>
  </div>

  <ServiceTeaser :services="services" />

  <div class="w-full">
    <button
      class="block mx-auto bpy-1 px-2 bg-theme-color text-white text-xl rounded shadow-sm transition duration-300 hover:bg-red-700"
      v-if="loadMore"
      @click="load"
    >
      <i class="fas fa-arrow-down"></i> Daha Fazla
    </button>
  </div>

  <ServiceSlider
    v-if="lastAddedServices"
    :services="lastAddedServices"
    :title="'Son Eklenenler'"
  />
</template>
    
    <script>
import axios from "axios";

import ServiceTeaser from "../components/services/ServiceTeaser.vue";
import ServiceSlider from "../components/services/ServiceSlider.vue";
import SearchFilter from "../components/partials/SearchFilter.vue";
import Slider from "../components/common/Slider.vue";

export default {
  name: "ServicesView",
  head: {
    title: "test",
  },
  components: { Slider, SearchFilter, ServiceTeaser, ServiceSlider },
  data() {
    return {
      sliders: [],
      links: null,
      loadMore: true,
      selectedCategory: "",
      selectedCity: "",
      selectedType: "",
      lastAddedServices: null,
      all: true,
      priced: false,
      free: false,
      category: "",
      date: "",
      city: "",
      status: "",
      services: [],
    };
  },

  setup() {},

  mounted() {
    this.getServices();
    this.getLastAdded();
  },

  methods: {
    getServices() {
      axios
        .get(
          import.meta.env.VITE_API_URL +
            "/api/activities?category=&type=etkinlikler&date=&city=&status=all"
        )
        .then((response) => {
          this.services = response.data.data;
          this.links = response.data.links;
        });
    },

    load() {
      if (this.links.next === null) {
        this.loadMore = false;
        return false;
      }

      var nextUrl =
        this.links.next +
        "&status=" +
        status +
        "&category=" +
        this.selectedCategory +
        "&type=" +
        this.selectedType;

      if (this.free === true) {
        nextUrl += "&status=free";
      }

      if (this.priced === true) {
        nextUrl += "&status=priced";
      }

      if (this.all === true) {
        nextUrl += "&status=all";
      }

      axios.get(nextUrl).then((response) => {
        this.links = response.data.links;
        if (this.links.next === null) {
          this.loadMore = false;
        }

        response.data.data.forEach((item) => {
          this.services.push(item);
        });
      });
    },

    getLastAdded() {
      var url = import.meta.env.VITE_API_URL + "/api/activities/son-eklenenler";
      axios.get(url).then((response) => {
        this.lastAddedServices = response.data.data;
      });
    },

    filterServices(status = null) {
      this.free = false;
      this.priced = false;
      this.all = false;
      if (status === "free") {
        this.free = true;
      } else if (status === "priced") {
        this.priced = true;
      } else {
        this.all = true;
      }
      document.title = "Seni sevirem hele de !";
      var url =
        import.meta.env.VITE_API_URL +
        "/api/activities?status=" +
        status +
        "&category=" +
        this.category +
        "&type=" +
        this.type;

      if (status === null) {
        url = "/services";
        this.goBack = false;
      }
      // if (status !== null && status === 'Ended') {
      //     this.goBack = true;
      // }

      axios.get(url).then((response) => {
        this.services = response.data.data;
        this.links = response.data.links;
      });
    },
  },
};
</script>
    
    <style scoped>
</style>