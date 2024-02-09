<template>
  <div>
    <h2 class="px-2 text-gray-800 font-semibold">Instructions</h2>
    <div
        class="space-y-3"
        v-for="instruction in recipe.analyzedInstructions"
    >
      <h3 class="px-2 text-gray-800 font-semibold">{{ instruction.name }}</h3>
      <ol class="px-2 space-y-2"
          v-for="step in instruction.steps"
      >
        <li
            class="text-gray-800"
        >
          {{step.number}}. {{ step.step }}
        </li>
      </ol>
    </div>
  </div>
</template>
<script setup lang="ts">
import type {Recipe} from "~/types/recipe";

const props = defineProps<{ recipe: Recipe }>();
</script>