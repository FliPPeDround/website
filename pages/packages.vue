<template>
  <div class="container max-w-screen-2xl flex items-center justify-between gap-2 px-4 md:px-8">
    <PatternBackground
      :animate="true"
      :direction="PATTERN_BACKGROUND_DIRECTION.TopRight"
      :variant="PATTERN_BACKGROUND_VARIANT.Dot"
      class="flex h-80 w-full mt-10 items-center justify-center"
      :speed="PATTERN_BACKGROUND_SPEED.Slow"
    >
      <div>
        <p
          class="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-5xl"
        >
          Packages
        </p>
        <div />
      </div>
    </PatternBackground>
  </div>
</template>

<script setup lang="ts">
import {
  PATTERN_BACKGROUND_DIRECTION,
  PATTERN_BACKGROUND_SPEED,
  PATTERN_BACKGROUND_VARIANT,
} from '@/components/ui/PatternBackground/index'

const { fetchPackages } = usePackages()

fetchPackages()
</script>
