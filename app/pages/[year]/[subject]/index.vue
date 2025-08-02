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
  <div class="mx-auto w-4/5 mt-10">
    <h2 class="text-2xl text-slate-700 cursor-pointer font-bold mb-10"><NuxtLink :to="`/${year}`">{{ String(year).toUpperCase() }}</NuxtLink> / <span class="text-slate-900">{{ subjects?.data[`${subject}`]?.name }}</span></h2>
    <ul class="grid grid-cols-4 space-x-2">
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
