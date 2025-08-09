<template>
  <div class="container mt-5">
  <div class="row justify-content-center">
    <div class="col-md-12 marginTop">
      <div class="card">
        <div class="card-header">
          <BlockTitle :customStyle="{  fontSize: '50px',textTransform:'uppercase' }" customClass="textCenter">Booking Information</BlockTitle>

        </div>
        <div class="card-body">

          <div class="row">
              <div class="col-md-4">
                <Card>
                  <template #header>
    <div class="d-flex justify-between items-center">
      <h2 class="text-lg font-bold">


        <BlockTitle :customStyle="{  fontSize: '30px',textShadow:'2px 3px 2px',marginBottom:'10px',textTransform: 'uppercase' }"> user information</BlockTitle>
      </h2>
    </div>
  </template>

  <ul v-if="loggeduser">
                      <li>Name: {{ loggeduser.name }}</li>
                      <li>Email: {{ loggeduser.email }}</li>
                      <li>Profile Image:
                          <img
                          v-if="loggeduser && loggeduser.profile_image"
                          :src="`${apiUrl}${loggeduser.profile_image}`"
                          alt=""
                          class="img-fluid"
                          style="max-width: 200px; height: auto;"
                          />
                      </li>
                  </ul>

                </Card>




              </div>
              <div class="col-md-4">

                  <Card >
                    <template #header>
    <div class="d-flex justify-between items-center">
      <h2 class="text-lg font-bold">


        <BlockTitle :customStyle="{  fontSize: '30px',textShadow:'2px 3px 2px',marginBottom:'10px',textTransform: 'uppercase' }">Event History</BlockTitle>
      </h2>
    </div>
  </template>
                      <ul v-if="event" style="padding-left: 0px;">

                        <li><CommonLabel>Name: {{ event.title }}</CommonLabel></li>

                        <img class="" loading="lazy" :src="`${eventUrl}storage/${event.event_image}`" alt="Business"



                        style="max-width: 300px; height: auto;border-radius: 5px; border: solid 1px white;"
                        />



                        <li><CommonLabel>Price: {{ event.ticket_price }}</CommonLabel></li>
                        <p class="justify-text"  v-html="event.descriptions">
                        </p>
                        <li><CommonLabel style="margin-top: 0px;margin-bottom: 0px;">Start: <FormatDateTimeVue :datetime="event.start_time"/></CommonLabel></li>

                        <li><CommonLabel style="margin-top: 0px;margin-bottom: 0px;">End: <FormatDateTimeVue :datetime="event.end_time"/></CommonLabel></li>
                        <li><CommonLabel style="margin-top: 0px;margin-bottom: 0px;">Duration: <EventDuration :start="event.start_time" :end="event.end_time"></EventDuration></CommonLabel></li>
                      </ul>


    </Card>





              </div>
              <div class="col-md-4">
                <Card >
                  <template #header>
    <div class="d-flex justify-between items-center">
      <h2 class="text-lg font-bold">


        <BlockTitle :customStyle="{  fontSize: '30px',textShadow:'2px 3px 2px',marginBottom:'10px',textTransform: 'uppercase' }">Booking Price</BlockTitle>
      </h2>
    </div>
  </template>
                <form v-if="event" @submit.prevent="confirmbooking">
                            <div class="">

                                <CommonLabel :customStyle="{ marginTop:'40px' }" htmlFor="ticket_qty"
>Ticket Quantity <span class="text-danger">*</span></CommonLabel>

                                <CommonInput
                                v-model="ticket_qty"
                                type="number"
                                id="ticket_qty"
                                name="ticket_qty"
                                min="1"
                                required
                                :isInvalid="ticket_qty <= 0"


                                >


                                </CommonInput>
                            </div>
                            <div class="mb-3">
                              <CommonLabel htmlFor="ticket_qty">Total Amount</CommonLabel>


                                <CommonInput
                                v-model="total_amount"
                                type="number"
                                id="total_amount"
                                name="total_amount"
                                min="1"
                                disabled



                                />

                            </div>

                            <Button
                                                  label="Booking"
                          :customClass="'marginTop'"
                          :customStyle="{ fontSize: '20px',textAlign:'center' ,backgroundColor: 'red'}"


                                                  ></Button>
                        </form>


                      </Card>
              </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router';
import api from '@/api/axios';
import { useToast } from 'vue-toast-notification';
import { computed, onMounted, ref } from 'vue';
import BlockTitle from '@/components/BlockTitle.vue';
import Button from '@/components/Button.vue';
import CommonLabel from '@/components/CommonLabel.vue';
import CommonInput from '@/components/CommonInput.vue';
import Card from '@/components/Card.vue';
import FormatDateTimeVue  from '../components/FormatDateTime.vue';
import EventDuration from '@/components/EventDuration.vue';


const loggeduser = ref(null)
const event = ref(null)
const ticket_qty = ref(1)

const route = useRoute()
const router = useRouter()
const toast = useToast()

const apiUrl = 'https://event.unephmart.com/'
const eventUrl = 'http://localhost:8000/';

onMounted(()=>{

    const user = localStorage.getItem('user')
    loggeduser.value = JSON.parse(user)

    const eventId = route.query.eventId

    if(eventId){

        api.get(`/event/${eventId}`).then((response)=>{
            event.value = response.data.data

            console.log("===========================",event.value)

        })

    }


})
const total_amount = computed(()=>{
    return event.value ? ticket_qty.value * event.value.ticket_price : 0
})

const confirmbooking = () => {





  api.post('/member-event-booking', {
      user_id: loggeduser.value.id,
      event_id: event.value.id,
      ticket_qty: ticket_qty.value,
      ticket_price: event.value.ticket_price,
      total_price: total_amount.value,
  }).then(response => {
    console.log('Booking Confirmed:', response.data);

    //  useToast().success('Booking confirmed!');


     toast.success(response.data.message, {
            position:'top-right'
        })




        setTimeout(()=>{
          router.push('/admin-dashboard/member-event-bookings').then(() => {
            return window.location.reload();
          })
        }, 2000)



  }).catch(error => {
    console.error('Booking failed:', error);
    // Optionally show an error toast message
    useToast().error('Booking failed!');
  });
};


</script>

<style>
.marginTop{
  margin-top: 200px;
  margin-bottom: 100px;
  text-align: center;
}
.marginTopC{
  margin-top: 30px;
  margin-bottom: 20px;
  border: 1px solid red;
}

</style>
