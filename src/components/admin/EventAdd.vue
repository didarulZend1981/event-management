<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header">Registration</div>
          <div class="card-body">
            <form @submit.prevent="eventAdd">
              <div class="mb-3">
                <label for="title" class="form-label">title</label>
                <input type="text" class="form-control" id="title" v-model="form.title"/>
                <div v-if="errors.title" class="text-danger">{{ errors.title[0] }}</div>
              </div>
              <div class="mb-3">
                <label for="ticket_price" class="form-label">ticket_price</label>
                <input type="text" class="form-control" id="ticket_price" v-model="form.ticket_price"/>
                <div v-if="errors.ticket_price" class="text-danger">{{ errors.ticket_price[0] }}</div>
              </div>

              <!-- Replacing the input for descriptions with VueQuill -->
              <div class="mb-3">
                <label for="descriptions" class="form-label">descriptions</label>
                <!-- <input type="text" class="form-control" id="descriptions" v-model="form.descriptions"/> -->
                <QuillEditor v-model:content="form.descriptions" :options="editorOptions" content-type="html"/>
                <!-- <div v-if="errors.descriptions" class="text-danger">{{ errors.descriptions[0] }}</div> -->
              </div>

              <div class="mb-3">
                <label for="start_time" class="form-label">start_time</label>
                <input type="date" class="form-control" id="start_time" v-model="form.start_time"/>
                <div v-if="errors.start_time" class="text-danger">{{ errors.start_time[0] }}</div>
              </div>

              <div class="mb-3">
                <label for="end_time" class="form-label">end_time</label>
                <input type="date" class="form-control" id="end_time" v-model="form.end_time"/>
                <div v-if="errors.end_time" class="text-danger">{{ errors.end_time[0] }}</div>
              </div>


              <button type="submit" class="btn btn-primary">save</button>
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

// const QuillEditor = QuillEditor();

const form = ref({
  title: '',
  ticket_price: '',
  descriptions: '',
  start_time: '',
  end_time: ''
});

const router = useRouter();
const toast = useToast();
const errors = ref({});

// const editorOptions = ref({
//  theme: 'snow',
// modules: {
//    toolbar: [
//     [{ header: '1' }, { header: '2' }, { font: [] }],
//      [{ list: 'ordered' }, { list: 'bullet' }],
//     [{ script: 'sub' }, { script: 'super' }],
//      [{ align: [] }],
//      ['bold', 'italic', 'underline'],
//      ['link'],
//       ['blockquote', 'code-block']
//    ]
//  }
// });

const editorOptions = {
  theme: 'snow',
  modules: {
    toolbar: [
      ['bold', 'italic', 'underline'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['link', 'image']
    ]
  }
}

const eventAdd = async () => {
  console.log(form.value.descriptions);

  api.post('/event-add', {
    title: form.value.title,
    ticket_price: form.value.ticket_price,
    descriptions: form.value.descriptions,
    start_time: form.value.start_time,
    end_time: form.value.end_time,
  }).then(response => {
    console.log('Event added:', response.data);
    toast.success(response.data.message, {
      position: 'top-right'
    });

    setTimeout(() => {
      router.push('/admin-dashboard/events');
    }, 200);
  }).catch(error => {
    console.error('Event add failed:', error);
  });
};
</script>
