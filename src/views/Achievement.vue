<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="achievement-page">
    <h1 class="page-title">作品展示</h1>
    
    <!-- Xmind 作品 -->
    <div class="project-card">
      <h2 class="project-title">Xmind 思維導圖</h2>
      <div class="image-container">
        <img src="@/assets/ph/Xmind.png" class="project-image" alt="Xmind 作品截圖" />
      </div>
    </div>

    <!-- Visual Studio 2022 作品 -->
    <div class="project-card">
      <h2 class="project-title">康妮美學網站</h2>
      <div class="project-description">
        <p>{{ VisualStudio2022ConnieWeb.簡介 }}</p>
      </div>
      
      <div class="project-screenshots">
        <div v-for="(screenshot, index) in VisualStudio2022ConnieWeb.作品截圖" :key="index" class="screenshot-item">
          <div class="image-container">
            <img 
              :src="getImageSrc(screenshot.圖片)" 
              :alt="screenshot.描述" 
              class="project-image"
              @error="handleImageError"
              @load="handleImageLoad"
            />
            <div v-if="imageLoading" class="image-loading">載入中...</div>
            <div v-if="imageError" class="image-error">圖片載入失敗</div>
          </div>
          <div class="screenshot-info">
            <p class="screenshot-description">{{ screenshot.描述 }}</p>
            <a 
              v-if="screenshot.URL" 
              :href="screenshot.URL" 
              target="_blank" 
              class="project-link"
            >
              🔗 查看作品網站
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import VisualStudio2022ConnieWeb from '../assets/json/VisualStudio2022ConnieWeb.json';
import ConnieImage from '@/assets/ph/康妮美學首頁.png';

const imageLoading = ref(false);
const imageError = ref(false);

// 處理圖片路徑
function getImageSrc(imagePath) {
  if (imagePath.includes('康妮美學首頁.png')) {
    return ConnieImage;
  }
  return imagePath;
}

function handleImageLoad() {
  imageLoading.value = false;
  imageError.value = false;
}

function handleImageError() {
  imageLoading.value = false;
  imageError.value = true;
}
</script>

<style scoped>
@import "@/assets/css/Layout.css";

.achievement-page {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Microsoft JhengHei', 'PingFang TC', 'Helvetica Neue', Arial, sans-serif;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  min-height: 100vh;
}

.page-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #2c3e50;
  text-align: center;
  margin: 0 0 40px 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

.project-card {
  background: #ffffff;
  border-radius: 16px;
  padding: 30px;
  margin-bottom: 30px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
}

.project-title {
  font-size: 1.8rem;
  font-weight: 600;
  color: #2c3e50;
  margin: 0 0 20px 0;
  padding-bottom: 10px;
  border-bottom: 3px solid #007bff;
  display: flex;
  align-items: center;
}

.project-title::before {
  content: "💼";
  margin-right: 10px;
  font-size: 1.5rem;
}

.project-description {
  margin-bottom: 25px;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 12px;
  border-left: 4px solid #28a745;
}

.project-description p {
  font-size: 1.1rem;
  line-height: 1.7;
  color: #495057;
  margin: 0;
}

.project-screenshots {
  display: grid;
  gap: 25px;
}

.screenshot-item {
  background: #f8f9fa;
  border-radius: 12px;
  padding: 20px;
  border: 1px solid #e9ecef;
}

.image-container {
  text-align: center;
  margin-bottom: 15px;
  position: relative;
}

.image-loading {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 10px 20px;
  border-radius: 20px;
  font-size: 0.9rem;
}

.image-error {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(220, 53, 69, 0.9);
  color: white;
  padding: 10px 20px;
  border-radius: 20px;
  font-size: 0.9rem;
}

.project-image {
  width: 100%;
  max-width: 600px;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project-image:hover {
  transform: scale(1.02);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.screenshot-info {
  text-align: center;
}

.screenshot-description {
  font-size: 1rem;
  color: #6c757d;
  line-height: 1.6;
  margin: 0 0 15px 0;
}

.project-link {
  display: inline-block;
  background: linear-gradient(135deg, #007bff, #0056b3);
  color: white;
  text-decoration: none;
  padding: 12px 24px;
  border-radius: 25px;
  font-weight: 500;
  font-size: 1rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 123, 255, 0.3);
}

.project-link:hover {
  background: linear-gradient(135deg, #0056b3, #004085);
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(0, 123, 255, 0.4);
  color: white;
  text-decoration: none;
}

/* ===============================
   響應式設計
   =============================== */
@media (max-width: 768px) {
  .achievement-page {
    padding: 15px;
  }
  
  .page-title {
    font-size: 2rem;
  }
  
  .project-card {
    padding: 20px;
  }
  
  .project-title {
    font-size: 1.5rem;
  }
  
  .project-description p {
    font-size: 1rem;
  }
  
  .project-image {
    max-width: 100%;
  }
}

@media (max-width: 480px) {
  .achievement-page {
    padding: 10px;
  }
  
  .page-title {
    font-size: 1.8rem;
  }
  
  .project-card {
    padding: 15px;
  }
  
  .project-title {
    font-size: 1.3rem;
  }
  
  .project-description {
    padding: 15px;
  }
  
  .project-description p {
    font-size: 0.95rem;
  }
  
  .screenshot-item {
    padding: 15px;
  }
  
  .project-link {
    padding: 10px 20px;
    font-size: 0.9rem;
  }
}
</style>

