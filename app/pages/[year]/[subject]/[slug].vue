<script setup>
import NotFound from "~/components/NotFound.vue";

definePageMeta({
  layout: "blog",
});

const route = useRoute();

const slug = route.params.slug;
const subject = route.params.subject;
const year = route.params.year;
// const relativeSlug = slug.split("/").slice(-3);
const { data: post } = await useAsyncData(`content-${slug}`, () => {
  return queryCollection("content").path(`/${year}/${subject}/${slug}`).first();
});

useSeoMeta({
  title: post.value?.title,
  description: post.value?.description,
});
</script>

<template>
  <h1 class="font-[Montserrat]">{{ post.title }}</h1>
  <p class="italic text-gray">{{ post.date }}</p>
  <!-- Render the content post as Prose & Vue components -->
  <ContentRenderer v-if="post" :value="post" />
  <NotFound v-else></NotFound>
</template>
