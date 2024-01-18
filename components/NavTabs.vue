<template>
  <nav class="flex justify-center">
    <div class="bg-white/90 backdrop-blur ring-1 ring-gray-100 gap-3 drop-shadow-2xl rounded-full w-fit flex justify-center items-center p-1">
      <NuxtLink to="/" exact-active-class="selected" class="link">
        <SwatchIcon class="icon"/>
        Explore
      </NuxtLink>
      <NuxtLink to="/search" active-class="selected" class="link">
        <MagnifyingGlassIcon class="icon"/>
        Search
      </NuxtLink>
      <NuxtLink to="/liked" active-class="selected" class="link">
        <HeartIcon class="icon"/>
        Liked
      </NuxtLink>
    </div>
  </nav>
</template>

<script setup lang="ts">
import {SwatchIcon, HeartIcon, MagnifyingGlassIcon} from "@heroicons/vue/24/solid";
</script>

<style scoped>
.link {
  @apply px-5 py-2 flex flex-col items-center text-xs font-medium text-emerald-300/80 relative;
}

.link.selected {
  @apply text-emerald-500;
}

.selected::before {
  content: '';
  @apply absolute inset-1 bg-emerald-500/15 rounded-full blur;
}

.icon {
  @apply h-6 w-6;
}
</style>