<template>

  <ul v-if="loggeduser">
      <li>Name: {{ loggeduser.name }}</li>
      <li>Email: {{ loggeduser.email }}</li>
      <li>Profile Image:
          <img
          v-if="loggeduser && loggeduser.profile_image"
          :src="`${apiUrl}/pulic/${loggeduser.profile_image}`"
          alt=""/>
      </li>
  </ul>
  <DynamicList
    api-url="https://event-api.appwebd.com/api/events" title="Event"


  />


  <!-- http://localhost:8000/api/events -->
  <DynamicList
    api-url="https://event-api.appwebd.com/api/users" title="User"

  />

  <DynamicList
    api-url="https://event-api.appwebd.com/api/bookings" title="bookings"

  />
  </template>

  <script setup>
          import { ref, onMounted } from 'vue';
import DynamicList from '../DynamicList.vue';
          // import api from '@/api/axios';

          const loggeduser = ref(null)
          //  const apiUrl = 'https://event.unephmart.com/'
          // const apiUrl = 'http://localhost:5173/'
           const apiUrl = 'https://event-api.appwebd.com/api/'
          onMounted(async () => {
              // const test = 'users';
              // const events = await api.get(`/${test}`);
              // console.log(events.data);
              const user = localStorage.getItem('user')
              loggeduser.value = JSON.parse(user)
          });

      </script>




