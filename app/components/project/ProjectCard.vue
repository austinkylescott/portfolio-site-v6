<script setup lang="ts">
import type { Project } from "~/data/projects";

// You can keep or remove ui; default already has `pt-4 mt-auto`
const ui = { footer: "w-full" };

defineProps<{ project: Project }>();
</script>

<template>
  <UPageCard :title="project.title" :ui="ui" spotlight>
    <template #header>
      <NuxtImg
        v-if="project.thumbnail"
        :alt="`Thumbnail image for ${project.title}`"
        :src="project.thumbnail"
        class="rounded-lg"
      />
    </template>

    <template #description>
      {{ project.description }}
    </template>

    <template #footer>
      <div class="flex flex-col items-end gap-3">
        <span class="text-pretty font-semibold">Technology Used</span>
        <!-- Icons row -->
        <ProjectSkillIcons :names="project.skills" size="size-6" />

        <!-- Buttons row -->
        <div class="flex text-base justify-end gap-2">
          <UButton
            label="Live Site"
            leading-icon="lucide:globe"
            :to="project.siteUrl"
            target="_blank"
            rel="noopener"
          />
          <UButton
            label="Github"
            variant="soft"
            leading-icon="lucide:code-xml"
            :to="project.github"
            target="_blank"
            rel="noopener"
          />
        </div>
      </div>
    </template>
  </UPageCard>
</template>
