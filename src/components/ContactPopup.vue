<template>
  <div class="popup-overlay" @click="$emit('close')">
    <div class="popup" @click.stop>
      <h2>聯絡資訊</h2>
      <p>姓名: 徐承杰</p>
      <p>電話: 0936-338-597</p>
      <p>E-mail: sy599200076@gmail.com</p>
      <button @click="$emit('close')">關閉</button>
    </div>
  </div>
</template>


<style scoped>
@import "@/assets/css/ContactPopup.css";
</style>
