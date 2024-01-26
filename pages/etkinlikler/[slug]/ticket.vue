<template>
  <!-- <Head>
    <Title>{{ service.data.title }}</Title>
  </Head> -->

  <!-- {{ service }} ddd -->
  <!-- <div>{{ service.data }}</div> -->
  <!-- {{ service.data.title }} -->

  <ServiceTicket v-if="service" :service="service.data" />
</template>

<script>
import ServiceTicket from "../../../components/services/ServiceTicket.vue";
import axios from "axios";

// let { data: service } = useFetch(
//   "https://berlindeyiz.de/api/activities/" + useRoute().params.slug
// );

export default defineNuxtComponent({
  name: "ServiceTicketReservationView",
  components: { ServiceTicket },
  props: ["slug"],

  head() {
    return {
      title: "test1",
    };
  },

  async asyncData() {
    return {
      service: await $fetch(
        "https://berlindeyiz.de/api/activities/" + useRoute().params.slug
      ),
    };
  },

  data() {
    return {
      service: [],
    };
  },
});
</script>