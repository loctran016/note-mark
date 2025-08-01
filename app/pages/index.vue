<script setup lang="ts">
const currentSchoolYear = 2;

definePageMeta({ layout: "home" });

const { data: subjects } = await useAsyncData(
  `home`,
  () => queryCollection("json").where("year", "=", currentSchoolYear).first()
  //   queryCollection("json").where("path", "LIKE", "/y2/%").first()
);
console.log("Subjects values");
</script>

<template>
  <!-- <div class="absolute top-0 left-0 -z-10 h-screen w-screen">
      <NuxtImg src="/bg.svg" fit="outside" />
    </div> -->
  <ul class="grid grid-cols-4 space-x-2 items-center align-center">
    <!-- <li v-for="subject in Object.entries(subjects)" :key="subject.id"> -->
    <li
      v-for="{ path, name } in subjects?.data"
      class="card py-6 px-4 bg-primary max-content"
      :key="path"
    >
      <NuxtLink :to="`/y${currentSchoolYear}/${path}`"
        ><div class="card">
          <h2 class="card-title">{{ name }}</h2>
        </div>
      </NuxtLink>
    </li>
  </ul>
</template>
