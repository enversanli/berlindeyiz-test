<template>
  <div class="container">
  <Title> Hakkımızda </Title>
    <div class="relative bg-white">
      <div class="mx-auto w-full lg:justify-between lg:px-8">
        <div class="px-6 lg:contents">
          <div class="mx-auto pb-24 pt-16 sm:pb-32 sm:pt-20 lg:ml-8 lg:mr-0 lg:flex-none lg:pt-32 w-full">
            <p class="text-base font-semibold leading-7 text-theme-color">Biz Berlin'i Konuşacağız, Berlin Bizi Konuşacak</p>
            <h1 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Hakkımızda</h1>
            <p class="mt-6 text-xl leading-8 text-gray-700">
              Berlindeyiz, başta Berlin olmak üzere Almanya genelinde yaşayan Türk topluluğuna hitap eden çok yönlü bir platformdur. Amacı toplumun faydasına olan ve iletişimi kuvvetlendirmek olan Berlindeyiz, toplumun her kesimine hitap eden hatta dijital çözümler üreten yenilikçi bir çözüm ortağıdır.

            </p>
            <div class="mt-10 max-w-xl text-base leading-7 text-gray-700 lg:max-w-none">
              <p>
                2022 yılından itibaren, binlerce insanı Berlin'de ve Almanya'nın bazı diğer şehirlerinde gerçekleşen etkinliklerden haberdar etmekte olan Berlindeyiz, kısa zamanda çok yol katetmiş ve kendisini ispatlamıştır.
              </p>
              <p>
                Yenilikçi ve ileri seviye yazılım teknolojileri tercihleri ile daima güncel kalmaya özen göstermekte olan sistemimiz, paralelde farklı problemlerin çözümü için de uygun zemin ve altyapı çalışmaları sürdürmektedir.
              </p>
              <p>
                Misyon ve vizyonunun temelini toplumsal fayda, üretkenlik ve sürdürülebilirlik gibi kavram üzerine inşa eden Berlindeyiz, kısa vadeli hedeflerini gerçekleştirmiş, orta ve uzun vadeli hedefleri için çalışmalarını sürdürerek faydacılığı, üretkenliği taşıyabileceği en ileri seviyeye taşımaya kararlıdır.
              </p>
              <ul role="list" class="mt-8 space-y-8 text-gray-600">
                <li class="flex gap-x-3">
                  <svg class="mt-1 h-5 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z" clip-rule="evenodd" />
                  </svg>
                  <span><strong class="font-semibold text-gray-900">Etkinlikler</strong> Berlin'de ve Almanya'nın diğer şehirlerinde gerçekleşen sosyal ve kültürel faaliyetlerin bulunduğu benzersiz Türkçe platform.</span>
                </li>
                <li class="flex gap-x-3">
                  <svg class="mt-1 h-5 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clip-rule="evenodd" />
                  </svg>
                  <span><strong class="font-semibold text-gray-900">Dijital Çözümler</strong> Berlin'de ki bir çok kurum ve kuruluşun dijital dönüşümünün desteklenmesi</span>
                </li>
              </ul>
              <h2 class="mt-16 text-2xl font-bold tracking-tight text-gray-900">Vizyon ve Misyon</h2>
              <p class="mt-6">
                Kısa ve orta vadeli olarak toplumsal faydayı artırmak, kültürel ve soyal hayatı kapsayan meselelere dijital çözümler üretmek vizyonuna sahip olan BERLİNDEYİZ, Almanya'da yaşayan tüm toplumların ihtiyaç duyduğu dijital çevreyi oluşturma misyonuna hizmet etmektedir.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  <ContactInfo></ContactInfo>

    <ServiceSlider
        v-if="lastAddedServices"
        :services="lastAddedServices.data"
        :title="'Son Eklenenler'"
    />

  </div>
</template>

<script setup>
import {ref} from "vue";
import ServiceSlider from "../components/services/ServiceSlider";
import ContactInfo from "../components/common/ContactInfo";

const lastAddedServices = ref([]);

lastAddedServices.value = await $fetch("/api/last-added");
</script>
<style scoped>
</style>