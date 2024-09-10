<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="image-container">
    <img :src="imageUrl" alt="加載中..." />
    <span>2024/09/01</span> <!-- 直接展示 alt 内容 -->
  </div>
  <div>
    <h2>簡介</h2>
    <p>{{ featureData }}</p>
  </div>
</template>


<script setup>
import { ref } from 'vue';
const imageUrl = new URL('@/assets/ph/WIN_20240831_13_02_38_Pro.jpg', import.meta.url).href;
const featureData = ref('這是我的履歷網頁，感謝您的查看');

</script>

<style scoped>
.image-container {
  text-align: center; /* 確保圖片容器中的內容居中 */
}

img {
  max-width: 30%;     /* 保證圖片不超出容器 */
  height: auto;       /* 保持圖片的縱橫比 */
  display: block;     /* 將圖片設置為塊級元素 */
  margin: 0 auto;     /* 水平居中圖片 */
}
</style>