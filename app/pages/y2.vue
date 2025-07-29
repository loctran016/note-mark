<script setup lang="ts">
const { data: posts } = await useAsyncData("y2-lists", () =>
  queryCollection("y2").all()
);
console.log(posts.value);
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
