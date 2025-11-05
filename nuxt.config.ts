// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  css: ["~/assets/css/main.css"],
  image: {
    provider: "vercel",
    screens: {
      placeholder: 10,
      thumb: 300,
      thumb2x: 600,
      avatar: 120,
      avatarSm: 140,
      avatarMd: 160,
      avatarLg: 180,
      avatarXl: 200,
      avatar2x: 240,
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      "2xl": 1536,
    },
  },
  modules: [
    "@nuxt/ui",
    "@nuxt/content",
    "@nuxt/eslint",
    "@nuxt/image",
    "@nuxt/scripts",
    "@posthog/nuxt",
  ],
  runtimeConfig: {
    public: {
      posthogClientConfig: {
        session_recording: { maskAllInputs: true },
        capture_pageview: "history_change",
        enable_heatmaps: true,
      },
      posthogPublicKey: import.meta.env.NUXT_PUBLIC_POSTHOG_KEY || undefined,
      posthogHost:
        import.meta.env.NUXT_PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com",
    },
  },
});
