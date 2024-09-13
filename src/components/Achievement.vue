<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    
    <ul v-if="typeof featureData === 'object'">
      <li v-for="(value, key) in featureData" :key="key">
        <strong>{{ key }}:</strong> 
        <span v-if="typeof value !== 'object'">{{ value }}</span>
        <ul v-else>
          <li v-for="(subValue, subKey) in value" :key="subKey">
            <strong>{{ subKey }}:</strong> 
            <span v-if="typeof subValue !== 'object'">{{ subValue }}</span>
            <ul v-else>
              <li v-for="(thirdValue, thirdKey) in subValue" :key="thirdKey">
                <strong>{{ CheckThirdkey(thirdKey) }}</strong> {{ thirdValue }}
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>


<script setup>
import { ref } from 'vue';
import AchievementData from '../assets/json/Achievement.json';

const featureData = ref(AchievementData);

function CheckThirdkey(thirdKey){
  if (thirdKey < 10)
  {
    thirdKey =" ";
  }
  else
  {
    thirdKey = thirdKey + ":";
  }
  return thirdKey
}

</script>