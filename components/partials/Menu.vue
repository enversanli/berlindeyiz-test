<template>
  <div class="fixed top-0 left-0 right-0 bottom-0 z-22 animate__animated d-none bg-gray-500 bg-opacity-50"
       :class="[(menu === true ? 'animate__fadeIn d-block' : 'animate__fadeOut')]">
    <div
        class="menu lg:w-1/4 md:w-1/3 sm:w-full w-full h-100 bg-white text-theme-color  absolute left-0 top-0 bottom-0 right-auto md:right-0 sm:right-0">

      <div class="absolute top-5 right-7">
        <i class="fas fa-times cursor-pointer text-2xl" @click="toggleMenu"></i>
      </div>
      <ul class="mt-20 text-3xl pl-5 font-weight-bold">
        <li class="my-4 ml-3"><a href="/"><i class="fas fa-home"></i> Anasayfa</a></li>
        <li class="my-4 ml-3"><a href="/hakkimizda"><i class="fas fa-bullhorn"></i> Hakkımızda</a></li>
        <li class="my-4 ml-3"><a href="/duyurular"><i class="fas fa-bullhorn"></i> Duyurular</a></li>
        <li class="my-4 ml-3"><a href="/sikca-sorulan-sorular"><i class="far fa-question-circle"></i> S.S.S</a></li>
      </ul>

    </div>
  </div>
</template>

<script>
export default {
  name: "Menu",

  data() {
    return {
      menu: false,
    }
  },

  mounted() {
    alert("12");
  },

  methods: {
    toggleMenu() {
      if (this.menu === false) {
        this.menu = true;
      } else {
        this.menu = false;
      }
    }
  }
}
</script>

<style scoped>

</style>