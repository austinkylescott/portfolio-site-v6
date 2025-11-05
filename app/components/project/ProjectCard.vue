<script setup lang="ts">
import type { Project } from "~/data/projects";

const ui = { header: "w-full", footer: "w-full" };

defineProps<{ project: Project }>();

const statusLabel = (s?: Project["status"]) => {
  if (s === "featured") return "Featured";
  else if (s === "wip") return "In Progress";
  else if (s === "archived") return "Archived";
};
</script>

<template>
  <UPageCard
    :title="project.title"
    :ui="ui"
    :description="project.description"
    spotlight
  >
    <template #header>
      <UBadge
        v-if="project.status"
        variant="subtle"
        :color="
          project.status === 'archived'
            ? 'neutral'
            : project.status === 'wip'
              ? 'warning'
              : 'primary'
        "
        :label="statusLabel(project.status)"
        class="mb-2"
      />
      <NuxtImg
        v-if="project.thumbnail"
        :alt="`Thumbnail image for ${project.title}`"
        :src="project.thumbnail"
        width="300"
        height="200"
        :loading="project.status === 'archived' ? 'lazy' : undefined"
        class="rounded-lg mx-auto w-[300px] h-[200px] object-cover origin-top"
      />
    </template>

    <template #footer>
      <div class="flex flex-col items-end gap-3">
        <span class="text-pretty font-semibold">Technology Used</span>
        <!-- Icons row -->
        <ProjectSkillIcons :names="project.skills" size="size-6" />

        <!-- Buttons row -->
        <div class="flex text-base justify-end gap-2">
          <UTooltip
            v-if="!project.siteUrl && project.status === 'archived'"
            text="Archived demo not hosted"
          >
            <UButton label="Live Site" leading-icon="lucide:globe" disabled />
          </UTooltip>
          <UTooltip
            v-else-if="!project.siteUrl && project.status === 'wip'"
            text="Coming soon!"
          >
            <UButton label="Live Site" leading-icon="lucide:globe" disabled />
          </UTooltip>
          <UButton
            v-else-if="project.siteUrl"
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
