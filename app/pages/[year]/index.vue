<script setup lang="ts">
const route = useRoute();
const year = route.params.year;
const { data: posts } = await useAsyncData(`content-${year}`, () =>
  queryCollection("content").where("path", "LIKE", `/${year}/%`).all()
);
</script>

<template>
  <div>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <NuxtLink :to="post.path">{{ post.title }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>
