<template>
  <button
    :class="['btn', customClass, sizeClass]"
    @click="handleClick"
    v-if="show"
  >
    {{ label }}
  </button>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  label: { type: String, required: true },
  show: { type: Boolean, default: true },       // v-if equivalent
  sizeClass: { type: String, default: 'btn-success px-5' },
  customClass: { type: String, default: '' }   // extra class
})

const emits = defineEmits(['click'])

const handleClick = (e) => {
  emits('click', e)
}
</script>

<style scoped>
button.btn.medium.contactButton {
  position: relative;
  /* margin-top: 75px; */
  padding: 14px 32px;
  border: 2px solid #ff2e63;
  border-radius: 50px;
  background-color: transparent;
  color: white;
  font-size: 18px;
  font-weight: 600;
  text-shadow: 1px 1px #000;
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  box-shadow: 0 0 15px rgba(255, 46, 99, 0.4);
  text-align: center;
}

button.btn.medium.contactButton:hover {
  background-color: #ff2e63;
  color: #fff;
  text-shadow: none;
  box-shadow: 0 0 25px rgba(255, 46, 99, 0.8);
  transform: scale(1.05);
}

button.btn.medium.contactButton::after {
  content: "";
  position: absolute;
  top: -15px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-bottom: 15px solid #ff2e63;
  z-index: 2;
}
</style>
