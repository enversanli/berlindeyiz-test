<template>
  <MetaHead :meta-title="service.data.title" :meta-description="service.data.meta.seo_description"/>
  <div class="container">
  <ServiceSchemaOrg :service="service?.data"></ServiceSchemaOrg>
  <ServiceDetail v-if="service" :service="service?.data"/>
  </div>
</template>

<script setup lang="ts">
import MetaHead from "../../../components/meta/MetaHead.vue";
import ServiceDetail from "../../../components/services/ServiceDetail.vue";
import ServiceSchemaOrg from "../../../components/meta/ServiceSchemaOrg.vue";
import {ref} from "vue";

const service = ref([]);

service.value = await $fetch("/api/service-detail?slug=" + useRoute().params.slug);

</script>

<style scoped>
</style>