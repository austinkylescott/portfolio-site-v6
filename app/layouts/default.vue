<script setup lang="ts">
const email = "austin.scott18+jobs.com";
const defaultTitle = "Hire Austin Scott!";
const defaultDescription =
  "Front-end developer, improv director, and creative technologist in Rochester, NY.";

useHead({
  htmlAttrs: {
    lang: "en",
  },
  link: [
    {
      rel: "icon",
      type: "image/x-icon",
      href: "/favicon.ico",
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
  title: defaultTitle,
  description: defaultDescription,
  ogTitle: defaultTitle,
  ogDescription: defaultDescription,
  ogImage: "/images/businessprofile.jpeg",
  ogUrl: "austinscott.dev",
  twitterTitle: defaultTitle,
  twitterDescription: defaultDescription,
  twitterImage: "/images/businessprofile.jpeg",
  twitterCard: "summary_large_image",
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
