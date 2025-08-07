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
  return queryCollection("content")
    .path(`/${year}/${subject}/${slug}`)
    .where("draft", "=", false)
    .first();
});

useSeoMeta({
  title: post.value?.title,
  description: post.value?.description,
});
</script>

<template>
    <div class="mx-auto text-center">
        <h1 class="font-[Montserrat] max-w-4/5 text-xl lg:text-4xl mx-auto">{{ post.title }}</h1>
        <p class="italic text-gray mt-2">{{ post.date }}</p>
    </div>
  <!-- Render the content post as Prose & Vue components -->
   <article class="prose prose-headings:font-[Montserrat] prose-headings:underline-offset-8 lg:prose-lg dark:prose-invert mx-auto mb-14 dark:text-gray-100 max-md:max-w-[85vw]">

       <ContentRenderer v-if="post" :value="post" />
       <NotFound v-else></NotFound>
   </article>
</template>
