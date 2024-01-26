<template>
  <div class="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 mb-28">
    <div v-if="services.length" :key="service.id" v-for="service in services">
      <NuxtLink
        :to="service.type.slug + '/' + service.slug"
        class="animate__animated animate__fadeIn"
      >
        <div
          class="h-94 m-3 p-1 bg-white shadow-md rounded-lg transition duration-300 hover:shadow-xl relative overflow-hidden service-box pt-3"
        >
          <div
            class="h-8 w-40 transform -right-12 top-5 rotate-45 z-1 absolute"
            v-if="service.type.slug === 'etkinlikler'"
            :class="[service.is_priced === 1 ? 'bg-red-500' : 'bg-green-500']"
          >
            <p class="text-white mt-2 text-center">
              {{ service.is_priced === 1 ? "Ücretli" : "Ücretsiz" }}
            </p>
          </div>

          <div class="h-auto">
            <div class="w-full">
              <img
                class="h-64 xl:80 lg:h-72 md:h-64 sm:h-64 w-full px-3 object-cover"
                :alt="service.title"
                :src="generateImgUrl(service)"
              />
              <div
                class="w-full z-10 p-2 bg-red-600 text-center text-white"
                v-show="
                  service.status === 'OUT_OF_DATE' ||
                  service.status === 'CANCELED'
                "
              >
                <p>
                  {{
                    service.status === "CANCELED"
                      ? "Etkinlik İptal Edildi"
                      : "Etkinlik Sona Erdi"
                  }}
                </p>
              </div>
            </div>
            <div
              class="float-left service-content text-left w-full lg:w-full md:w-full sm:w-full"
            >
              <h2
                class="text-black text-left ml-3 my-2 text-md title font-weight-bold"
              >
                {{ service.title }}
              </h2>

              <div
                class="text-left w-full text-xl font-weight-bolder flex ml-3 pb-3"
                v-if="true"
              >
                <div class="w-1/2 text-sm text-left">
                  <p class="text-left">
                    <i class="fas fa-city"></i> {{ service.city.name }}
                  </p>
                  <p class="text-left mt-1">
                    <i class="fas fa-bookmark"></i>
                    {{ service.category.name }}
                  </p>
                </div>
                <div class="w-1/2 text-sm text-left">
                  <p class="text-left">
                    <i class="fas fa-calendar-alt"></i> {{ service.date_from }}
                  </p>
                  <p class="text-left mt-1">
                    <i class="fas fa-clock"></i> {{ service.start_time }}
                  </p>
                </div>
              </div>

              <div class="ml-3" v-else>Bilgi Yok</div>

              <div class="w-full p-2 text-center mb-2">
                <a
                  :href="service.type.slug + '/' + service.slug"
                  class="w-full text-white bg-theme-color px-3 py-2 text-lg"
                >
                  <i class="fas fa-search"></i> Detay Görüntüle
                </a>
              </div>

              <div
                class="grid lg:grid-cols-1 p-1 text-2xl absolute bottom-0 text-center -right-96 bg-theme-color text-white w-1/2 service-box-right-belt"
              >
                <div class="inline">
                  <p
                    class="inline w-auto px-1 text-lg"
                    v-for="type in service.types"
                    :key="type.id"
                  >
                    {{ type.title }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  name: "ServiceTeaser",
  props: ["services"],

  methods: {
    generateImgUrl(service) {
      return import.meta.env.VITE_API_URL + "/storage/" + service.logo;
    },
  },
};
</script>

<style scoped>
</style>