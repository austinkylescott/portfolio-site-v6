<script setup lang="ts">
const props = defineProps<{
  location?: string;
  email?: string;
  resumePath?: string;
}>();

const location = computed(() => props.location ?? "Rochester, NY");
const email = computed(() => props.email ?? "austin.scott18+jobs.com");
const resumeUrl = computed(() => props.resumePath ?? "/AustinScottResume.pdf");
const { trackResumeDownload } = useResumeDownload();

const handleResumeDownload = () =>
  trackResumeDownload({
    source: "hire-me-section",
    href: resumeUrl.value,
  });
</script>

<template>
  <section id="hire-me" class="scroll-mt-24">
    <UCard>
      <div
        class="flex flex-col gap-6 md:flex-row md:items-center md:justify-between"
      >
        <!-- Left: pitch -->
        <div class="space-y-3 max-w-2xl">
          <div class="flex flex-wrap items-center gap-2">
            <UBadge color="primary" variant="soft">Open to Work</UBadge>
            <UBadge color="neutral" variant="subtle"
              >{{ location }} · Remote (US)</UBadge
            >
            <UBadge color="neutral" variant="subtle"
              >Full-time · Contract</UBadge
            >
          </div>

          <h2 class="text-2xl md:text-3xl font-semibold tracking-tight">
            Hire a senior front-end engineer who ships with taste and
            reliability
          </h2>

          <p class="text-muted-foreground">
            I build accessible, performant UIs with
            <strong>React/TypeScript</strong> and <strong>Nuxt/Vue</strong>.
            I’ve owned production features end-to-end (auth, paywall, design
            systems, analytics) at a major newsroom, and I collaborate tightly
            with design and product while mentoring devs without slowing
            velocity.
          </p>

          <ul class="list-disc pl-5 space-y-1 text-sm">
            <li>React, Next.js App Router · Nuxt 4/Vue 3 · TypeScript</li>
            <li>
              Design systems (Nuxt UI, shadcn/ui) · Accessibility · Testing
            </li>
            <li>
              Auth0/OAuth · Analytics · SEO · SSR/SSG · Traditional/Headless CMS
            </li>
          </ul>
        </div>

        <!-- Right: CTAs -->
        <div class="shrink-0 w-full md:w-auto">
          <div class="grid grid-cols-2 md:grid-cols-1 gap-2">
            <UButton
              icon="i-lucide-download"
              color="primary"
              variant="solid"
              :href="resumeUrl"
              external
              target="_blank"
              @click="handleResumeDownload"
            >
              Download Resume
            </UButton>

            <UButton
              icon="i-lucide-mail"
              color="neutral"
              variant="soft"
              :href="`mailto:${email}`"
            >
              Email Me
            </UButton>

            <UButton
              icon="i-lucide-linkedin"
              color="neutral"
              variant="soft"
              href="https://www.linkedin.com/in/austinkylescott"
              target="_blank"
              rel="noopener"
            >
              LinkedIn
            </UButton>

            <UButton
              icon="i-lucide-github"
              color="neutral"
              variant="soft"
              href="https://github.com/austinkylescott"
              target="_blank"
              rel="noopener"
            >
              GitHub
            </UButton>
          </div>
          <p class="text-xs opacity-70 mt-2 text-center md:text-left">
            Also open to Staff roles and select consulting.
          </p>
        </div>
      </div>
    </UCard>
  </section>
</template>
