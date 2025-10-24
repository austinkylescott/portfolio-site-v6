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
  <UPage>
    <template #default>
      <UPageBody>
        <ContentRenderer v-if="page" :value="page" />
        <div v-else>About Page Not Found</div>
      </UPageBody>
    </template>
    <template v-if="page?.body?.toc?.links?.length" #left>
      <UContentToc :title="page?.title" :links="page?.body?.toc?.links" />
    </template>
  </UPage>
</template>
