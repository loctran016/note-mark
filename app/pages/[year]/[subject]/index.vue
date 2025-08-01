<script setup lang="ts">
const route = useRoute();
const year = route.params.year;
const subject = route.params.subject;
const { data: posts } = await useAsyncData(`content-${year}`, () =>
  queryCollection("content").where("path", "LIKE", `/${year}/${subject}%`).all()
);
</script>

<template>
  <div class="mx-auto w-4/5 mt-10">
    <ul class="grid grid-cols-6 space-x-2">
      <li v-for="post in posts" :key="post.id">
        <PostCard>
          <NuxtLink :to="post.path"
            ><h2 class="font-[Montserrat] font-bold text-xl">
              {{ post.title }}
            </h2>
            <p>{{ post.date }}</p>
          </NuxtLink>
        </PostCard>
      </li>
    </ul>
  </div>
</template>
