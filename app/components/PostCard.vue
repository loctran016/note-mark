<template>
  <div
    class="rounded bg-gray-100 dark:bg-neutral-900 dark:hover:bg-neutral-800 hover:bg-slate-200 transition-all duration-200 cursor-pointer"
  >
    <slot name="title"></slot>
    <div
      class="py-2 px-4 border-emerald-400 border-opacity-75 border-1 border-t-transparent"
    >
      <slot></slot>
    </div>
  </div>
</template>
