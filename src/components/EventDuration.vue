<template>
  <span>{{ duration }}</span>
</template>

<script setup>
import { computed } from 'vue'
import { getEventDuration } from '@/utils/formatters'

const props = defineProps({
  start: {
    type: [String, Date],
    required: true
  },
  end: {
    type: [String, Date],
    required: true
  }
})

const duration = computed(() => getEventDuration(props.start, props.end))
</script>
