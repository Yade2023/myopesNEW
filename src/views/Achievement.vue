<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <h2>功能 3 </h2>
    <p>{{ featureData }}</p>
  </div>
  <H1>
          ...
  </H1>
</template>


<script setup>
import { ref } from 'vue';

const featureData = ref('3始数据');

// 可以在这里加载或处理该视图所需的数据
</script>