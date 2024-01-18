<template>
  <div class="flex flex-col">
    <div class="grid place-content-center mb-3">
      <RinderLogo/>
    </div>

    <slot/>
  </div>
  <NavTabs class="fixed bottom-5 inset-x-0"/>
</template>
