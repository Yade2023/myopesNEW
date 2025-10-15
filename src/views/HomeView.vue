<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="home">
    <!-- 你的首頁內容（會被開場動畫透明遮罩蓋在上面） -->
    <!-- 建議 body 或 .home 自己就有背景圖 -->
    <WelcomeIntro name="徐承杰" title="前端工程師 · 個人履歷" :autoHideMs="2500" next="" photoUrl="../assets/ph/2222.png"  />
    <div>
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
  /* 用你的背景圖（範例） */
}
</style>