<template>
  <div class="relative">
    <div class="absolute inset-0 flex items-center" aria-hidden="true">
      <div class="w-full border-t border-gray-300" />
    </div>
    <div class="relative flex justify-start">
      <span class="bg-white pr-3 text-base font-semibold leading-6 text-gray-900">
        {{timeAgoString}}
      </span>
    </div>
  </div>
</template>

<script setup>
import { formatDistance } from "date-fns";
import {computed} from "vue";

const props = defineProps(['date']);

const timeAgoString = computed(() => {
  return formatDistance(props.date, new Date(), { addSuffix: true });
});

</script>