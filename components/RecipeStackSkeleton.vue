<template>
  <div ref="wrapper"
       class="mx-2 overflow-hidden flex flex-col justify-center ring-1 ring-gray-100 rounded-2xl shadow-lg">
    <div class="inline-block animate-pulse w-full h-72 bg-slate-300"></div>
    <div
        class="bg-white p-6"
    >
      <div class="space-y-7">
        <div class="h-2 bg-slate-200 skeleton rounded"></div>
        <div class="grid grid-cols-3 gap-4">
          <div class="h-2 bg-slate-200 skeleton rounded col-span-2"></div>
          <div class="h-2 bg-slate-200 skeleton rounded col-span-1"></div>
          <div class="h-2 bg-slate-200 skeleton rounded col-span-3"></div>
          <div class="h-2 bg-slate-200 skeleton rounded col-span-1"></div>
          <div class="h-2 bg-slate-200 skeleton rounded col-span-2"></div>
          <div class="h-2 bg-slate-200 skeleton rounded col-span-3"></div>
          <div class="h-2 bg-slate-200 skeleton rounded col-span-2"></div>
          <div class="h-2 bg-slate-200 skeleton rounded col-span-1"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.skeleton {
  animation: skeleton 1.8s ease-in-out infinite;
  will-change: background-position;
  background-image: linear-gradient(105deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 40%, oklch(1 0 0) 50%, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0) 100%);
  background-size: 200% auto;
  background-repeat: no-repeat;
  background-position-x: -50%;
}

@keyframes skeleton {
  from {background-position-x: 150%}
  to {background-position-x: -50%}
}
</style>