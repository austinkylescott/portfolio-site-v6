<script setup lang="ts">
import type { ButtonProps, PageLogosItems } from "@nuxt/ui";

const links = ref<ButtonProps[]>([
  {
    label: "Work Experience",
    to: "/about",
    icon: "i-lucide-square-play",
  },
  {
    label: "See projects",
    to: "/work",
    color: "neutral",
    variant: "subtle",
    leadingIcon: "i-lucide-code",
    trailingIcon: "i-lucide-arrow-right",
  },
]);

const items = [
  {
    label: "HTML5",
    name: "vscode-icons:file-type-html",
  },
  {
    label: "CSS3",
    name: "vscode-icons:file-type-css2",
  },
  {
    label: "JavaScript",
    name: "vscode-icons:file-type-js-official",
  },
  {
    label: "SCSS",
    name: "vscode-icons:file-type-scss",
  },
  {
    label: "React.js",
    name: "vscode-icons:file-type-reactjs",
  },
  {
    label: "Next.js",
    name: "vscode-icons:file-type-next",
  },
  {
    label: "Vue.js",
    name: "vscode-icons:file-type-vue",
  },
  {
    label: "Nuxt.js",
    name: "vscode-icons:file-type-nuxt",
  },
] satisfies PageLogosItems;
</script>
<template>
  <UPageHero
    headline="Looking for work!"
    title="Hi, I'm Austin&nbsp;Scott!"
    :links="links"
  >
    <template #description>
      <p>
        Full-stack web developer and managing director of
        The&nbsp;Focus&nbsp;Theater, based in Rochester, NY.
      </p>
      <p class="mt-4">
        I'm seeking remote or local hybrid Senior or Staff&nbsp;web engineering
        roles where I can keep growing— ideally on modern React/Vue + TypeScript
        stacks (Next.js, Tanstack, Nuxt)
      </p>
    </template>

    <UPageLogos :marquee="{ pauseOnHover: true }" :items="items">
      <template v-for="item in items" :key="item.label">
        <UTooltip :text="item.label" :delay-duration="300">
          <UIcon :name="item.name" class="size-14 shrink-0" />
        </UTooltip>
      </template>
    </UPageLogos>
  </UPageHero>
</template>
