<script setup lang="ts">
import { PROJECTS } from "~/data/projects";
</script>
<template>
  <UPageGrid>
    <ProjectCard v-for="p in PROJECTS" :key="p.title" :project="p" />
  </UPageGrid>
</template>
