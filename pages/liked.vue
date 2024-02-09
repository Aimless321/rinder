<template>
  <div class="flex flex-col overflow-scroll px-2 gap-2 mb-20">
    <div>
      <div class="relative mb-5">
        <input v-model="query"
               class="block w-full rounded-full border-0 py-3 pl-3 pr-10 text-gray-900 bg-white shadow-lg mt-1 ring-1 ring-gray-100 placeholder:text-gray-500"
               placeholder="Search liked recipes...">
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          <MagnifyingGlassIcon class="h-6 w-6 text-gray-900"/>
        </div>
      </div>
      <h2 class="text-3xl font-medium mb-2.5">All your favs</h2>
    </div>

    <RecipeCardBigSkeleton v-if="pending"/>
    <template v-else v-for="[date, recipes] of filteredRecipes">
      <DateDivider :date="date"/>
      <div class="flex flex-col pt-2 pb-7 gap-4">
        <RecipeCardBig v-for="recipe in recipes"
                       :likedRecipe="recipe"
                       @click="showRecipeDetails(recipe.recipe)"
        />
      </div>
    </template>
  </div>
  <RecipeDetailsPane v-if="selectedRecipe" :recipe="selectedRecipe" />
</template>
<script setup lang="ts">
import {format} from "date-fns";
import {useAuthToken} from "#imports";
import type {LikedRecipe, Recipe} from "~/types/recipe";
import {MagnifyingGlassIcon} from "@heroicons/vue/24/solid";

const query = ref("");
const selectedRecipe = ref<Recipe>(null);

const config = useRuntimeConfig();

const filteredRecipes: Map<string, LikedRecipe[]> = computed(() => {
  if (!likedRecipes.value) {
    return [];
  }

  if (query.value === "") {
    return likedRecipes.value;
  }

  return [...likedRecipes.value].reduce((result, [date, recipes]) => {
    const matchedRecipes = recipes.filter((likedRecipe: LikedRecipe) => {
      return likedRecipe.recipe.title.toLowerCase().indexOf(query.value.toLowerCase()) !== -1;
    });

    if (matchedRecipes.length > 0) {
      result.push([date, matchedRecipes])
    }

    return result;
  }, []);
})

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

function showRecipeDetails(recipe: Recipe) {
  selectedRecipe.value = recipe;
}

onMounted(() => {
  document.body.classList.add('offwhite');
});

onUnmounted(() => {
  document.body.classList.remove('offwhite');
});
</script>