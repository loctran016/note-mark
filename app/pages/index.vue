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
  <ul class="grid grid-cols-4 space-x-2 items-center align-center">
    <li
      v-for="([path, content],index) in Object.entries(subjects?.data ?? []) "
      class="card py-6 px-4 bg-primary max-content"
      :key="index"
    >
      <NuxtLink :to="`/y${currentSchoolYear}/${path}`"
        ><div class="card">
          <h2 class="card-title">{{ content?.name }}</h2>
        </div>
      </NuxtLink>
    </li>
  </ul>
</template>
