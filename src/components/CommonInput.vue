<template>
  <input
    v-bind="inputAttrs"
    v-model="modelValueProxy"
    :class="['common-input', customClass, {
      'is-valid': isValid,
      'is-invalid': isInvalid,
      'is-disabled': inputAttrs.disabled
    }]"
    :style="customStyle"
    :aria-invalid="isInvalid ? 'true' : 'false'"
    :aria-required="required ? 'true' : 'false'"
    
  />
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  modelValue: [String, Number],
  type: {
    type: String,
    default: 'text',
  },
  id: String,
  name: String,
  placeholder: String,
  required: Boolean,
  min: [Number, String],
  max: [Number, String],
  step: [Number, String],
  disabled: Boolean,

  // Control Props
  isValid: Boolean,
  isInvalid: Boolean,
  customClass: {
    type: [String, Array, Object],
    default: '',
  },
  customStyle: {
    type: [String, Object],
    default: '',
  },
});

const emit = defineEmits(['update:modelValue']);

const modelValueProxy = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val),
});

const inputAttrs = computed(() => ({
  type: props.type,
  id: props.id,
  name: props.name,
  placeholder: props.placeholder,
  required: props.required,
  min: props.min,
  max: props.max,
  step: props.step,
  disabled: props.disabled,
}));
</script>

<style scoped>
.common-input {
  display: block;
  width: 100%;
  padding: 0.5rem 0.75rem;
  font-size: 2rem;
  text-align: center;
  font-weight: 800;
  color: var(--input-text-color, #212529);
  background-color: var(--input-bg, #fff);
  border: 1px solid var(--input-border, #ced4da);
  border-radius: 0.5rem;
  transition: border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}

.common-input:focus {
  border-color: var(--input-focus-border, #86b7fe);
  box-shadow: 0 0 0 0.2rem var(--input-focus-shadow, rgba(13, 110, 253, 0.25));
  outline: none;
}

.common-input:hover:not(:disabled) {
  border-color: var(--input-hover-border, #999);
}

.common-input:disabled,
.common-input.is-disabled {
  background-color: var(--input-disabled-bg, #f8f9fa);
  cursor: not-allowed;
  opacity: 0.65;
}

.common-input.is-valid {
  border-color: var(--input-valid-border, #198754);
  background-color: var(--input-valid-bg, #d1e7dd);
}

.common-input.is-invalid {
  border-color: var(--input-invalid-border, #dc3545);
  background-color: var(--input-invalid-bg, #f8d7da);
}
</style>
