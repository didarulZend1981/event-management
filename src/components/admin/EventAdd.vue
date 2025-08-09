<template>
  <div class="container my-5">
    <div class="row justify-content-center">
      <div class="col-12 col-md-11 col-lg-10">
        <div class="card shadow border-0">
          <div class="card-header bg-primary text-white h5">
            Event Registration
          </div>

          <div class="card-body p-4">
            <form @submit.prevent="eventAdd">


              <!-- venue -->
              <div class="mb-3">

                  <CommonLabel >
                    Event venue
                  </CommonLabel>


                <CommonInput :customStyle="{  fontSize: '15px'}"
                                v-model="form.venue_name"
                                type="text"
                                id="venue_name"
                                class="form-control"
                                placeholder="Enter event venue"


                                />
                <small v-if="errors.venue_name" class="text-danger">{{ errors.venue_name[0] }}</small>
              </div>

              <!-- Title -->
              <div class="mb-3">

                  <CommonLabel >
                    Event Title
                  </CommonLabel>


                <CommonInput :customStyle="{  fontSize: '15px'}"
                                v-model="form.title"
                                type="text"
                                id="title"
                                class="form-control"
                                placeholder="Enter event title"


                                />
                <small v-if="errors.title" class="text-danger">{{ errors.title[0] }}</small>
              </div>

              <!-- Description -->
              <div class="mb-4">

                <CommonLabel for="descriptions" class="form-label">Event Description</CommonLabel>

                <QuillEditor
                  v-model:content="form.descriptions"
                  :options="editorOptions"
                  content-type="html"
                  class="bg-white border rounded"
                  style="min-height: 160px;"
                />
              </div>

              <!-- Dates: Responsive Row -->
              <div class="row g-3 mb-4">
                <div class="col-12 col-md-6">

                  <CommonLabel>Start Date</CommonLabel>


                  <CommonInput :customStyle="{  fontSize: '15px'}"
                  type="date"
                    id="start_time"
                    class="form-control"
                    v-model="form.start_time"


                                />

                  <small v-if="errors.start_time" class="text-danger">{{ errors.start_time[0] }}</small>
                </div>
                <div class="col-12 col-md-6">
                  <!-- <label for="end_time" class="form-label">End Date</label> -->
                  <CommonLabel>End Date</CommonLabel>


                  <CommonInput :customStyle="{  fontSize: '15px'}"
                  type="date"
                    id="end_time"
                    class="form-control"
                    v-model="form.end_time"


                                />



                  <small v-if="errors.end_time" class="text-danger">{{ errors.end_time[0] }}</small>
                </div>
              </div>

              <!-- Image + Ticket: Responsive Row -->
              <div class="row g-3 mb-4 align-items-end">
                <div class="col-12 col-md-6">


                  <CommonLabel>Event Image</CommonLabel>


                  <CommonInput :customStyle="{  fontSize: '15px'}"
                  type="file"
                    id="event_image"
                    class="form-control"
                    @change="profileImageHandle"


                                />
                  <!-- <div v-if="form.event_image" class="mt-2">
                    <img
                      :src="URL.createObjectURL(form.event_image)"
                      alt="Preview"
                      class="img-fluid rounded border"
                      style="max-height: 150px;"
                    />
                  </div> -->

                  <div v-if="event_image_preview" class="mt-2">
  <img
    :src="event_image_preview"
    alt="Preview"
    class="img-fluid rounded border"
    style="max-height: 150px;"
  />
</div>






                </div>

                <div class="col-12 col-md-6">


                  <CommonLabel>Ticket Price ($)</CommonLabel>

                  <CommonInput :customStyle="{  fontSize: '15px'}"
                  type="number"
                    id="ticket_price"
                    class="form-control"
                    v-model="form.ticket_price"
                    placeholder="e.g. 25"


                                />
                  <small v-if="errors.ticket_price" class="text-danger">{{ errors.ticket_price[0] }}</small>
                </div>
              </div>

              <!-- Submit Button -->
              <div class="d-grid d-md-flex justify-content-md-end">


                <div class="d-grid d-md-flex justify-content-md-end">
                <button type="submit" class="btn btn-success px-5">Create Event</button>
              </div>

              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref } from 'vue';
import api from '@/api/axios';
import { useRouter } from 'vue-router';
import { useToast } from 'vue-toast-notification';

import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'
import CommonLabel from '../CommonLabel.vue';
import CommonInput from '../CommonInput.vue';
import Button from '../Button.vue';

// const QuillEditor = QuillEditor();

const form = ref({
  venue_name: '',
  title: '',
  ticket_price: '',
  descriptions: '',
  start_time: '',
  end_time: '',
  event_image: ''
});

const router = useRouter();
const toast = useToast();
const errors = ref({});
const event_image_preview = ref('');

const editorOptions = ref({
 theme: 'snow',
  modules: {
    toolbar: [
      [{ header: '1' }, { header: '2' }, { font: [] }],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ script: 'sub' }, { script: 'super' }],
      [{ align: [] }],
      ['bold', 'italic', 'underline'],
      ['link'],
        ['blockquote', 'code-block']
    ]
  }
});




// const profileImageHandle = (event) => {
//   form.value.event_image = event.target.files[0];
// }


const profileImageHandle = (event) => {
  const file = event.target.files[0];
  if (file) {
    form.value.event_image = file;
    event_image_preview.value = URL.createObjectURL(file);
  }
};





const eventAdd = async () => {
  const formData = new FormData();

  // Append form data
  formData.append('venue_name', form.value.venue_name);
  formData.append('title', form.value.title);
  formData.append('ticket_price', form.value.ticket_price);
  formData.append('descriptions', form.value.descriptions);
  formData.append('start_time', form.value.start_time);
  formData.append('end_time', form.value.end_time);

  // Append the image if it exists
  if (form.value.event_image) {
    formData.append('event_image', form.value.event_image);
  }

  try {
    const response = await api.post('/event-add', formData, {
      headers: {
        'Content-Type': 'multipart/form-data', // Make sure to set the correct content type
      },
    });

    console.log('Event added:', response.data);
    toast.success(response.data.message, {
      position: 'top-right',
    });

    // Redirect to events page after success
    setTimeout(() => {
      router.push('/admin-dashboard/events');
    }, 200);
  } catch (error) {
    console.error('Event add failed:', error);
    toast.error('Event creation failed. Please try again.', {
      position: 'top-right',
    });
  }
};


</script>




