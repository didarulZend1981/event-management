<template>
  <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-12 col-md-11 col-lg-10">
          <div class="card shadow border-0">
            <div class="card-header bg-primary text-white h5">Event update</div>
            <div class="card-body p-4">

                      <form v-if="event" @submit.prevent="updateEvent">


                        <div class="mb-3">

                              <CommonLabel>venue</CommonLabel>
                              <!-- <input v-model="event.title" type="text" class="form-control" id="title"> -->

                              <CommonInput :customStyle="{  fontSize: '15px'}"
                                v-model="event.venue_name"
                                type="text"
                                id="venue_name"
                                class="form-control"/>



                          </div>



                          <div class="mb-3">

                              <CommonLabel>Title</CommonLabel>
                              <!-- <input v-model="event.title" type="text" class="form-control" id="title"> -->

                              <CommonInput :customStyle="{  fontSize: '15px'}"
                                v-model="event.title"
                                type="text"
                                id="title"
                                class="form-control"/>



                          </div>

                          <div class="mb-4">

                          <CommonLabel for="descriptions" class="form-label">Event Description</CommonLabel>

                          <QuillEditor
                                    v-model:content="event.descriptions"
                                    :options="editorOptions"
                                    content-type="html"
                                    class="bg-white border rounded"
                                    style="min-height: 160px;"
                                  />
                          </div>


                          <div class="row g-3 mb-4">
                            <div class="col-12 col-md-6">

                                <CommonLabel>Start Date</CommonLabel>


                                <CommonInput  v-model="event.start_time"
                                type="date"
                                id="start_time"
                                class="form-control"
                                />


<!--
<input v-model="formatDateTime(event.start_time)"
                                type="date"
                                id="start_time"
                                class="form-control"/> -->

                            </div>

                            <div class="col-12 col-md-6">

                            <CommonLabel>End Date</CommonLabel>


                            <CommonInput  v-model="event.end_time"
                            type="date"
                            id="end_time"
                            class="form-control"
                            />

                            </div>

                          </div>




              <div class="row g-3 mb-4 align-items-end">
                <div class="col-12 col-md-6">

                  <CommonLabel>Event Image</CommonLabel>

                  <CommonInput :customStyle="{  fontSize: '15px'}"

                  type="file"
                    id="event_image"
                    class="form-control"
                    @change="profileImageHandle"


                                />


                  <div v-if="event.event_image_preview || event.event_image" class="mt-2">
                  <img
                    :src="event.event_image_preview ? event.event_image_preview : `${apiUrl}storage/${event.event_image}`"
                    alt="Preview"
                    class="img-fluid rounded border"
                    style="max-height: 150px;"
                  />
</div>
                </div>
                <div class="col-12 col-md-6">


<CommonLabel>Ticket Price ($)</CommonLabel>

<CommonInput  v-model="event.ticket_price"

                            id="ticket_price"
                            class="form-control"
                            />

</div>



                </div>

                <div class="d-grid d-md-flex justify-content-md-end">


<div class="d-grid d-md-flex justify-content-md-end">
<button type="submit" class="btn btn-success px-5">Update Event</button>
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

//import { useRouter, useRoute } from 'vue-router';
import { useRoute } from 'vue-router';
import api from '@/api/axios';
import { useToast } from 'vue-toast-notification';
import { onMounted, ref } from 'vue';
import router from '@/routes';
import CommonLabel from '../CommonLabel.vue';
import CommonInput from '../CommonInput.vue';
import { QuillEditor } from '@vueup/vue-quill';


const loggeduser = ref(null)
const event = ref(null)
const selectedImage = ref(null)
// const form = ref({
//   title: '',
//   ticket_price: '',
//   descriptions: '',
//   start_time: '',
//   end_time: '',
//   event_image: ''
// });

const route = useRoute()
const toast = useToast()
// const apiUrl = 'https://event.unephmart.com/'
const apiUrl = 'http://localhost:8000/';


onMounted(() => {

  const user = localStorage.getItem('user')
  loggeduser.value = JSON.parse(user)

  const eventId = route.params.eventId

  if (eventId) {

      api.get(`/event/${eventId}`).then((response) => {
          // event.value = response.data.data
           const data = response.data.data;

          // Fix start_time and end_time format if needed
          data.start_time = new Date(data.start_time).toISOString().split('T')[0]; // "2025-05-16"
          data.end_time = new Date(data.end_time).toISOString().split('T')[0];

        event.value = data;
                console.log("testing of edit",event.value)

      })

  }


})


const profileImageHandle = (e) => {
  const file = e.target.files[0]
  if (file) {
    selectedImage.value = file
    event.value.event_image_preview = URL.createObjectURL(file)
  }
}



// const profileImageHandle = (event) => {
//   event.value.event_image = event.target.files[0];
// }


// const profileImageHandle = (event) => {
//   const file = event.target.files[0];

//   if (file) {
//     // Optional: preview the image
//     event.value.event_image = file;

//     // OR: if you need to show a preview right away
//     const reader = new FileReader();
//     reader.onload = () => {
//       event.value.event_image_preview = reader.result;
//     };
//     reader.readAsDataURL(file);
//   }
// };

// const updateEvent = () => {
//   const eventId = route.params.eventId;
//   const formData = new FormData();

//   // Append each field manually
//   formData.append('title', event.value.title);
//   formData.append('descriptions', event.value.descriptions);
//   formData.append('start_time', event.value.start_time);
//   formData.append('end_time', event.value.end_time);
//   formData.append('ticket_price', event.value.ticket_price);

//   // Only append the image if a new one was chosen
//   if (event.value.event_image instanceof File) {
//     formData.append('event_image', event.value.event_image);
//   }

//   api.post(`/event/update/${eventId}`, formData).then((response) => {
//     toast.success(response.data.message, { position: 'top-right' });
//   });

//   setTimeout(() => {
//     router.push('/admin-dashboard/events');
//   }, 2000);
// };














// const updateEvent = ()=>{
//   const eventId = route.params.eventId
//   api.put(`/event/update/${eventId}`, event.value).then((response)=>{
//      console.log("testing========",response);
//       // toast.success(response.message)
//       toast.success(response.data.message, {
//       position: 'top-right',
//     });


//   })

//   setTimeout(()=>{
//       router.push('/admin-dashboard/events')
//   }, 2000)
// }










const updateEvent = () => {
  const eventId = route.params.eventId
  const formData = new FormData()
  formData.append('venue_name', event.value.venue_name)
  formData.append('title', event.value.title)
  formData.append('start_time', event.value.start_time)
  formData.append('end_time', event.value.end_time)
  formData.append('ticket_price', event.value.ticket_price)
  formData.append('descriptions', event.value.descriptions)

  // ফাইল থাকলে সেটাও অ্যাড করুন
  if (selectedImage.value) {
    formData.append('event_image', selectedImage.value)
  }


  // PUT এর পরিবর্তে POST + spoof method
  formData.append('_method', 'PUT')

  api.post(`/event/update/${eventId}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  }).then((response) => {
    toast.success(response.data.message, {
      position: 'top-right',
    })

    setTimeout(() => {
      router.push('/admin-dashboard/events')
    }, 2000)
  }).catch((error) => {
    console.error(error)
    toast.error("ইভেন্ট আপডেট ব্যর্থ হয়েছে")
  })
}




</script>
