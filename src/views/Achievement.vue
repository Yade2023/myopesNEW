<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <h2>技能簡介</h2>
    <Achievement :AchievementData=AchievementData />
    <h2>Xmind</h2>
  </div>
  <div class="main" >
    <img src="@/assets/ph/Xmind.png" class="small-image" />
  </div>
  <h2>Visual Studio 2022</h2>
    <Achievement :AchievementData=VisualStudio2022ConnieWeb />
  <div class="main" >
        <img src="@/assets/ph/ConnieWeb.png" class="small-image" />
  </div>

</template>

<script setup>
import Achievement from '../components/Achievement.vue';
import AchievementData from '../assets/json/Achievement.json';
import VisualStudio2022ConnieWeb from '../assets/json/VisualStudio2022ConnieWeb.json';
</script>

<style scoped>
@import "@/assets/css/Layout.css";
.small-image {

  width: 800px; /* 設定寬度 */
  height: auto; /* 自動調整高度以保持比例 */
}
</style>

