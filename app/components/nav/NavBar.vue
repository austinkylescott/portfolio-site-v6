<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const route = useRoute();
const resumeHref = "/AustinScottResume.pdf";
const { trackResumeDownload } = useResumeDownload();
const handleResumeDownload = () =>
  trackResumeDownload({
    source: "nav-bar",
    href: resumeHref,
  });

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: "Home",
    to: "/",
    active: route.path === "/",
  },
  {
    label: "About",
    to: "/about",
    active: route.path.startsWith("/about"),
  },
  {
    label: "Projects",
    to: "/projects",
    active: route.path.startsWith("/projects"),
  },
]);
</script>

<template>
  <UHeader>
    <template #title>Austin Scott</template>

    <UNavigationMenu :items="items" />

    <template #right>
      <UColorModeButton />
      <UTooltip text="Download Resume">
        <UButton
          color="neutral"
          variant="ghost"
          :href="resumeHref"
          external
          target="_blank"
          icon="i-lucide-file-text"
          aria-label="Resume"
          @click="handleResumeDownload"
        />
      </UTooltip>
      <UTooltip text="Open on GitHub">
        <UButton
          color="neutral"
          variant="ghost"
          href="https://github.com/austinkylescott"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
        />
      </UTooltip>
    </template>
    <template #body>
      <UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />
    </template>
  </UHeader>
</template>
