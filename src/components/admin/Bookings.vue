<template>
  <div class="container mt-5">
      <div class="row justify-content-center">
          <div class="col-md-12">
              <div class="card">
                  <div class="card-header">member Bookings</div>
                  <div class="card-body">










                      <input
                      type="text"
                      v-model="search"
                      placeholder="Search events..."
                      class="form-control mb-3"
                    />


                      <EasyDataTable
              :headers="headers"
              :items="bookings"
              :rows-per-page="5"
              :search-value="search"
              table-class-name="table table-striped"
              header-text-direction="center"
            >


            <template #item-action="{ id }">
                <router-link :to="`/admin-dashboard/booking/update/${id}`">Edit</router-link>
              </template>
            </EasyDataTable>

                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script setup>

import api from '@/api/axios';
import { onMounted, ref } from 'vue';

import EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';


const bookings = ref([])
const loggeduser = ref([])
const search = ref('');


const headers = [
  { text: '#', value: 'index' },
  { text: 'Title', value: 'event.title' },
  { text: 'start_time', value: 'event.start_time' },
  { text: 'end_time', value: 'event.end_time' },
  { text: 'Name', value: 'user.name' },
  { text: 'price', value: 'event.ticket_price' },
  { text: 'QTy', value: 'ticket_qty' },
  { text: 'Total price', value: 'total_price' },
  { text: 'status', value: 'status' },
  { text: 'Action', value: 'action' },

];












onMounted(async () => {

  const user = localStorage.getItem('user')
  loggeduser.value = JSON.parse(user)

  try {
      const response = await api.get(`bookings`);
      // if (response.status) {
      //     bookings.value = response.data.data;
      // }


      if (response.status) {

          bookings.value = response.data.data.map((item, i) => ({
          ...item,
          index: i + 1

          }));
      }

  } catch (error) {
      console.log(error);
  }
});

</script>
