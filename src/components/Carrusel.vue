<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  images: {
    type: Array,
    required: true
  }
})

const current = ref(0)

watch(() => props.images, () => {
  current.value = 0
})

const next = () => {
  current.value = (current.value + 1) % props.images.length
}
const prev = () => {
  current.value = (current.value - 1 + props.images.length) % props.images.length
}
</script>

<template>
  <div class="relative w-full max-w-xl mx-auto">
    <div class="overflow-hidden rounded-lg">
      <img
        :src="props.images[current]"
        class="w-full h-64 object-cover transition-all duration-500"
        :alt="'Imagen ' + (current + 1)"
      />
    </div>

    <div class="absolute inset-0 flex items-center justify-between px-4">
      <button @click="prev" class="text-white bg-black/40 p-2 rounded-full cursor-pointer">‹</button>
      <button @click="next" class="text-white bg-black/40 p-2 rounded-full cursor-pointer">›</button>
    </div>

    <div class="flex justify-center mt-4 space-x-2">
      <span
        v-for="(img, index) in props.images"
        :key="index"
        :class="[
          'w-3 h-3 rounded-full',
          current === index ? 'bg-sky-500' : 'bg-gray-400'
        ]"
      ></span>
    </div>
  </div>
</template>
