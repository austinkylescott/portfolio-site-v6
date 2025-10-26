// composables/useSkillIcons.ts
import { computed } from "vue";
import { SKILLS } from "~/data/skills";
import type { SkillName } from "~/data/skills";

const FALLBACK_ICON = "i-lucide-help-circle";

const ICONS = new Map<SkillName, string>(
  SKILLS.map((s) => [s.name, s.icon] as const)
);

type Logo = { name: SkillName; icon: string };

export function useSkillIcons(names: SkillName[]) {
  const items = computed<Logo[]>(() =>
    names.map((name) => {
      const icon = ICONS.get(name);
      if (!icon && import.meta.env.DEV) {
        console.warn(`[useSkillIcons] Unknown skill name: "${name}"`);
      }
      return { name, icon: icon ?? FALLBACK_ICON };
    })
  );

  return { items };
}
