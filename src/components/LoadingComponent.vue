<template>
  <div v-if="loading" class="loading-container">
    <div class="spinner"></div>
    <span class="loading-text">Loading {{ text }}...</span>
  </div>

  <div v-else-if="allLoaded" class="loading-container success">
    <span class="checkmark">&#10003;</span>
    <span class="loading-text">All {{ text }} loaded</span>
  </div>
</template>

<script>
export default {
  name: "LoadingComponent",
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    allLoaded: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      default: "items"
    }
  }
};
</script>

<style scoped>
.loading-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 20px 0;
  font-size: 16px;
  font-weight: 600;
  color: #444;
}

.spinner {
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 22px;
  height: 22px;
  animation: spin 1s linear infinite;
}

.checkmark {
  font-size: 22px;
  color: green;
  font-weight: bold;
}

.loading-text {
  font-size: 15px;
  color: #333;
}

.success .loading-text {
  color: green;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
