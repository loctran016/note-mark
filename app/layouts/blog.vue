<script setup lang="ts">
import defaultLayout from "./default.vue";
</script>

<template>
  <defaultLayout>
    <main class="mx-auto mt-10">
      <slot></slot>
    </main>
  </defaultLayout>
</template>
