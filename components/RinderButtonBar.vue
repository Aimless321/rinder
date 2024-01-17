<template>
  <div>
    <div class="flex justify-evenly">
      <button class="rounded-full p-4 bg-red-100 grid place-content-center shadow-xl">
        <XMarkIcon class="h-8 w-8 text-red-500" />
      </button>
      <button class="rounded-full p-4 bg-green-100 grid place-content-center shadow-xl">
        <HeartIcon class="h-8 w-8 text-green-500" />
      </button>
    </div>
  </div>
</template>

<script setup>
import {XMarkIcon, HeartIcon} from "@heroicons/vue/24/solid";
</script>