<template>
  <div
    class="w-auto mr-auto ml-auto p-3 z-50 fixed bottom-2 right-3 left-3 text-center"
  >
    <NuxtLink
      v-if="service.meta.ticket"
      :to="service.meta.ticket"
      class="w-32 p-3 shadow-lg bg-theme-color mr-1"
      target="_blank"
    >
      <i class="fas fa-shopping-cart"></i> Bilet
    </NuxtLink>
    <NuxtLink
      v-if="service.meta.mail"
      :to="'mailto:' + service.meta.mail"
      class="bg-theme-color p-3 mr-1"
    >
      <i class="fas fa-envelope"></i> Mail
    </NuxtLink>
    <a
      v-if="service.meta.phone"
      :href="'tel:' + service.meta.phone"
      class="bg-theme-color p-3 mr-1"
    >
      <i class="fas fa-phone"></i> Ara
    </a>
  </div>
</template>

<script>
export default {
  name: "ServiceOptions",
  props: ["service"],
};
</script>
