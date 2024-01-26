<template>
  <div class="carousel-container my-10 align-middle" v-if="storyItems.length > 0">
    <carousel
              v-bind="{itemsToShow:2,transition: 1800,autoplay: 1800,wrapAround: true}"
    >

        <slide v-for="storyItem in storyItems"
               :class="`h-16   text-white ${storyItem.color} rounded-full border-2 border-white`">
          <NuxtLink class="text-2xl" target="_blank" :to="storyItem.url"><i :class="storyItem.icon"></i> {{storyItem.title}}

          </NuxtLink>
        </slide>
    </carousel>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import * as CarouselComponents from 'vue3-carousel';

const { Carousel, Navigation, Pagination, Slide } = CarouselComponents;



const storyItems = ref([]);

onMounted(async () => {
  // Fetch data and set it to storyItems
  // Example: storyItems.value = await fetchData();

  // Mock data for testing
  storyItems.value = [
    { color: 'bg-youtube-red', title: 'Youtube',icon:"fab fa-youtube", url : "https://www.youtube.com/channel/UCISTjt0WNB_cfebhmUiOSXQ" },
    { color: 'bg-facebook-blue', title: 'Facebook', icon:"fab fa-facebook", url : "https://m.facebook.com/people/Berlindeyiz/100087378266298/"},
    { color: 'bg-tiktok-red', title: 'TikTok',icon:"fab fa-tiktok", url : "https://www.tiktok.com/@berlindeyiz.de" },
    { color: 'bg-instagram-gradient', title: 'Instagram', icon:"fab fa-instagram", url : "https://www.instagram.com/berlindeyiz.de/" },
    // Add more items as needed
  ];
});
</script>
