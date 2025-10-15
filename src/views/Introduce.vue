<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <h2>自我介紹</h2>
    <div class="introduce">
      <div class="image-container">
        <img :src="imageUrl" alt="加載中..." />
        <span>2024/09/01</span> <!-- 直接展示 alt 内容 -->
      </div>
      <div class="introduce_right">
        <Achievement :AchievementData=AchievementData />
      </div>
    </div>
  </div>
</template>


<script setup>
import Achievement from '../components/Achievement.vue';
import AchievementData from '../assets/json/Introduce.json';
const imageUrl = new URL('@/assets/ph/WIN_20240831_13_02_38_Pro.jpg', import.meta.url).href;

</script>

<style scoped>
@import "@/assets/css/Introduce.css";
</style>

