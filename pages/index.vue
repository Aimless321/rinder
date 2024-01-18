<template>
  <div class="flex flex-col h-screen overflow-hidden justify-between">
    <div class="grid place-content-center my-3">
      <RinderLogo/>
    </div>
    <RecipeSwipeCard class="flex-1 max-h-[65%]" />
    <RinderButtonBar class="my-4" />
    <NavTabs class="mb-5"/>
  </div>
</template>

<script setup lang="ts">
import {definePageMeta} from "#imports";

definePageMeta({
  layout: "home"
});
</script>