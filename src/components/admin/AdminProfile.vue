<template>
    <div class="container">
    <ul v-if="loggeduser" class="card">
      <li><strong>Name:</strong> {{ loggeduser.name }}</li>
      <li><strong>Email:</strong> {{ loggeduser.email }}</li>
      <li>
        <strong>Profile Image:</strong>
        <img
          v-if="loggeduser && loggeduser.profile_image"
          :src="`${apiUrl}/pulic/storage/${loggeduser.profile_image}`"
          alt="Profile"
        />
      </li>
    </ul>


  <DynamicList class="card"
    api-url="https://event-api.appwebd.com/api/events"
    title="Event"
    link="/admin-dashboard/events"



  />


  <!-- http://localhost:8000/api/events -->
  <DynamicList class="card"
    api-url="https://event-api.appwebd.com/api/users"
    title="User"
    link="/admin-dashboard"

  />





                <DynamicList class="card"
                  api-url="https://event-api.appwebd.com/api/bookings"
                  title="bookings"
                  link="/admin-dashboard/member-event-bookings"

                />

   </div>
  </template>

  <script setup>
          import { ref, onMounted } from 'vue';
import DynamicList from '../DynamicList.vue';
          // import api from '@/api/axios';

          const loggeduser = ref(null)

           const apiUrl = 'https://event-api.appwebd.com/api/'
          onMounted(async () => {
              // const test = 'users';
              // const events = await api.get(`/${test}`);
              // console.log(events.data);
              const user = localStorage.getItem('user')
              loggeduser.value = JSON.parse(user)
          });

      </script>

      <style scoped>
/* Container */
.container {
  max-width: 960px;
  margin: 50px auto;
  display: flex;
  gap: 30px;
}

.card{
  padding: 20px;
  text-align: center;
}

.card li{
  list-style: none;
}


/* Responsive Rules */
@media (max-width: 768px) {
  .container {
    padding: 0.5rem;
  }

  .profile li {
    font-size: 0.9rem;
  }

  .profile img {
    max-width: 90px;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0.5rem;
  }

  .profile {
    text-align: center;
  }

  .profile img {
    max-width: 70px;
  }
}
</style>




