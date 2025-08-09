

<template>
  <label
    :for="htmlFor"
    :class="['smart-label', customClass]"
    :style="customStyle"
  >
    <slot>{{ text }}</slot>
  </label>
</template>

<script setup>
defineProps({
  htmlFor: {
    type: String,
    default: '',
  },
  text: {
    type: String,
    default: '',
  },
  customClass: {
    type: [String, Array, Object],
    default: '',
  },
  customStyle: {
    type: [String, Object],
    default: '',
  },
});
</script>

<style scoped>
.smart-label {
  display: inline-block;
  font-weight: 600;
  margin-bottom: 4px;
  color: var(--label-color, #333);
  font-size: 14px;
  font-weight: 800;
  text-transform: uppercase;
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>
"
