<script setup lang="ts">
import { ref } from "vue"
const content = ref("tooltip click content")
const contentVisible = ref(false)
const toggleTooltip = () => {
  contentVisible.value = !contentVisible.value
}
</script>
<template>
  <div class="arrowpopup" @click="toggleTooltip()">
    <slot />
    <span v-show="contentVisible" class="tooltiptext">{{ content }}</span>
  </div>
</template>

<style scoped>
.arrowpopup {
  position: relative;
  display: inline-block;
  cursor: pointer;
}
.arrowpopup .tooltiptext {
  visibility: visible;
  background-color: #856;
  color: white;
  text-align: center;
  border-radius: 4px;
  padding: 9px;
  position: absolute;
  bottom: 150%;
  left: 50%;
  margin-left: -85px;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);
}
.arrowpopup .tooltiptext::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #856 transparent transparent transparent;
}
</style>
