<template>
  <div class="container mt-5">
      <div class="row justify-content-center">
          <div class="col-md-12">
              <div class="card">
                  <div class="card-header">Events  <router-link to="/admin-dashboard/events/add">Event ADD
                  </router-link></div>
                  <div class="card-body">

                      <input
                      type="text"
                      v-model="search"
                      placeholder="Search events..."
                      class="form-control mb-3"
                    />


                      <EasyDataTable
              :headers="headers"
              :items="events"
              :rows-per-page="5"
              :search-value="search"
              table-class-name="table table-striped"
              header-text-direction="center"
            >



              <template #item-action="{ id }">
                <router-link :to="`/admin-dashboard/event/edit/${id}`">Edit</router-link>
                <button class="btn btn-danger btn-sm" @click="DeleteClick(id)">Del</button>
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
import { useToast } from 'vue-toast-notification';
// import router from '@/routes';


import EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';

const events = ref([])
const toast = useToast()


const search = ref('');

const headers = [
  { text: '#', value: 'index' },
  { text: 'Title', value: 'title' },
  { text: 'Descriptions', value: 'descriptions' },
  { text: 'Start Date', value: 'start_time' },
  { text: 'End Date', value: 'end_time' },
  { text: 'Ticket Price', value: 'ticket_price' },
  { text: 'Action', value: 'action' }
];












onMounted(async () => {
  try {
    const response = await api.get('/events');
    if (response.status) {
      // Add index to each item
      events.value = response.data.data.map((item, i) => ({
        ...item,
        index: i + 1
      }));
    }
  } catch (error) {
    console.log(error);
    toast.error('Failed to load events');
  }
});


const DeleteClick = async (id) => {
  const confirmDelete = confirm("Do you want to delete?");
  if (confirmDelete) {
    try {
      const response = await api.delete(`/event-delete/${id}`);
      toast.success(response.data.message || 'Deleted successfully');
       events.value = events.value.filter(event => event.id !== id);

    } catch (error) {
      toast.error('Delete failed');
      console.error(error);
    }
  } else {
    toast.info('Delete canceled');
  }
};

</script>






