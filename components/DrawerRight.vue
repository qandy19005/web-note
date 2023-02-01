<script setup lang="ts">
import { watch, ref } from "vue"
import { Icon, Icons } from "hyena-design-system"

const props = defineProps<{
  id: number | null
  title: string | null
}>()

const emit = defineEmits<{
  (e: "closeDrawer"): void
}>()

const drawerActve = ref(false)
const firstLoad = ref(true)
const currentTitle = ref()

const closeDrawer = () => {
  drawerActve.value = false
  emit("closeDrawer")
}

const timeout = (ms: number) => {
  return new Promise(resolve => setTimeout(resolve, ms))
}

watch(
  () => props.id,
  async (newId, oldId) => {
    firstLoad.value = oldId === undefined
    drawerActve.value = false
    if (newId) {
      await timeout(500)
      drawerActve.value = true
      currentTitle.value = props.title
    }
  },
  {
    immediate: true,
    deep: true,
  }
)
</script>

<template>
  <div
    class="drawer-right-box"
    :class="[drawerActve ? 'active' : 'close', { 'active-component': !firstLoad }]">
    <div class="drawer-right-header flex">
      <div class="header-title">{{ currentTitle }}</div>
      <div class="close-icon" @click="closeDrawer()"><Icon :icon="Icons.CLOSE" /></div>
    </div>
    <slot v-if="drawerActve" name="body" />
  </div>
</template>

<style scoped>
.drawer-right-box {
  height: 100vh;
  background: #ffffff;
  min-width: 450px;
  position: absolute;
  overflow: auto;
  right: -450px;
  top: 0;
  z-index: 1091;
  box-shadow: 0px 0 10px rgba(0, 0, 0, 0.5);
  opacity: 0;
}
.active-component {
  opacity: 1;
}
.drawer-right-header {
  border-bottom: 1px solid #dbe5de;
  justify-content: space-between;
  padding: 24px;
  font-weight: 700;
  align-items: center;
}
.header-title {
  font-size: 1.2rem;
}
.close-icon {
  font-size: 1.7rem;
  transition: 0.2s all ease;
  cursor: pointer;
}
.close-icon:hover {
  color: #7f7f7f;
  transition: 0.2s all ease;
}
.active {
  animation: 0.6s sliderOpen ease;
  right: 0;
}
.close {
  animation: 0.4s sliderClose ease;
  right: -450px;
}
@keyframes sliderOpen {
  0% {
    right: -450px;
  }
  100% {
    right: 0;
  }
}
@keyframes sliderClose {
  0% {
    right: 0;
  }
  100% {
    right: -450px;
  }
}
</style>
