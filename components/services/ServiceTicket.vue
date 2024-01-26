<template>
  <div class="mb-10">
    <div class="flex justify-center min-h-screen">
      <div
        class="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5"
      >
        <div class="w-full">
          <h1
            class="text-2xl font-semibold tracking-wider text-gray-800 capitalize dark:text-white"
          >
            <i class="fas fa-ticket-alt"></i> Hemen Biletinizi Ayırt Edin
          </h1>

          <p class="mt-4 text-gray-500 dark:text-gray-400">
            <b>
              <NuxtLink :to="'/etkinlikler/' + service.slug">{{
                service.title
              }}</NuxtLink>
            </b>
            için biletiniz, organizatör kişi/kuruluş aracılığı ile tarafınıza
            iletilecektir.
          </p>
          <p class="mt-4 text-gray-500 dark:text-gray-400">
            <small
              >Bilet satış konusunda berlindeyiz.de, herhangi bir dijital ödeme
              alma imkanı sunmamaktadır ve oluşacak olan mali konulardan asla
              sorumlu değildir.</small
            >
          </p>

          <p class="mt-1 text-gray-500 dark:text-gray-400">
            <small
              >Aşağıdaki formu doldurduğunuzda, kişisel verilerinizin sisteme
              kayıt edilmesi ve işlenmesi konusunda izin vermiş
              sayılırsınız.</small
            >
          </p>
          <div class="mb-10 mt-5">
            <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
              >Ad <span class="text-red-600">*</span></label
            >
            <input
              type="text"
              placeholder="Aslı"
              v-model="firstName"
              required
              class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div class="mb-10">
            <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
              >Soyad <span class="text-red-600">*</span></label
            >
            <input
              type="text"
              placeholder="Gün"
              v-model="lastName"
              required
              class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div class="mb-10">
            <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
              >Telefon Numarası <span class="text-red-600">*</span></label
            >
            <input
              type="text"
              placeholder="XXX-XX-XXXX-XXX"
              v-model="phone"
              required
              class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div class="mb-10">
            <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
              >Email <span class="text-red-600">*</span></label
            >
            <small
              >Gerçek bir mail adresi girmelisiniz. Örn : birisi@mail.com</small
            >
            <input
              type="email"
              placeholder="birisi@mail.com"
              v-model="email"
              required
              class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div class="mb-5">
            <p class="text-red-600">{{ errorMessage }}</p>
          </div>

          <button
            @click="store"
            class="flex items-center justify-between w-full px-6 py-3 text-lg tracking-wide text-white capitalize transition-colors duration-300 transform bg-theme-color rounded-md hover:bg-theme-color-100 focus:outline-none focus:ring focus:bg-theme-color-300 focus:ring-opacity-50"
          >
            <span><i class="fas fa-ticket-alt"></i> Hemen Rezerve Et </span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5 rtl:-scale-x-100"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default defineNuxtComponent({
  name: "ServiceTicket",
  props: ["service"],

  data() {
    return {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      birthDate: "",
      errorMessage: "",
    };
  },

  mounted() {},

  methods: {
    store() {
      const data = {
        service_id: this.service.id,
        first_name: this.firstName,
        last_name: this.lastName,
        phone: this.phone,
        email: this.email,
      };

      axios
        .post(
          import.meta.env.VITE_API_URL +
            "/api/activities/" +
            this.service.slug +
            "/ticket-reservation",
          data
        )
        .then((response) => {
          alert(response.data.message);

          this.firstName = "";
          this.lastName = "";
          this.phone = "";
          this.email = "";
        })
        .catch((e) => {
          if (e.response.status === 422) {
            this.errorMessage = "Lütfen zorunlu alanları doldurunuz.";
          }
        });
    },
  },
});
</script>

<style scoped>
</style>