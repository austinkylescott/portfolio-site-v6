<script setup lang="ts">
import { PROJECTS } from "~/data/projects";

const wip = computed(() => PROJECTS.filter((p) => p.status === "wip"));
const archived = computed(() =>
  PROJECTS.filter((p) => p.status === "archived")
);
const featured = computed(() =>
  PROJECTS.filter((p) => p.status === "featured")
);
</script>
<template>
  <UPage>
    <UPageHeader title="Projects" />
    <UPageBody>
      <h2 class="text-2xl font-bold mb-4">Featured Projects</h2>
      <UAlert
        title="These projects are finished projects."
        description="I consider these mostly complete. I'll still come back to them from time to time, but the site is production-ready in its current state."
        icon="i-lucide-circle-check"
        color="success"
        variant="solid"
      />
      <UPageGrid class="gap-6">
        <ProjectCard v-for="p in featured" :key="p.title" :project="p" />
      </UPageGrid>
      <h2 class="text-2xl font-bold mb-4">Work in Progress</h2>
      <UAlert
        title="These are works in progress."
        description="I'm currently working on these projects. They are in various phases of iteration."
        icon="i-lucide-triangle-alert"
        color="warning"
        variant="solid"
      />
      <UPageGrid class="gap-6">
        <ProjectCard v-for="p in wip" :key="p.title" :project="p" />
      </UPageGrid>
      <h2 class="text-2xl font-bold mb-4">Archived Projects</h2>
      <UAlert
        title="These projects have been archived."
        description="These were built and hosted many years ago. In some cases, servers or databases no longer exist. Functionality may vary."
        icon="i-lucide-circle-x"
        color="neutral"
        variant="subtle"
      />
      <UPageGrid class="gap-6">
        <ProjectCard v-for="p in archived" :key="p.title" :project="p" />
      </UPageGrid>
    </UPageBody>
  </UPage>
</template>
