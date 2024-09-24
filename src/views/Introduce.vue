<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <h2>自我介紹</h2>
    <Achievement :AchievementData=AchievementData />

  </div>
</template>


<script setup>
import Achievement from '../components/Achievement.vue';
import AchievementData from '../assets/json/Introduce.json';
</script>

