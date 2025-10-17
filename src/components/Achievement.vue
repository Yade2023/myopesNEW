<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="achievement-container">
    <div v-if="typeof achievementRef === 'object'" class="achievement-list">
      <div v-for="(value, key) in achievementRef" :key="key" class="achievement-item">
        <h3 class="achievement-title">{{ key }}</h3>
        <div v-if="typeof value !== 'object'" class="achievement-content">
          {{ value }}
        </div>
        <div v-else class="achievement-subsection">
          <div v-for="(subValue, subKey) in value" :key="subKey" class="achievement-subitem">
            <h4 class="achievement-subtitle">{{ subKey }}</h4>
            <div v-if="typeof subValue !== 'object'" class="achievement-subcontent">
              {{ subValue }}
            </div>
            <div v-else class="achievement-details">
              <div v-for="(thirdValue, thirdKey) in subValue" :key="thirdKey" class="achievement-detail-item">
                <span class="achievement-detail-label">{{ thirdKey }}:</span>
                <span class="achievement-detail-value">{{ thirdValue }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import { defineProps, toRef } from 'vue';
const props = defineProps({
  AchievementData: Object
}); 
const achievementRef = toRef(props, 'AchievementData');

</script>

<style scoped>
.achievement-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Microsoft JhengHei', 'PingFang TC', 'Helvetica Neue', Arial, sans-serif;
  line-height: 1.6;
}

.achievement-list {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.achievement-item {
  background: #f8f9fa;
  border-radius: 8px;
  padding: 20px;
  border-left: 4px solid #007bff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.achievement-title {
  font-size: 1.4rem;
  font-weight: 600;
  color: #2c3e50;
  margin: 0 0 12px 0;
  padding-bottom: 8px;
  border-bottom: 2px solid #e9ecef;
}

.achievement-content {
  font-size: 1.1rem;
  color: #495057;
  line-height: 1.8;
  text-align: justify;
  word-break: break-word;
}

.achievement-subsection {
  margin-top: 16px;
}

.achievement-subitem {
  margin-bottom: 16px;
  padding: 12px;
  background: #ffffff;
  border-radius: 6px;
  border: 1px solid #e9ecef;
}

.achievement-subtitle {
  font-size: 1.1rem;
  font-weight: 500;
  color: #495057;
  margin: 0 0 8px 0;
}

.achievement-subcontent {
  font-size: 1rem;
  color: #6c757d;
  line-height: 1.8;
  text-align: justify;
  word-break: break-word;
}

.achievement-details {
  margin-top: 8px;
}

.achievement-detail-item {
  display: flex;
  margin-bottom: 6px;
  font-size: 1rem;
  line-height: 1.5;
}

.achievement-detail-label {
  font-weight: 500;
  color: #495057;
  min-width: 80px;
  margin-right: 8px;
}

.achievement-detail-value {
  color: #6c757d;
  flex: 1;
}

/* 響應式設計 */
@media (max-width: 768px) {
  .achievement-container {
    padding: 15px;
  }
  
  .achievement-item {
    padding: 15px;
  }
  
  .achievement-title {
    font-size: 1.2rem;
  }
  
  .achievement-content {
    font-size: 1rem;
  }
  
  .achievement-subtitle {
    font-size: 1rem;
  }
  
  .achievement-detail-item {
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .achievement-container {
    padding: 10px;
  }
  
  .achievement-item {
    padding: 12px;
  }
  
  .achievement-title {
    font-size: 1.1rem;
  }
  
  .achievement-content {
    font-size: 0.95rem;
  }
  
  .achievement-subtitle {
    font-size: 0.95rem;
  }
  
  .achievement-detail-item {
    font-size: 0.85rem;
  }
}
</style>