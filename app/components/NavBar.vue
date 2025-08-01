<script setup lang="ts">
// import DropDown from "./DropDown.vue";
</script>

<template>
  <nav
    class="w-screen flex items-center justify-between px-4 py-6 text-xl shadow-sm shadow-slate-300 drop-shadow-sm sticky top-0"
  >
    <h2 class="font-[Montserrat] text-2xl ml-4 font-bold">
      <NuxtLink to="/">Note Mark</NuxtLink>
    </h2>
    <DropDown>
      <template #title><span>Năm học</span></template>
      <ul>
        <!-- <NuxtLink :to="{ name: 'yid', params: { id: n + 1 } }" -->
        <li
          v-for="n in 1"
          :key="n"
          class="py-4 px-6 bg-white rounded mt-2 text-base font-normal"
        >
          <NuxtLink :to="`y${n + 1}`">Năm {{ n + 1 }}</NuxtLink>
        </li>
      </ul>
    </DropDown>
  </nav>
</template>
