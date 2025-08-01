<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  images: string[]
}>()

const current = ref(0)

const next = () => {
  current.value = (current.value + 1) % props.images.length
}
const prev = () => {
  current.value = (current.value - 1 + props.images.length) % props.images.length
}

const isVideo = (src: string) => {
  return src.includes('youtube.com') || src.includes('vimeo.com') || src.includes('player.vimeo.com')
}
</script>

<template>
  <div class="relative w-full max-w-3xl mx-auto">
    <div class="overflow-hidden rounded-lg bg-black h-[300px] md:h-[420px]">
      <component
        :is="isVideo(images[current]) ? 'iframe' : 'img'"
        :src="images[current]"
        class="w-full h-full object-contain"
        :alt="'slide-' + current"
        v-bind="isVideo(images[current]) ? {
          frameborder: '0',
          allow: 'autoplay; fullscreen',
          allowfullscreen: true
        } : {}"
      />
    </div>

    <div class="absolute inset-0 flex items-center justify-between px-3">
      <button @click="prev" class="text-white bg-black/50 hover:bg-black/80 p-2 rounded-full">‹</button>
      <button @click="next" class="text-white bg-black/50 hover:bg-black/80 p-2 rounded-full">›</button>
    </div>

    <div class="flex justify-center mt-4 gap-2">
      <span
        v-for="(_, index) in images"
        :key="index"
        class="w-3 h-3 rounded-full"
        :class="current === index ? 'bg-sky-500' : 'bg-gray-400 opacity-50'"
      ></span>
    </div>
  </div>
</template>
