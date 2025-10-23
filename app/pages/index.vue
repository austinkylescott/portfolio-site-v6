<script setup lang="ts">
import type { ButtonProps } from "@nuxt/ui";

const links = ref<ButtonProps[]>([
  {
    label: "LinkedIn",
    to: "https://www.linkedin.com/in/austinkylescott",
    target: "_blank",
    leadingIcon: "streamline-logos:linkedin-logo-block",
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
    alt: "HTML5",
    src: "vscode-icons:file-type-html",
  },
  {
    alt: "CSS3",
    src: "vscode-icons:file-type-css2",
  },
  {
    alt: "JavaScript",
    src: "vscode-icons:file-type-js-official",
  },
  {
    alt: "SCSS",
    src: "vscode-icons:file-type-scss",
  },
  {
    alt: "React.js",
    src: "vscode-icons:file-type-reactjs",
  },
  {
    alt: "Next.js",
    src: "vscode-icons:file-type-next",
  },
  {
    alt: "Vue.js",
    src: "vscode-icons:file-type-vue",
  },
  {
    alt: "Nuxt.js",
    src: "vscode-icons:file-type-nuxt",
  },
];
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
      <template v-for="item in items" :key="item.alt">
        <UTooltip :text="item.alt" :delay-duration="300">
          <UIcon :name="item.src" class="size-14 shrink-0" />
        </UTooltip>
      </template>
    </UPageLogos>
  </UPageHero>
</template>
