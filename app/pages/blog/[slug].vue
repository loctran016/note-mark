<script setup>
import NotFound from "~/components/NotFound.vue";

definePageMeta({
  layout: "blog",
});

const slug = useRoute().params.slug;
// const relativeSlug = slug.split("/").slice(-3);
const { data: post } = await useAsyncData(`blog-${slug}`, () => {
  return queryCollection("blog").path(`/blog/${slug}`).first();
});

useSeoMeta({
  title: post.value?.title,
  description: post.value?.description,
});
</script>

<template>
  <!-- Render the blog post as Prose & Vue components -->
  <ContentRenderer v-if="post" :value="post" />
  <NotFound v-else></NotFound>
</template>
