<template>
  <div>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import {useAuthToken, useRecipeFeedBuffer} from "~/composables/state";
import type {RegisterResponse} from "~/types/auth";
import {ofetch} from "ofetch";

const config = useRuntimeConfig();

onBeforeMount(() => {
  const apiToken = localStorage.getItem("apiToken");
  const recipeFeedBuffer = localStorage.getItem("recipeFeedBuffer")

  if (apiToken) {
    useAuthToken().value = apiToken;
  } else {
    registerNewDevice();
  }

  if (recipeFeedBuffer) {
    useRecipeFeedBuffer().value = JSON.parse(recipeFeedBuffer);
  }
});

function registerNewDevice() {
  const deviceUuid = crypto.randomUUID();

  ofetch<RegisterResponse>('/users/register', {
    method: "POST",
    body: {
      platform: 'web',
      uuid: deviceUuid
    },
    timeout: 1000,
    baseURL: config.public.apiBaseUrl
  }).then(res => {
    useAuthToken().value = res.token;
    localStorage.setItem("apiToken", res.token)
  }).catch(err => {
    console.error(err);
  });
}
</script>

<style>
html, body {
  @apply bg-white;
}

html.offwhite, body.offwhite {
  @apply bg-gray-100;
}
</style>
