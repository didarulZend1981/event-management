<template>
  <button
    class="btn medium contactButton"
    :class="customClass"
    :style="customStyle"
    @click="handleClick"
  >
    {{ label }}
  </button>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    default: 'Contact Us',
  },
  customClass: {
    type: [String, Object, Array],
    default: '',
  },
  customStyle: {
    type: Object,
    default: () => ({}),
  },
  onClick: {
    type: Function,
    default: null,
  },
});

function handleClick(event) {
  if (onClick) onClick(event);
}
</script>

<style scoped>
button.btn.medium.contactButton {
  position: relative;
  margin-top: 75px;
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
