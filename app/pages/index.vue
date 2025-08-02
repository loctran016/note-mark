<script setup lang="ts">
const currentSchoolYear = 2;

definePageMeta({ layout: "home" });

const { data: subjects } = await useAsyncData(
  `home`,
  () => queryCollection("json").where("stem", "=", `y${currentSchoolYear}/index`).first()
  //   queryCollection("json").where("path", "LIKE", "/y2/%").first()
);
console.log("Subjects values");
</script>

<template>
    <main class="grid grid-flow-col grid-cols-2">
        <ul class="grid grid-flow-col auto-cols-max space-x-2 items-center align-center mx-auto lg:mt-20">
          <li
            v-for="([path, content],index) in Object.entries(subjects?.data ?? []) "
            class="card py-6 px-4 bg-primary max-content"
            :key="index"
          >
            <NuxtLink :to="`/y${currentSchoolYear}/${path}`"
              ><PostCard>
                <h2 class="font-bold lg:text-xl py-4 px-2">{{ content?.name }}</h2>
              </PostCard>
            </NuxtLink>
          </li>
        </ul>
    </main>
</template>
