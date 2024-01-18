<template>
  <div class="flex flex-col overflow-scroll px-2">
    <div class="relative mb-5">
      <input type="email" name="email" id="email"
             class="block w-full rounded-full border-0 py-3 pl-3 pr-10 text-gray-900 bg-white shadow-xl ring-1 ring-gray-100 placeholder:text-gray-500 focus:outline-none"
             placeholder="Search recipes...">
      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
        <MagnifyingGlassIcon class="h-6 w-6 text-black"/>
      </div>
    </div>

    <SearchFeed class="mb-32"/>
  </div>
</template>

<script setup>
import {MagnifyingGlassIcon} from "@heroicons/vue/24/solid";
import SearchFeed from "~/components/SearchFeed.vue";

onMounted(() => {
  document.body.classList.add('offwhite');
});

onUnmounted(() => {
  document.body.classList.remove('offwhite');
});
</script>