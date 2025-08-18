<template>

  <HeroSection></HeroSection>

  <!-- Blog 3 - Bootstrap Brain Component -->


  <div class="content">
    <div class="container box">
      <!--== Schedule ===================-->
				<!--===============================-->
				<section id="schedule" class="row">
				<div class="title-start schedule-menu col-md-4 col-md-offset-4">
				<br />
					<h2>Events Schedule</h2>
					<p class="sub-text text-center">Check out the event details</p>
				</div>
        <ul class="timeline">
        <li v-for="(event, index) in visibleEvents" :key="event.id" :class="{'timeline-inverted': index % 2 !== 0}">
          <div class="timeline-badge">
            <a><i class="fa fa-circle" id=""></i></a>
          </div>
          <div class="timeline-panel">

            <div class="timeline-heading">
              <h4>{{ event.title }}</h4>
            </div>
            <!-- <img class="blog-image" loading="lazy" :src="`${apiUrl}${event.event_image}`" alt="Business" width="100%" height="250" /> -->

            <img class="blog-image" loading="lazy" :src="`${apiUrl}public/storage/${event.event_image}`" alt="Business" width="100%" height="250" />


            <div class="timeline-body">
              <p class="timeline-desc col-md-6 justify-text" v-html="getTruncatedHtml(event.descriptions, 20)">


              </p>



              <p class="timeline-other col-md-6">
                <em class="timeline-item">
                  Venue : {{ event.venue_name	 }}
                </em>


                <em class="timeline-item">
                  Ticket: {{ event.ticket_price }}$
                </em>
                <em class="timeline-item">
                  Start : {{ formatDateTime(event.start_time) }}
                </em>
                <em class="timeline-item">
                  End : {{ formatDateTime(event.end_time) }}
                </em>
                <em class="timeline-item">
                  Duration : {{ getEventDuration(event.start_time, event.end_time) }}
                </em>
              </p>
            </div>
            <div class="timeline-heading text-center uppercase">

                 <button class="button-info read-more" @click="handleBooking(event)">Booking</button>



            </div>
          </div>
        </li>
        </ul>


        <!-- Pagination Controls -->



				</section>

        <!-- <section class="text-center">
          <div class="d-flex justify-content-center mt-4">
            <button
      :style="{ backgroundColor: 'rgb(78, 221, 232)', borderColor: 'rgb(78, 221, 232)', color: '#fff' }"
      class="btn p-5"
      :disabled="currentPage === 1"
      @click="changePage(currentPage - 1)"
    >
      Previous
    </button>
    <span class="mx-2">Page {{ currentPage }} of {{ totalPages }}</span>
      <button
      :style="{ backgroundColor: 'rgb(78, 221, 232)', borderColor: 'rgb(78, 221, 232)', color: '#fff' }"
      class="btn"
      :disabled="currentPage === totalPages"
      @click="changePage(currentPage + 1)"
    >
      Next
    </button>

    </div>
        </section> -->



        <!-- <button
      v-if="currentIndex < events.length"
      @click="loadMore"
      class="btn btn-success px-5"
    >
      Load More
    </button>

    <p v-else class="text-gray-500">All events loaded</p> -->



   <CustomButton
      label="Load More"
       sizeClass="medium"
      customClass="contactButton"
      :show="currentIndex < events.length && !loading"
      @click="loadMore"
    />

    <p v-if="loading" class="text-blue-500 mt-2">Loading...</p>
    <p v-else-if="currentIndex >= events.length" class="text-gray-500 mt-2">All events loaded</p>


				<!--===============================-->






    </div>
  </div>





</template>

<script setup>
import api from '@/api/axios';
import { onMounted, ref, computed } from 'vue';
import { useToast } from 'vue-toast-notification';
import { useRouter } from 'vue-router';
import HeroSection from '@/components/frontend/HeroSection.vue';
import CustomButton from '@/components/CustomButton.vue';
// import Button from '@/components/Button.vue';

const apiUrl = 'https://event-api.appwebd.com/';
// const apiUrl = 'http://localhost:8000/';
const toast = useToast();
const router = useRouter();


const events = ref([]);
const visibleEvents = ref([]);
const currentIndex = ref(0);
const perPage = 4;
const loading = ref(false);






function getTruncatedHtml(html, limit = 10) {
  const div = document.createElement('div')
  div.innerHTML = html
  let wordCount = 0
  let result = ''

  function walk(node) {
    if (wordCount >= limit) return

    if (node.nodeType === Node.TEXT_NODE) {
      const words = node.textContent.trim().split(/\s+/)
      const take = Math.min(limit - wordCount, words.length)
      result += words.slice(0, take).join(' ') + ' '
      wordCount += take
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      const tag = node.tagName.toLowerCase()
      result += `<${tag}${getAttributes(node)}>`
      Array.from(node.childNodes).forEach(walk)
      result += `</${tag}>`
    }
  }

  function getAttributes(node) {
    if (!node.attributes) return ''
    return Array.from(node.attributes)
      .map(attr => ` ${attr.name}="${attr.value}"`)
      .join('')
  }

  Array.from(div.childNodes).forEach(walk)

  return result.trim() + (wordCount >= limit ? '...' : '')
}






// API থেকে ডেটা লোড করা
const loadAllEvents = async () => {
  try {
    loading.value = true;
    const res = await api.get("/events");
    if (res.status === 200) {
      events.value = res.data.data;
      loadMore(); // প্রথম ৬টা দেখাবে
    }
  } catch (err) {
    console.log(err);
  } finally {
    loading.value = false;
  }
};

// Load More
const loadMore = async () => {
  loading.value = true; // লোডিং শুরু
  await new Promise((resolve) => setTimeout(resolve, 500)); // simulate API delay

  const nextIndex = currentIndex.value + perPage;
  visibleEvents.value.push(...events.value.slice(currentIndex.value, nextIndex));
  currentIndex.value = nextIndex;

  loading.value = false; // লোডিং শেষ
};

onMounted(() => {
  loadAllEvents();
});



const formatDateTime = (date) => {
  const d = new Date(date);
  // return d.toLocaleString();
  return d.toLocaleDateString('en-US', {
    weekday: 'short',  // "Thu"
    year: 'numeric',   // "2025"
    month: 'short',    // "Apr"
    day: 'numeric'     // "10"
  });
};

const getEventDuration = (startDate, endDate) => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const diffInMilliseconds = end - start;
  // const diffInMilliseconds = endDate - startDate;

  // Convert to hours or days
  const hours = Math.floor(diffInMilliseconds / (1000 * 60 * 60)); // Convert milliseconds to hours
  const days = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24)); // Convert milliseconds to days

  // Return minimum value between hours and days
  if (hours < 24) {
    return `${hours} hour${hours !== 1 ? 's' : ''}`;
  } else {
    return `${days} day${days !== 1 ? 's' : ''}`;
  }
};






const handleBooking = (event) => {
  const loggedInUser = localStorage.getItem('user');
  if (!loggedInUser) {
    toast.error('No user logged in');
  } else {
    router.push({
      path: '/member-event-confirmation',
      query: { eventId: event.id }
    });
  }
};



</script>

<style scoped>
/* Add any scoped styling for pagination or other components */
.custom-green {
  color: #28a745; /* This is a specific shade of green */
}


</style>
