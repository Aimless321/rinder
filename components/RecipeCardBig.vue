<template>
  <div class="mx-2 aspect-square ring-1 shadow ring-gray-100 overflow-hidden relative flex justify-center rounded-2xl">
    <img
        class="rounded-2xl inline-block w-full h-full object-cover"
        :src="likedRecipe.recipe.image"
    >
    <div class="absolute bottom-0 w-11/12 bg-white rounded-t-2xl px-6 py-4">
      <div>
        <h1 class="text-xl font-medium">{{ likedRecipe.recipe.title }}</h1>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type {LikedRecipe} from "~/types/recipe";

const props = defineProps<{likedRecipe: LikedRecipe}>();
</script>