<script setup lang="ts">
// import DropDown from "./DropDown.vue";
</script>

<template>
  <nav
    class="w-screen flex items-center justify-between px-4 py-6 text-xl font-bold font-sans"
  >
    <h2><NuxtLink to="/">Note Mark</NuxtLink></h2>
    <DropDown>
      <template #title><span>Năm học</span></template>
      <ul>
        <!-- <NuxtLink :to="{ name: 'yid', params: { id: n + 1 } }" -->
        <li v-for="n in 1" :key="n">
          <NuxtLink :to="`y${n + 1}`">Năm {{ n + 1 }}</NuxtLink>
        </li>
      </ul>
    </DropDown>
  </nav>
</template>
