<script setup lang="ts">
const isHovered = ref(false);
</script>

<template>
  <div
    @mouseover="isHovered = true"
    @mouseleave="isHovered = false"
    class="cursor-pointer grid shrink items-center"
  >
    <slot name="title"></slot>
    <div
      class="opacity-0 translate-y-1/3 transform-gpu transition-all cursor-pointer duration-200 h-0"
      :class="isHovered ? 'opacity-100 translate-y-0 h-100' : ''"
    >
      <slot></slot>
    </div>
  </div>
</template>
