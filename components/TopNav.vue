<template>
  <header class="flex justify-center">
    <div class="bg-gray-300/70 rounded-full w-fit flex justify-center items-center p-1">
      <NuxtLink>
        <div class="rounded-full bg-white px-5 py-2">
          <SwatchIcon class="h-8 w-8"/>
        </div>
      </NuxtLink>
      <NuxtLink class="px-5 py-2">
        <HeartIcon class="h-8 w-8"/>
      </NuxtLink>
    </div>
  </header>
</template>

<script setup lang="ts">
import {SwatchIcon, HeartIcon} from "@heroicons/vue/24/solid";
</script>