<template>
  <div class="flex flex-col h-screen overflow-hidden justify-between">
    <div class="grid place-content-center my-3">
      <RinderLogo/>
    </div>
    <RecipeStack
        class="flex-1 max-h-[65%]"
        @like="rateRecipe($event, 'like')"
        @dislike="rateRecipe($event, 'dislike')"
        :recipes="recipes"
    />
    <RinderButtonBar class="my-4"/>
    <NavTabs class="mb-5"/>
  </div>
</template>

<script setup lang="ts">
import {definePageMeta, useAuthToken, useRecipeFeedBuffer} from "#imports";
import type {Recipe} from "~/types/recipe";

definePageMeta({
  layout: "home"
});

const recipes = useRecipeFeedBuffer();
const config = useRuntimeConfig();

onMounted(() => {
  if (recipes.value.length <= 5) {
    fetchMoreRecipes();
  }
});

watch(recipes, () => {
  if (recipes.value.length <= 5) {
    fetchMoreRecipes();
  }
});

function fetchMoreRecipes() {
  console.log('Fetching more recipes');

  $fetch('/recipes/feed', {
    headers: {
      "Authorization": `Bearer ${useAuthToken().value}`,
    },
    baseURL: config.public.apiBaseUrl,
  }).then(async res => {
    recipes.value.push(...res.results);
  }).catch(err => console.error(err));
}

function rateRecipe(recipe: Recipe, rating: "like" | "dislike") {
  recipes.value = recipes.value.filter(r => r.id !== recipe.id);
}
</script>