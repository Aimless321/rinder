<template>
  <div ref="wrapper">
    <div class="flex flex-col gap-2">
      <h1 class="text-xl font-medium px-2">{{ selectedRecipe.title }}</h1>
      <RecipeIngredients :recipe="selectedRecipe"/>
      <RecipeSteps :recipe="selectedRecipe"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import {CupertinoPane} from "cupertino-pane";
import type {Recipe} from "~/types/recipe";

const props = defineProps<{ recipe: Recipe }>();
const selectedRecipe = toRef(props, 'recipe');

watch(selectedRecipe, () => {
  console.log(selectedRecipe.value);
})

const wrapper = ref();

onMounted(() => {
  console.log(props.recipe)
  console.log(selectedRecipe.value)

  const pane = new CupertinoPane(wrapper.value, {
    backdrop: true,
    backdropOpacity: 0.6,
    breaks: {
      middle: {enabled: false},
      bottom: {enabled: false}
    },
    initialBreak: 'top',
    bottomClose: true,
    events: {
      onBackdropTap: () => pane.destroy({animate: true}),
    }
  });
  pane.present({animate: true})
});
</script>

<style scoped>

</style>