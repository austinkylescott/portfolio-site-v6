export const useResumeDownload = () => {
  const nuxtApp = useNuxtApp();
  const posthog = process.client ? nuxtApp.$posthog?.() : null;

  const trackResumeDownload = (context?: { source?: string; href?: string }) => {
    if (!process.client || !posthog) {
      return;
    }

    const payload: Record<string, unknown> = {
      ...context,
    };

    if (typeof window !== "undefined") {
      payload.path = window.location.pathname;
    }

    posthog.capture("resume_download", payload);
  };

  return {
    trackResumeDownload,
  };
};
