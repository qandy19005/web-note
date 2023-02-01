<script setup lang="ts">
import { ref } from "vue"
interface NavList {
  label: string
}
const emit = defineEmits<{
  (e: "getCurrentNav", item: NavList["label"]): void
}>()
// navlist form props
const navList: NavList[] = [{ label: "Current Bundle" }, { label: "Bike Model Spec" }]
const currentLabel = ref<NavList["label"]>("")
const clickNav = (item: NavList["label"]) => {
  currentLabel.value = item
  emit("getCurrentNav", item)
}
</script>

<template>
  <div class="nav-bar-box">
    <div
      v-for="item in navList"
      :key="item.label"
      class="nav-bar-button"
      :class="{ active: currentLabel === item.label }"
      @click="clickNav(item.label)">
      {{ item.label }}
    </div>
  </div>
</template>

<style scoped>
.nav-bar-box {
  display: flex;
  justify-content: center;
}
.nav-bar-button {
  font-weight: 600;
  margin: 0 10px;
  letter-spacing: -0.5px;
  font-size: 0.8rem;
  color: black;
  text-decoration: none;
  position: relative;
  transition: 0.5s;
  cursor: pointer;
}
.nav-bar-button::before,
.nav-bar-button::after {
  content: "";
  position: absolute;
  transition: 0.3s;
}
.nav-bar-button::before {
  left: 0;
  bottom: -10px;
  width: 100%;
  height: 2px;
  background: #2066a6;
  transform: scale(0);
}
.nav-bar-button:hover::before {
  transform: scaleX(1);
}
.active {
  color: #2066a6;
}
.active::after {
  content: "";
  left: 0;
  bottom: -10px;
  width: 100%;
  height: 2px;
  background: #2066a6;
}
</style>
