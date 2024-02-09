<template>

</template>

<script setup lang="ts">
import {definePageMeta} from "#imports";

const route = useRoute();

definePageMeta({
  layout: "back-button"
});

console.log(route.params.id)
</script>

<style scoped>

</style>