<template>
  <div ref="wrapper"
       class="mx-2 overflow-hidden flex flex-col justify-center rounded-2xl shadow-lg max-h-full">
    <img
        ref="image"
        class="rounded-t-2xl inline-block w-full h-full object-cover"
        :src="`https://spoonacular.com/recipeImages/${recipe.id}-636x393.${recipe.imageType}`"
    >
    <div
        class="bg-white border-t-[1px] border-gray-100 py-2 max-h-64 overflow-y-scroll"
    >
      <h1 class="text-xl font-medium px-2">{{ recipe.title }}</h1>
      <div class="text-gray-500 px-3 py-1 touch-pan-x whitespace-nowrap flex gap-1.5 overflow-auto">
        <div v-if="recipe.cuisines.length > 0" class="pill">{{ recipe.cuisines[0] }}</div>
        <div class="pill" v-for="s in recipe.dishTypes">{{ s }}</div>
      </div>
      <RecipeIngredients :recipe="recipe" />
    </div>
  </div>
</template>

<script setup lang="ts">
import {useDrag} from "@vueuse/gesture";
import {useMotionProperties, useSpring} from "@vueuse/motion";
import type {Recipe} from "~/types/recipe";

const props = defineProps<{ recipe: Recipe, active: Boolean }>();
const active = toRef(props, 'active');

const emit = defineEmits<{
  like: []
  dislike: []
}>();

const wrapper = ref();
const image = ref();

const {motionProperties} = useMotionProperties(wrapper, {
  cursor: 'grab',
  x: 0,
  y: 0,
  rotate: 0,
});
const {set} = useSpring(motionProperties);

const dragHandler = ({movement: [x, y], vxvy: [velX, velY], dragging}) => {
  const xMulti = x * 0.06;

  if (!dragging) {
    const moveOutWidth = document.body.clientWidth;
    const keep = Math.abs(x) < 80 || Math.abs(velX) < 0.5;

    if (keep) {
      set({x: 0, y: 0, rotate: 0, cursor: 'grab'});
      return;
    }

    const endX = Math.max(Math.abs(velX) * moveOutWidth, moveOutWidth);
    const toX = x > 0 ? endX : -endX;
    const endY = Math.abs(velY) * moveOutWidth;
    const toY = y > 0 ? endY : -endY;
    const rotate = xMulti * 0.8;

    console.log('Swiped a card')
    console.log(xMulti)

    set({x: toX, y: toY, rotate: rotate, cursor: 'grab'});
    setTimeout(() => {
      if (xMulti > 0) {
        emit("like");
      } else {
        emit("dislike");
      }
    }, 150);

    return;
  }

  const rotate = xMulti * 0.4;

  set({
    cursor: 'grabbing',
    x,
    y,
    rotate
  })
}

useDrag(dragHandler, {
  domTarget: wrapper,
  axis: "x"
})
</script>

<style scoped>
.pill {
  @apply rounded-full border-[1px] border-gray-300 px-2 py-1.5 whitespace-nowrap inline-block;
}
</style>