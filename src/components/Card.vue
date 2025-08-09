<template>
  <div
    class="smart-card"
    role="region"
    :class="[customClass]"
    :style="customStyle"
  >
    <div v-if="$slots.header || title" class="smart-card-header">
      <slot name="header">
        <h3 class="smart-card-title">{{ title }}</h3>
      </slot>
    </div>

    <div class="smart-card-body">
      <slot />
    </div>

    <div v-if="$slots.footer" class="smart-card-footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
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
.smart-card {
  background-color: var(--card-bg, #ffffff);
  border: 1px solid var(--card-border, #e0e0e0);
  border-radius: 0.5rem;
  box-shadow: var(--card-shadow, 0 2px 8px rgba(0, 0, 0, 0.05));
  padding: 1.5rem;
  transition: box-shadow 0.2s ease;
}

.smart-card:hover {
  box-shadow: var(--card-shadow-hover, 0 4px 12px rgba(0, 0, 0, 0.1));
}

.smart-card-header {
  margin-bottom: 1rem;
  font-weight: 600;
  font-size: 1.25rem;
  color: var(--card-title-color, #222);
  border-bottom: 1px solid var(--card-header-border, #eaeaea);
  padding-bottom: 0.5rem;
}

.smart-card-body {
  font-size: 1rem;
  color: var(--card-text-color, #333);
}

.smart-card-footer {
  margin-top: 1rem;
  border-top: 1px solid var(--card-footer-border, #eee);
  padding-top: 0.75rem;
  text-align: right;
}
</style>
