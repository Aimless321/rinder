<template>
  <div class="flex flex-col overflow-scroll px-2 gap-2">
    <h2 class="text-2xl font-medium mb-2.5">All your favs</h2>
    <DateDivider :date="subDays(new Date(), 3)"/>
    <RecipeCardBig />
  </div>
</template>
<script setup lang="ts">

import RecipeCardBig from "~/components/RecipeCardBig.vue";
import {subDays} from "date-fns";
</script>