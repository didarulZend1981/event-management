<template>
  <div>
    <router-link class="nav-link" :to="link">
            <h2>{{ title }}</h2>
            <p v-if="loading">Loading...</p>





          <ul v-if="items && items.data && items.data.length">
          {{items.data.length}}
        </ul>

        <ul v-else>
          {{items.length}}
        </ul>
        </router-link>

  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'

import api from '@/api/axios';

// Props
const props = defineProps({
  apiUrl: String,
  title: {
    type: String,
    default: 'Items'
  },
  link: {
    type: String,
    default: '/' // fallback
  }
})

// State
const items = ref([])
const loading = ref(true)

// Fetch Data
const fetchData = async () => {
  loading.value = true
  try {
    const response = await api.get(props.apiUrl)
    console.log(response);
    items.value = response.data
  } catch (err) {
    console.error('Error:', err)
  } finally {
    loading.value = false
  }
}

onMounted(fetchData)
watch(() => props.apiUrl, fetchData)
</script>














