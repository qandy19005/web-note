<script setup lang="ts">
import { ref } from "vue"
const open = ref(false)
</script>

<template>
  <div class="collapse-container">
    <div class="collapse-switch mb-2" @click="open = !open">
      <slot name="title" :open="open" />
    </div>
    <transition name="fade">
      <div v-show="open" class="collapse-content">
        <slot name="content" />
      </div>
    </transition>
  </div>
</template>
<style scoped>
.collapse-container {
  width: 100%;
}
.collapse-switch {
  width: 100%;
  cursor: pointer;
}
.collapse-content {
  width: 100%;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>
