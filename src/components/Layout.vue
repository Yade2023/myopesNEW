<!-- eslint-disable vue/multi-word-component-names -->

<template>
  <div class="layout">
    <header class="header">
      <h1><RouterLink to="/" class="router-link-class">我的履歷頁</RouterLink></h1>
      <button class="contact-button" @click="showContact = true">聯絡資訊</button>
      <ContactPopup v-if="showContact" @close="showContact = false" />
      
    </header>
    <div class="main">
      <aside class="sidebar">
        <nav>
          <ul>
            <li><RouterLink to="/Introduce">自我介紹</RouterLink></li>&nbsp;
            <li><RouterLink to="/CurriculumVitae">個人履歷</RouterLink></li>&nbsp;
            <li><RouterLink to="/Achievement">作品資料</RouterLink></li>
          </ul>
        </nav>
      </aside>
      <section class="content">
        <RouterView />
      </section>
    </div>
  </div>
</template>


<script setup>
import { ref } from 'vue';
import ContactPopup from './ContactPopup.vue';

const showContact = ref(false);
</script>

<style scoped>
@import "@/assets/css/Layout.css";
</style>
