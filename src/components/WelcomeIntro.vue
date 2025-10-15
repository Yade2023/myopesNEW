<template>
    <transition name="fade">
        <section v-if="visible" class="welcome" @pointermove="onMove" @pointerleave="resetMove">
            <div class="card">
                <div class="avatar" :class="{
                    'has-photo': !!photoUrl
                }">
                    <img v-if="photoUrl" :src="photoUrl" alt="avatar" class="avatar-img" />
                    <span v-else>{{ initials }}</span>
                </div>
                <h1 class="reveal">{{ name }}</h1>
                <p class="typing" :style="{ '--typing-len': typingLen }">{{ title }}</p>
            </div>

            <div class="blob b1"></div>
            <div class="blob b2"></div>
            <div class="blob b3"></div>
        </section>
    </transition>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const props = defineProps({
    name: { type: String, default: '徐承杰' },
    title: { type: String, default: '前端工程師 · 個人履歷' },
    autoHideMs: { type: Number, default: 0 }, // 設為0表示不自動隱藏
    next: { type: String, default: '' },
    photoUrl: { type: String, default: '' },
    iconUrl: { type: String, default: '' }     // ← 新增：圖示路徑（SVG/PNG 皆可）
})

const visible = ref(true)

const initials = computed(() => props.name.slice(0, 2))
const typingLen = computed(() => String(props.title.length))


// 滑鼠視差效果
function onMove(e) {
    const el = e.currentTarget
    const r = el.getBoundingClientRect()
    const cx = (e.clientX - r.left) / r.width - 0.5
    const cy = (e.clientY - r.top) / r.height - 0.5
    el.style.setProperty('--mx', cx.toFixed(3))
    el.style.setProperty('--my', cy.toFixed(3))
}
function resetMove(e) {
    const el = e.currentTarget
    el.style.setProperty('--mx', 0)
    el.style.setProperty('--my', 0)
}

onMounted(() => {
    // 移除自動隱藏功能，讓動畫持續顯示
    // if (props.autoHideMs > 0) setTimeout(finish, props.autoHideMs)
})
</script>

<style scoped>
@import "@/assets/css/WelcomeIntro.css";
</style>