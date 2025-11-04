<script setup lang="ts">
import type { ButtonProps } from "@nuxt/ui";
import { SKILLS } from "~/data/skills";

const links = ref<ButtonProps[]>([
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/austinkylescott",
    target: "_blank",
    leadingIcon: "streamline-logos:linkedin-logo-block",
  },
  {
    label: "Download Resume",
    href: "/AustinScottResume.pdf",
    external: true,
    target: "_blank",
    leadingIcon: "i-lucide-file-text",
    variant: "soft",
  },
  {
    label: "See projects",
    to: "/projects",
    variant: "outline",
    leadingIcon: "i-lucide-code-xml",
    trailingIcon: "i-lucide-arrow-right",
  },
]);

const heroUi = {
  container: "py-10 sm:pt-10 sm:pb-10 lg:py-10",
};

const logosUi = {
  logos: "my-0",
};
</script>
<template>
  <UPageBody>
    <div
      class="mx-auto mb-0 rounded-full overflow-hidden ring-4 ring-primary shadow size-32 sm:size-36 md:size-40 lg:size-44 xl:size-52"
    >
      <NuxtImg
        src="/images/businessprofile.jpeg"
        alt="Photo of Austin Scott"
        width="1200"
        height="1800"
        class="h-full w-full object-cover object-[50%_20%]"
        format="webp"
        densities="x1 x2"
        placeholder
        sizes="(min-width:1280px) 200px, (min-width:1024px) 180px, (min-width:768px) 160px, (min-width:640px) 140px, 120px"
      />
    </div>

    <UPageHero
      headline="Looking for work!"
      title="Hi, I'm Austin&nbsp;Scott!"
      :links="links"
      :ui="heroUi"
    >
      <template #description>
        <p>
          Full-stack web developer and Managing Director of
          <ULink href="https://www.focus.theater/"
            >The&nbsp;Focus&nbsp;Theater</ULink
          >, based in Rochester, NY.
        </p>
        <p class="mt-4">
          Most recently, I spent five years with the Tampa&nbsp;Bay&nbsp;Times
          as a senior developer working on a legacy React codebase, managing
          releases, and implementing 3rd-party integrations.
        </p>
        <p class="mt-4">
          I'm seeking remote or local-hybrid Senior or Staff&nbsp;web
          engineering roles where I can keep growing— ideally on modern
          React/Vue + TypeScript stacks (Next.js, Nuxt, TanStack).
        </p>
      </template>
      <UPageLogos :ui="logosUi" :marquee="{ pauseOnHover: true }">
        <template v-for="item in SKILLS" :key="item.name">
          <UTooltip :text="item.name" :delay-duration="300">
            <UIcon :name="item.icon" class="size-14 shrink-0" />
          </UTooltip>
        </template>
      </UPageLogos>
    </UPageHero>
    <SectionsHireMe />
  </UPageBody>
</template>
