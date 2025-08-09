<template>
  <h2 :class="['block_title', customClass]" :style="customStyle">
    <slot />
  </h2>
</template>

<script setup>
defineProps({
  customClass: {
    type: String,
    default: ''
  },
  customStyle: {
    type: Object,
    default: () => ({})
  }
});
</script>

<style scoped>
.block_title {
  font-size: 60px;
  color: black;
  text-shadow:
    2px 2px 0 black,
    4px 4px 8px black,
    6px 6px 0 black;
  margin-bottom: 40px;
}
</style>
