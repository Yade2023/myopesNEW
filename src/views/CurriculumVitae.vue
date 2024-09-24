<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <h2>個人履歷</h2>
    <Achievement :AchievementData=AchievementData />
  </div>
</template>


<script setup>
import Achievement from '../components/Achievement.vue';
import AchievementData from '../assets/json/Curriculum.json';
</script>

