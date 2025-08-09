<template>
  <body class="sb-nav-fixed">
      <NavBar/>
      <div id="layoutSidenav">

          <SideBar/>
          <div id="layoutSidenav_content">
              <main>

                  <router-view />


              </main>
              <Footer/>
          </div>
      </div>

  </body>
</template>

<script setup>

 import '../../public/backend/js/scripts'



import { onMounted } from 'vue'
import { loadStyle, loadScript } from '../utils/loadExternal'
import NavBar from '@/components/admin/NavBar.vue'
import SideBar from '@/components/admin/SideBar.vue'
import Footer from '@/components/admin/Footer.vue'




onMounted(async () => {
  // // CSS
  //  await loadStyle('../../public/backend/css/styles.css')
  //  await loadStyle('https://cdn.jsdelivr.net/npm/simple-datatables@7.1.2/dist/style.min.css')

  // // JS
  //    await loadScript('https://use.fontawesome.com/releases/v6.3.0/js/all.js')
  //    await loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js')
  // await loadScript('https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.min.js')
  // await loadScript('https://cdn.jsdelivr.net/npm/simple-datatables@7.1.2/dist/umd/simple-datatables.min.js')



  //  await loadScript('../../public/backend/assets/demo/chart-area-demo.js')
  //  await loadScript('../../public/backend/assets/demo/chart-bar-demo.js')
  //  await loadScript('../../public/backend/js/datatables-simple-demo.js')

// ✅ CSS (use public path instead of relative)
  await loadStyle('/public/backend/css/styles.css')
  await loadStyle('https://cdn.jsdelivr.net/npm/simple-datatables@7.1.2/dist/style.min.css')

  // ✅ JS
  await loadScript('https://use.fontawesome.com/releases/v6.3.0/js/all.js')
  await loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js')
  await loadScript('https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.min.js')
  await loadScript('https://cdn.jsdelivr.net/npm/simple-datatables@7.1.2/dist/umd/simple-datatables.min.js')

  await loadScript('/backend/assets/demo/chart-area-demo.js')
  await loadScript('/backend/assets/demo/chart-bar-demo.js')
  await loadScript('/backend/js/datatables-simple-demo.js')

})

</script>

