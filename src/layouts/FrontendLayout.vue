<template>
  <div class="layout">
    <NavBar v-if="showLayout" />

    <main class="border-top border-primary border-3">
      <router-view class="main-content" />
    </main>

    <Footer v-if="showLayout" />
  </div>
</template>

<script setup>

import { onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import NavBar from '@/views/NavBar.vue'
import Footer from '@/views/Footer.vue'
import { loadScript, loadStyle } from '@/utils/loadExternal'

const route = useRoute()

const showLayout = computed(() => {
  const hideOnRoutes = [
    '/login',
    '/registration',
    '/member-dashboard',
    '/member-event-bookings',
    '/admin-dashboard',
    '/admin-dashboard/bookings'
  ]
  return !hideOnRoutes.includes(route.path)
})








onMounted(async () => {
  // Load Google Fonts (note: better in index.html for performance)
  const fontUrls = [
    'https://fonts.googleapis.com/css?family=Open+Sans:400,700',
    'https://fonts.googleapis.com/css?family=Belgrano',
    'https://fonts.googleapis.com/css?family=Dosis',
    'https://fonts.googleapis.com/css?family=Roboto',
  ]
  fontUrls.forEach(loadStyle)

  // External CSS files (from public directory)
  const cssFiles = [
    '../../public/frontend/css/bootstrap.css',
    '../../public/frontend/css/style.css',
    '../../public/frontend/css/font-awesome.css',
    '../../public/frontend/css/owl.carousel.css',
     '../../public/frontend/css/flexslider.css',
     '../../public/frontend/css/fancySelect.css',
     '../../public/frontend/css/responsive.css',
  ]
  cssFiles.forEach(loadStyle)

   // ✅ STEP 1: Load jQuery first and wait
  //  await loadScript('../../public/frontend/js/jquery-2.1.0.min.js')

// ✅ STEP 2: Make jQuery global (in case)
window.$ = window.jQuery = window.jQuery || window.$

  // External JS files
  const jsFiles = [
    'https://maps.googleapis.com/maps/api/js?sensor=false',
    '../../public/frontend/js/jquery.min.js',
    '../../public/frontend/js/jquery.flexslider.js',
    '../../public/frontend/js/bootstrap.min.js',
    '../../public/frontend/js/jquery.scrollTo.js',
    '../../public/frontend/js/jquery.nav.js',

    '../../public/frontend/js/jquery.accordion.js',
    '../../public/frontend/js/jquery.placeholder.js',
    '../../public/frontend/js/jquery.fitvids.js',
    '../../public/frontend/js/gmap3.js',
    '../../public/frontend/js/fancySelect.js',
    '../../public/frontend/js/owl.carousel.min.js',
    '../../public/frontend/js/main.js',
  ]

  for (const src of jsFiles) {
    await loadScript(src)
  }


  // Ensure jQuery is global if needed
  window.$ = window.jQuery = window.jQuery || window.$
})




</script>
