<script setup lang="ts">
import { computed } from "vue";
import { useSkillIcons } from "~/composables/useSkillIcons";
import type { SkillName } from "~/data/skills";

const props = defineProps<{
  names: SkillName[];
  size?: number | string; // tailwind size class or pixel number
  class?: string;
}>();

const { items } = useSkillIcons(props.names);

const sizeClass = computed(() =>
  typeof props.size === "number"
    ? `w-[${props.size}px] h-[${props.size}px]`
    : (props.size ?? "size-6")
);
</script>

<template>
  <div class="flex flex-wrap items-center gap-2" :class="props.class">
    <UTooltip
      v-for="s in items"
      :key="s.name"
      :text="s.name"
      :delay-duration="250"
    >
      <UIcon
        :name="s.icon"
        :class="['shrink-0', sizeClass]"
        :aria-label="s.name"
      />
    </UTooltip>
  </div>
</template>
