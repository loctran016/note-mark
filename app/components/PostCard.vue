<template>
  <div
    class="rounded pb-2 bg-gray-100 dark:bg-neutral-900 dark:hover:bg-neutral-800 hover:bg-slate-200 transition-all duration-200 cursor-pointer h-full"
  >
    <slot name="title" ></slot>
    <div
      class="py-2 px-4 mt-auto"
    >
      <slot></slot>
    </div>
  </div>
</template>
