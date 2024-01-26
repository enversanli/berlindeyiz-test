<template>
  <Head>
    <Title> İletişim | Berlindeyiz</Title>
  </Head>
  <div class="container">
  <h1>İletişim</h1>
  <ContactInfo></ContactInfo>
  <Map></Map>
  </div>
</template>

<script>
import Map from "../components/common/Map";
import ContactInfo from "../components/common/ContactInfo";
import Banner from "../components/common/Banner";
export default {
  name: "iletisim",
  components: {Banner, ContactInfo, Map}
}
</script>

<style scoped>

</style>