<script setup lang="ts">
const route = useRoute();
const year = route.params.year;
const subject = route.params.subject;
const { data: posts } = await useAsyncData(`content-${year}`, () =>
  queryCollection("content")
    .where("path", "LIKE", `/${year}/${subject}%`)
    .where("draft", "=", false)
    .all()
);

const { data: subjects } = await useAsyncData(
  `home`,
  () => queryCollection("json").where("stem", "=", `${year}/index`).first()
  //   queryCollection("json").where("path", "LIKE", "/y2/%").first()
);

useSeoMeta({
  title: `LocTor Log | ${String(year).toUpperCase()}`,
});
</script>

<template>
    <h2 class="text-2xl  dark:text-gray-200 cursor-pointer font-bold mb-6 ml-4 lg:ml-10 xl:ml-20 mt-10"><NuxtLink :to="`/${year}`">{{ String(year).toUpperCase() }}</NuxtLink> / <span class="text-slate-900 dark:text-white">{{ subjects?.data[`${subject}`]?.name }}</span></h2>
  <div class="mx-auto w-4/5 mt-4 main">
    <ul class="grid auto-cols-max grid-flow-col space-x-2">
      <li v-for="post in posts" :key="post.id">
        <PostCard>
          <NuxtLink :to="post.path">
            <div class="px-4">
              <h3 class="font-[Montserrat] font-bold lg:text-lg mt-1 lg:mt-2">
                {{ post.title }}
              </h3>
              <p class="italic mb-2">{{ post.date }}</p>
              <!-- <p>{{ year }}/{{ subject }}</p> -->
            </div>
          </NuxtLink>
        </PostCard>
      </li>
    </ul>
  </div>
</template>
