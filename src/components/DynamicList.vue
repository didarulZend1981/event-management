<template>
  <div>
    <h2>{{ title }}</h2>
    <p v-if="loading">Loading...</p>
    <!-- <ul v-else>

      {{ items.data.length }}
        {{ items.length }}


    </ul> -->




  <ul v-if="items && items.data && items.data.length">
  {{items.data.length}}
</ul>

<ul v-else>
  <li>{{items.length}}</li>
</ul>


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














