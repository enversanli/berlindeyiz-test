<template>
  <Head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="author" content="Berlindeyiz, iletisim@berlindeyiz.de"/>
    <meta name="Abstract" content="Berlindeyiz.de"/>
    <meta NAME="robots" CONTENT="noindex,nofollow">
    <meta name="Copyright"
          content="Copyright © 2023. Tüm Hakları Saklıdır. Sitemizin herhangi bir şekilde kopyalanması, çoğaltılması ve dağıtılması halinde yasal haklarımız işletilecektir."/>
    <meta name="publisher" content="Berlindeyiz.de"/>
    <meta name="robots" content="all"/>
    <meta property="og:type" content="article"/>
    <meta property="og:site_name" content="Berlindeyiz"/>
    <meta property="og:locale" content="tr_TR"/>
    <meta property="og:title" content="Berlin Etkinlikleri"/>
     <meta property="og:image" content="'/images/berlindeyiz.png')"/>
    <meta property="og:image:width" content="280"/>
    <meta property="og:image:height" content="280"/>
    <meta property="og:image:type" content="image/jpeg"/>
  </Head>
</template>

<script setup lang="ts">
const props = defineProps({
  metaTitle: String,
  metaDescription: String
})

useSeoMeta({
  title: (props.metaTitle ?? "Berlin başta olmak üzere Almanya'daki tüm etkinlikleri kolayca bulun !") + ' - Berlindeyiz',
  ogTitle: (props.metaTitle ?? "Berlin başta olmak üzere Almanya'daki tüm etkinlikleri kolayca bulun !") + ' - Berlindeyiz',
  description: props.metaDescription ?? "Berlindeyiz, başta Berlin olmak üzere Almanya'nın tüm şehirlerindeki müzik, kültür, sanat, edebiyat, gezi gibi etkinlikleri kolayca bulmanızı sağlar.",
  ogDescription: props.metaDescription ?? "Berlindeyiz, başta Berlin olmak üzere Almanya&#039;nın tüm şehirlerindeki müzik, kültür, sanat, edebiyat, gezi gibi etkinlikleri kolayca bulmanızı sağlar.",
  ogImage: 'http://berlindeyiz.de/images/berlindeyiz.png',
  twitterCard: 'summary_large_image',
})
</script>

<style scoped>

</style>