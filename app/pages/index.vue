<script setup lang="ts">
const currentSchoolYear = 2;

definePageMeta({ layout: "home" });

const { data: subjects } = await useAsyncData(
  `home`,
  () => queryCollection("json").where("stem", "=", `y${currentSchoolYear}/index`).first()
  //   queryCollection("json").where("path", "LIKE", "/y2/%").first()
);
</script>

<template>
    <main class="grid grid-flow-col grid-cols-2 w-full h-full">
        <ul class="grid grid-flow-col auto-cols-max gap-2 items-top align-bottom mx-auto lg:mt-20">
          <li
            v-for="([path, content],index) in Object.entries(subjects?.data ?? []) "
            class="card py-6 px-4 bg-primary max-content"
            :key="index"
          >
            <NuxtLink :to="`/y${currentSchoolYear}/${path}`"
              ><PostCard>
                <h2 class="font-bold lg:text-lg py-4 px-2">{{ content?.name }}</h2>
              </PostCard>
            </NuxtLink>
          </li>
        </ul>
        <div class="bg-white flex items-center justify-center w-4/5 h-4/5 mx-auto self-center -translate-y-10">
                 <NuxtImg src="/logo.svg" sizes="80vw lg:100px" width="500" />

        </div>
    </main>
</template>
