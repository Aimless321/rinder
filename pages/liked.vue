<template>
  <div class="flex flex-col overflow-scroll px-2 gap-2 mb-20">
    <h2 class="text-3xl font-medium mb-2.5">All your favs</h2>
    <RecipeCardBigSkeleton v-if="pending" />
    <template v-else v-for="[date, recipes] of likedRecipes">
      <DateDivider :date="date"/>
      <div class="flex flex-col pt-2 pb-7 gap-4">
        <RecipeCardBig v-for="recipe in recipes" :likedRecipe="recipe"/>
      </div>
    </template>
  </div>
</template>
<script setup lang="ts">
import {format} from "date-fns";
import {useAuthToken} from "#imports";
import type {LikedRecipe} from "~/types/recipe";

const config = useRuntimeConfig();

const {data: likedRecipes, pending, error} = await useFetch<LikedRecipe[]>('/recipes/liked', {
  baseURL: config.public.apiBaseUrl,
  headers: {
    'Authorization': `Bearer ${useAuthToken().value}`
  },
  lazy: true,
  deep: false,
  transform: (recipes) => {
    if (recipes === null) {
      return;
    }

    // Sort lexicographically (iso dates)
    recipes.sort((a, b) => -a.date.localeCompare(b.date));

    const sortedRecipes = new Map<string, LikedRecipe[]>();

    recipes.forEach(r => {
      const day = format(r.date, 'yyyy/MM/dd');

      if (sortedRecipes.has(day)) {
        const values: LikedRecipe[] | undefined = sortedRecipes.get(day);
        if (!values) {
          return;
        }

        values.push(r);
        sortedRecipes.set(day, values);
      } else {
        sortedRecipes.set(day, [r]);
      }
    });

    return sortedRecipes;
  }
});
</script>