<template>
  <div class="flex flex-col">
    <div class="grid relative place-content-center my-3">
      <button @click="$router.back()" class="absolute flex items-center inset-y-0 text-emerald-500 left-1">
        <ChevronLeftIcon class="h-6 w-6" />
        <p class="-ml-0.5">Back</p>
      </button>
      <RinderLogo/>
    </div>

    <slot/>
  </div>
  <NavTabs class="fixed bottom-5 inset-x-0"/>
</template>

<script setup>
import { ChevronLeftIcon } from "@heroicons/vue/24/outline";
</script>