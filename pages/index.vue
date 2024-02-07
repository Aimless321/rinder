<template>
  <div class="flex flex-col h-screen overflow-hidden justify-between">
    <div class="grid place-content-center my-3">
      <RinderLogo/>
    </div>
    <RecipeStackSkeleton v-if="recipes.length === 0 && !error" class="flex-1 max-h-[65%]"/>
    <div v-else-if="error" class="grid place-content-center flex-1 max-h-[65%]">
      <h2 class="text-red-500">Unable to fetch recipes</h2>
    </div>
    <RecipeStack
        v-else
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
import RecipeStackSkeleton from "~/components/RecipeStackSkeleton.vue";

definePageMeta({
  layout: "home"
});

const recipes = useRecipeFeedBuffer();
const error = ref(false);
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
    baseURL: config.public.apiBaseUrl,
    headers: {
      "Authorization": `Bearer ${useAuthToken().value}`,
    },
    timeout: 5000,
  }).then(async res => {
    error.value = false;
    recipes.value.push(...res.results);
  }).catch(err => {
    error.value = true;
    console.error(err);
  });
}

function rateRecipe(recipe: Recipe, rating: "like" | "dislike") {
  $fetch(`/recipes/${recipe.id}/rate`, {
    baseURL: config.public.apiBaseUrl,
    method: "POST",
    headers: {
      "Authorization": `Bearer ${useAuthToken().value}`,
    },
    body: {rating}
  }).then(async res => {
    recipes.value = recipes.value.filter(r => r.id !== recipe.id);
  }).catch(err => console.error(err));

}
</script>