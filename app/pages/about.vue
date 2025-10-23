<script setup lang="ts">
const route = useRoute();
const { data: page } = await useAsyncData(route.path, () =>
  queryCollection("content").path(route.path).first()
);

useSeoMeta({
  title: page.value?.title,
  description: page.value?.description,
});
</script>
<template>
  <UPageBody>
    <ContentRenderer v-if="page" :value="page" class="mx-auto" />
    <div v-else>About Page Not Found</div>
  </UPageBody>
</template>
