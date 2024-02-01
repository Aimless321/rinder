<template>
  <div class="relative perspective">
    <div v-for="(recipe, index) in recipes"
         :key="recipe.id"
         class="animate absolute inset-0 w-screen"
         :style="{
             transform: `translateY(${30 - index*10}px) translateZ(-${index*1.4}px)`,
             'z-index': `${100 - index}`
         }"
         :class="{hidden: index > 4}"
    >
      <RecipeSwipeCard
          @like="$emit('like', recipe)"
          @dislike="$emit('dislike', recipe)"
          :recipe="recipe" :active="index === 0"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type {Recipe} from "~/types/recipe";

const props = defineProps<{recipes: Recipe[]}>();
</script>

<style scoped>
.animate {
  @apply will-change-transform transition-transform transform delay-75
}

.perspective {
  perspective: 100px;
}
</style>