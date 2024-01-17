<template>
  <div class="w-screen relative mx-4 flex justify-center shadow-xl rounded-2xl">
    <img class="rounded-2xl"
         src="https://plus.unsplash.com/premium_photo-1677637522995-f5e0cd64a0de?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBsYXRlfGVufDB8fDB8fHww">
    <div class="absolute bottom-0 w-11/12 bg-white rounded-t-2xl px-6 pt-2 pb-4">
      <div class="flex justify-center pb-2">
        <ChevronUpIcon class="h-6 w-6 text-gray-600" />
      </div>
      <h1 class="text-xl font-medium">Recipe Name</h1>
      <p class="text-gray-500">Short descriptiopn or sum like this is a dish. with great flavbour. fish and bla h blah.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ChevronUpIcon } from "@heroicons/vue/24/outline";
</script>