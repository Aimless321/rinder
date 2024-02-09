<template>
  <div>
    <h2 class="px-2 text-gray-800 font-semibold">Ingredients</h2>
    <ol class="list-disc px-2 pl-6">
      <li
          v-for="ingredient in recipe.extendedIngredients"
          class="text-gray-600"
      >
        <div class="flex w-full justify-between">
            <span>
              {{ ingredient.name }}
            </span>
          <span>
              {{ ingredient.measures.metric.amount }}
              {{ getUnit(ingredient.measures.metric) }}
            </span>
        </div>
      </li>
    </ol>
  </div>
</template>
<script setup lang="ts">
import type {IngredientMeasure, Recipe} from "~/types/recipe";

const props = defineProps<{ recipe: Recipe }>();

function getUnit(measure: IngredientMeasure) {
  if (measure.unitShort === "g" || measure.unitShort === "ml") {
    return measure.unitShort;
  }

  if (measure.amount > 1) {
    return measure.unitLong;
  }

  return measure.unitShort;
}
</script>