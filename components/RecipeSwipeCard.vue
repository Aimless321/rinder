<template>
  <div ref="wrapper"
       class="mx-2 overflow-hidden relative flex justify-center shadow-xl rounded-2xl">
    <img
        ref="image"
        class="rounded-2xl inline-block w-full h-full object-cover"
         src="https://plus.unsplash.com/premium_photo-1677637522995-f5e0cd64a0de?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBsYXRlfGVufDB8fDB8fHww"
    >
    <div ref="recipePane" class="hidden">
      <div>
        <h1 class="text-xl font-medium">Recipe Name</h1>
        <p class="text-gray-500">Short descriptiopn or sum like this is a dish. with great flavbour. fish and bla h
          blah.</p>
      </div>
      <div hide-on-bottom>
        <p class="text-gray-500">Short descriptiopn or sum like this is a dish. with great flavbour. fish and bla h
          blah.</p>
        <p class="text-gray-500">Short descriptiopn or sum like this is a dish. with great flavbour. fish and bla h
          blah.</p>
        <p class="text-gray-500">Short descriptiopn or sum like this is a dish. with great flavbour. fish and bla h
          blah.</p>
        <p class="text-gray-500">Short descriptiopn or sum like this is a dish. with great flavbour. fish and bla h
          blah.</p>
        <p class="text-gray-500">Short descriptiopn or sum like this is a dish. with great flavbour. fish and bla h
          blah.</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {CupertinoPane} from "cupertino-pane";
import {useDrag} from "@vueuse/gesture";
import {useMotionProperties, useSpring} from "@vueuse/motion";

const wrapper = ref();
const image = ref();
const recipePane = ref();

onMounted(() => {
  const drawer = new CupertinoPane(recipePane.value, {
    bottomOffset: window.innerHeight - wrapper.value.clientHeight,
    buttonDestroy: false,
    initialBreak: "bottom",
    breaks: {
      top: {
        enabled: true,
        height: wrapper.value.clientHeight - 5,
        bounce: false,
      },
      middle: {
        enabled: false,
      },
      bottom: {
        enabled: true,
        height: 125,
        bounce: true
      }
    }
  });
  drawer.present({animate: false});
});

const { motionProperties } = useMotionProperties(wrapper, {
  cursor: 'grab',
  x: 0,
  y: 0,
  rotate: 0,
});
const { set } = useSpring(motionProperties);

const dragHandler = ({ movement: [x, y], vxvy: [velX, velY], dragging }) => {
  const xMulti = x * 0.06;
  const yMulti = y / 80;

  if (!dragging) {
    const moveOutWidth = document.body.clientWidth;
    const keep = Math.abs(x) < 80 || Math.abs(velX) < 0.5;
    console.log(Math.abs(x));

    if (keep) {
      set({ x: 0, y: 0, rotate: 0, cursor: 'grab' });
      return;
    }

    const endX = Math.max(Math.abs(velX) * moveOutWidth, moveOutWidth);
    const toX = x > 0 ? endX : -endX;
    const endY = Math.abs(velY) * moveOutWidth;
    const toY = y > 0 ? endY : -endY;
    const rotate = xMulti * yMulti;

    set({ x: toX, y: toY, rotate: rotate, cursor: 'grab' });
    return;
  }

  const rotate = xMulti * yMulti;

  set({
    cursor: 'grabbing',
    x,
    y,
    rotate
  })
}

useDrag(dragHandler, {
  domTarget: image,
})
</script>

<style>
.cupertino-pane-wrapper {
  @apply pointer-events-none;
}

.cupertino-pane-wrapper .pane {
  @apply relative w-11/12 bg-white rounded-t-2xl px-6 py-4 pointer-events-auto;
}
</style>