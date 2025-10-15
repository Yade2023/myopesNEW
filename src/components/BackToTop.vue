<!-- src/components/BackToTop.vue -->
<template>
  <button
    v-show="visible"
    class="back-to-top"
    @click="scrollToTop"
    aria-label="回到頂部"
  >
    🏠
  </button>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
const visible = ref(false)

const handleScroll = () => {
  visible.value = window.scrollY > 200 // 捲超過200px 才顯示
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
@import "@/assets/css/BackToTop.css";
</style>