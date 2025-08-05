<script setup lang="ts">
const currentSchoolYear = 2;
const colorsStyle = {
    lime: 'text-lime-800 bg-lime-300 dark:text-lime-200 dark:bg-lime-800',
    red: 'text-red-800 bg-red-300 dark:text-red-200 dark:bg-red-800',
    rose: 'text-rose-800 bg-rose-300 dark:text-rose-200 dark:bg-rose-800',
    teal: 'text-teal-800 bg-teal-300 dark:text-teal-200 dark:bg-teal-800',
    orange: 'text-orange-800 bg-orange-300 dark:text-orange-200 dark:bg-orange-800',
    blue: 'text-blue-800 bg-blue-200 dark:text-blue-200 dark:bg-blue-800',
}

definePageMeta({ layout: "home" });

const { data: subjects } = await useAsyncData(
  `home`,
  () => queryCollection("json").where("stem", "=", `y${currentSchoolYear}/index`).first()
  //   queryCollection("json").where("path", "LIKE", "/y2/%").first()
);
</script>

<template>
    <main class="grid grid-flow-col lg:grid-cols-2 w-full h-full max-lg:place-content-center">
        <ul class="grid w-4/5 mx-auto grid-cols-3 auto-rows-[minmax(0,1fr)] gap-2 items-center lg:my-auto">
          <li
            v-for="([path, content],index) in Object.entries(subjects?.data ?? []) "
            class="h-30  rounded-lg"
            :class="colorsStyle[content.color as keyof typeof colorsStyle] ?? ''"
            :key="index"
          >
            <NuxtLink :to="`/y${currentSchoolYear}/${path}`"
              >
                <h2 class="font-bold py-4 px-2 overflow-clip">{{ content?.name }}</h2>
            </NuxtLink>
          </li>
        </ul>
        <div class="bg-white dark:bg-black w-full h-full flex justify-center items-center max-lg:absolute  max-lg:top-1/2  max-lg:right-1/2 max-lg:-translate-x-1/2  max-lg:-translate-y-1/2 max-lg:-z-10">
                 <!-- <NuxtImg src="/logo.svg" sizes="80vw lg:100px" width="500" /> -->
                  <div class="bg-white dark:bg-slate-900 rounded-lg aspect-square w-4/5 lg:w-80 shadow-md shadow-slate-800 dark:shadow-slate-700"></div>
        </div>
    </main>
</template>
