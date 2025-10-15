<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="home">
    <!-- WelcomeIntro組件作為首頁的主要內容 -->
    <WelcomeIntro name="徐承杰" title="前端工程師 · 個人履歷" photoUrl="@/assets/ph/2222.png" />
    
    <!-- 其他首頁內容 -->
    <div class="home-content">
      <h2>簡介</h2>
      <p>{{ featureData }}</p>
    </div>
  </div>
</template>


<script setup>
import WelcomeIntro from '../components/WelcomeIntro.vue'
import { ref } from 'vue';
const featureData = ref('這是我的履歷網頁，感謝您的查看');

</script>
<style scoped>
.home {
  min-height: 100vh;
  width: 100%;
  /* 用你的背景圖（範例） */
}

.home-content {
  padding: 40px 20px;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.home-content h2 {
  color: #333;
  margin-bottom: 20px;
  font-size: 2rem;
}

.home-content p {
  color: #666;
  font-size: 1.1rem;
  line-height: 1.6;
}
</style>