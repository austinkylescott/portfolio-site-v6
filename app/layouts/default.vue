<script setup lang="ts">
const email = "austin.scott18+jobs.com";

useHead({
  htmlAttrs: {
    lang: "en",
  },
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: "/favicon.png",
    },
  ],
  script: [
    {
      type: "application/ld+json",
      // Minimal Person schema with contact + sameAs
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Austin Scott",
        jobTitle: "Senior Front-End Engineer",
        email: `mailto:${email}`,
        url: "https://www.austinscott.dev",
        sameAs: [
          "https://www.linkedin.com/in/austinkylescott",
          "https://github.com/austinkylescott",
        ],
      }),
    },
  ],
});

useSeoMeta({
  title: "Hire Austin Scott!",
  description:
    "You need a do-it-all worker. Austin can do it all (or will learn very quickly!)",
});
</script>
<template>
  <div>
    <NavBar />
    <UContainer>
      <slot />
    </UContainer>
  </div>
</template>
