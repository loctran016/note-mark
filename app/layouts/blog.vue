<script setup lang="ts">
import defaultLayout from "./default.vue";
</script>

<template>
  <defaultLayout>
    <main class="prose lg:prose-lg mx-auto mt-10 prose-h1:text-4xl">
      <slot></slot>
    </main>
  </defaultLayout>
</template>
