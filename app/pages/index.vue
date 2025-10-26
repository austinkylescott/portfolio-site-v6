<script setup lang="ts">
import type { ButtonProps } from "@nuxt/ui";
import { SKILLS } from "~/data/skills";

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
    variant: "outline",
    leadingIcon: "i-lucide-code-xml",
    trailingIcon: "i-lucide-arrow-right",
  },
]);
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
    <UPageLogos :marquee="{ pauseOnHover: true }">
      <template v-for="item in SKILLS" :key="item.name">
        <UTooltip :text="item.name" :delay-duration="300">
          <UIcon :name="item.icon" class="size-14 shrink-0" />
        </UTooltip>
      </template>
    </UPageLogos>
  </UPageHero>
</template>
