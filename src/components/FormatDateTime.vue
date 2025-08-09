<template>
  <span>{{ formattedDate }}</span>
</template>

<script setup>
import { computed } from 'vue'
import { formatDateTime } from '@/utils/formatters' // Import your formatter

const props = defineProps({
  datetime: {
    type: [String, Date],
    required: true,
  }
})

const formattedDate = computed(() => formatDateTime(props.datetime))
</script>
