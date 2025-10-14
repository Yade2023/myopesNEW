<!-- eslint-disable vue/multi-word-component-names -->

<template>
  <div class="layout">
    <header class="header">
      <h1>
        <RouterLink to="/" class="router-link-class">我的履歷頁</RouterLink>
      </h1>
      <nav>
        <ul>
          <li>
            <RouterLink to="/Introduce" class="router-link-class">關於我</RouterLink>
          </li>
          <li>
            <RouterLink to="/CurriculumVitae" class="router-link-class">個人履歷</RouterLink>
          </li>
          <li>
            <RouterLink to="/Achievement" class="router-link-class">作品資料</RouterLink>
          </li>
        </ul>
        <button class="contact-button" @click="showContact = true">聯絡資訊</button>
        <ContactPopup v-if="showContact" @close="showContact = false" />
      </nav>
    </header>
    <div class="main">
      <section class="content">
        <RouterView />
      </section>
    </div>
    <footer>
      <footers />
    </footer>
  </div>
</template>


<script setup>
import { ref } from 'vue';
import ContactPopup from './ContactPopup.vue';
import Footers from './Footers.vue';

const showContact = ref(false);
</script>

<style scoped>
@import "@/assets/css/Layout.css";
</style>
