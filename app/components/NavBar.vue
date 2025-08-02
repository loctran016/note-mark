<script setup lang="ts">
// import DropDown from "./DropDown.vue";
// const colorMode = useColorMode()
</script>

<template>
  <nav
    class="w-screen flex items-center px-4 py-6 text-xl shadow-sm shadow-slate-300 drop-shadow-sm sticky top-0"
  >
    <h2 class="font-[Montserrat] text-2xl ml-4 font-bold flex-grow <md:hidden ">
      <NuxtLink to="/">LocTor Log</NuxtLink> </h2>
    <DropDown>
      <template #title><span class="">Năm học</span></template>
      <ul>
        <!-- <NuxtLink :to="{ name: 'yid', params: { id: n + 1 } }" -->
        <li
          v-for="n in 1"
          :key="n"
          class="py-4 px-6 bg-white rounded mt-2 text-base font-normal"
        >
          <NuxtLink :to="`/y${n + 1}`">Năm {{ n + 1 }}</NuxtLink>
        </li>
      </ul>
    </DropDown>
    <button @click="$colorMode.preference = $colorMode.preference ==='light' ? 'dark':'light'" class="flex justify-center items-center text-gray-700 duration-200 transition-all rounded-lg hover:bg-slate-100 group w-12 h-12 text-4xl ">
    <!-- <Icon class="group-hover:rotate-12" v-if="$colorMode.value === 'system'" name="tabler:color-swatch"/> -->
    <Icon class="group-hover:rotate-12" v-if="$colorMode.value === 'light'" name="material-symbols-light:sunny-rounded"/>
    <Icon class="group-hover:rotate-12" v-else-if="$colorMode.value === 'dark'" name="material-symbols-light:dark-mode-rounded"/>
    </button>
  </nav>
</template>
