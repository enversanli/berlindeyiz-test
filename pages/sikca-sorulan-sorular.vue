<template>
  <Head>
    <Title> Sıkça Sorulan Sorular </Title>
  </Head>
  <div class="container">
  <FaqList :list="announcements.data" :title="'Sıkça Sorulan Sorular'" />

    <ServiceSlider
        v-if="lastAddedServices"
        :services="lastAddedServices.data"
        :title="'Son Eklenenler'"
    />
  </div>
</template>


<script setup>
import FaqList from "../components/common/FaqList.vue";
import {ref} from "vue";
import ServiceSlider from "../components/services/ServiceSlider";
const announcements = ref(null);
const lastAddedServices = ref(null);

announcements.value = await $fetch("/api/custom?endpoint=faqs");
lastAddedServices.value = await $fetch("/api/last-added");
</script>

<style scoped>
</style>