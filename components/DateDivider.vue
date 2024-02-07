<template>
  <div class="relative">
    <div class="absolute inset-0 flex items-center" aria-hidden="true">
      <div class="w-full border-t border-gray-300"/>
    </div>
    <div class="relative flex justify-start">
      <span class="bg-white pr-3 text-2xl font-medium leading-6 text-gray-900">
        Liked {{ timeAgoString }}
      </span>
    </div>
  </div>
</template>

<script setup>
import {differenceInDays, formatDistanceToNowStrict, isToday, isYesterday} from "date-fns";
import {computed} from "vue";

const props = defineProps(['date']);

const timeAgoString = computed(() => {
  if (isToday(props.date)) {
    return "Today";
  }

  if (isYesterday(props.date)) {
    return "Yesterday";
  }

  const daysAgo = differenceInDays(props.date, new Date());
  if (daysAgo > 10) {
    return formatDistanceToNowStrict(props.date);
  }

  return `${Math.abs(daysAgo)} days ago`;
});

</script>