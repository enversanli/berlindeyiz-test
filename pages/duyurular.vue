<template>
  <Head>
    <Title> Duyurular </Title>
  </Head>
  <div class="container">
    <FaqList v-if="announcements.data" :list="announcements.data" :title="'Duyurular'"/>

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

announcements.value = await $fetch("/api/custom?endpoint=announcements");
lastAddedServices.value = await $fetch("/api/last-added");
</script>

<style scoped>
</style>