<template>

  <div id="layoutSidenav_nav">
                  <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                      <div class="sb-sidenav-menu">

                        <div v-if="userRole == 'user'" class="nav">
                              <div class="sb-sidenav-menu-heading">Core</div>
                              <router-link class="nav-link" to="/member-dashboard">
                                  <div class="sb-nav-link-icon"><i class="fas fa-tachometer-alt"></i></div>
                                  Dashboard
                              </router-link>

                              <router-link class="nav-link" to="/admin-dashboard/member-event-bookings">
                                  <div class="sb-nav-link-icon"><i class="fas fa-ticket-alt"></i></div>
                                  Event Booking
                              </router-link>






                          </div>



                          <div  v-if="userRole == 'admin'" class="nav">
                              <div class="sb-sidenav-menu-heading">Core</div>
                              <router-link class="nav-link" to="/admin-dashboard">
                                  <div class="sb-nav-link-icon"><i class="fas fa-tachometer-alt"></i></div>
                                  Dashboard
                              </router-link>



                              <router-link class="nav-link" to="/admin-dashboard/events/add">
                                  <div class="sb-nav-link-icon"><i class="fas fa-plus"></i></div>
                                  ADD
                              </router-link>

                              <router-link class="nav-link" to="/admin-dashboard/events">
                                  <div class="sb-nav-link-icon"><i class="fas fa-calendar"></i></div>
                                  events
                              </router-link>

                              <router-link class="nav-link" to="/admin-dashboard/member-event-bookings">
                                  <div class="sb-nav-link-icon"><i class="fas fa-ticket-alt"></i></div>
                                  Event Booking
                              </router-link>
                              <router-link class="nav-link" to="/admin-dashboard/bookings">
                                  <div class="sb-nav-link-icon"><i class="fas fa-clipboard-list"></i></div>
                                  All BooKing
                              </router-link>



                          </div>
                      </div>





                      <div class="sb-sidenav-footer">
                          <div class="small">Logged:</div>


                              <span v-if="userRole == 'admin'"
                                class="me-3 py-2 link-body-emphasis text-decoration-none">Admin dashboard
                              </span>

                            <span v-if="userRole == 'user'"
                                class="me-3 py-2 link-body-emphasis text-decoration-none" >Member dashboard
                              </span>
                      </div>
                  </nav>
              </div>

  </template>
<script setup>




import { computed } from 'vue';



const userRole = computed(() => {
    const userData = JSON.parse(localStorage.getItem('user'))
    return userData.role == 'admin' ? 'admin' : 'user'
})




</script>


