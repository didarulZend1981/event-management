<template>

  <div id="menu" class="header-menu fixed ">
				<div class="box">
					<div class="row">
						<nav role="navigation" class="col-sm-12">
							<div class="navbar-header">
								<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse">
									<span class="sr-only">Toggle navigation</span>
									<span class="icon-bar"></span>
									<span class="icon-bar"></span>
									<span class="icon-bar"></span>
								</button>

								<!--== Logo ==-->


                <router-link to="/" class="d-flex align-items-center link-body-emphasis text-decoration-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="32" class="me-2" viewBox="0 0 118 94"
                    role="img">
                    <title>Events</title>

                </svg>
                <span class="navbar-brand logo">
									Evento
								</span>
              </router-link>

							</div>
							<div class="navbar-collapse collapse">

								<!--== Navigation Menu ==-->
								<ul class="nav navbar-nav">



                    <li><router-link class="me-3 py-2 link-body-emphasis text-decoration-none" to="/">Home</router-link></li>
                    <li><router-link class="me-3 py-2 link-body-emphasis text-decoration-none" to="/contact">Contact</router-link></li>
                    <li><router-link class="me-3 py-2 link-body-emphasis text-decoration-none" to="/about">About</router-link></li>

                <template v-if="!userLoggedIn">
                  <li><router-link class="me-3 py-2 link-body-emphasis text-decoration-none" to="/login">Login</router-link></li>
                  <li><router-link class="me-3 py-2 link-body-emphasis text-decoration-none" to="/registration">registration</router-link></li>
                </template>

                <template v-else>

                  <li>

                    <router-link v-if="userRole == 'admin'"
                    class="me-3 py-2 link-body-emphasis text-decoration-none" @click.prevent="goToAdmin" to="/admin-dashboard">Admin dashboard
                  </router-link>


                </li>
                <li>
                  <router-link v-if="userRole == 'user'"
                    class="me-3 py-2 link-body-emphasis text-decoration-none" @click.prevent="goToMember" to="/member-dashboard">Member dashboard
                  </router-link></li>



                  <li><button class="me-3 py-2 link-body-emphasis text-decoration-none btn btn-danger" @click="logout">Logout</button></li>
                </template>


								</ul>
							</div>
						</nav>
					</div>
				</div>
</div>





</template>

<script setup>



import { useRouter } from 'vue-router';
import { computed } from 'vue';

const router = useRouter();


const userLoggedIn = computed(() => {
    return localStorage.getItem('apiToken') ? true : false;
})

const userRole = computed(() => {
    const userData = JSON.parse(localStorage.getItem('user'))
    return userData.role == 'admin' ? 'admin' : 'user'
})

const logout = () => {
    localStorage.removeItem('apiToken');
    localStorage.removeItem('user');
    router.push('/').then(() => {
        // return window.location.reload();
        window.location.reload();
    })
}

function goToAdmin() {
  window.location.href = '/admin-dashboard';
}
function goToMember() {
  window.location.href = '/member-dashboard';
}
</script>

<style scoped>
  #menu{
    border: 2px solid red;
    height:105px;
  }
</style>


