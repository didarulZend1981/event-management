import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
// import Login from "@/views/Login.vue";
// import Memberregistration from "@/views/MemberRegistration.vue";
// import MemberDashboard from "@/views/MemberDashboard.vue";
// import MemberEventConfirmation from "@/views/MemberEventConfirmation.vue";
// import AdminDashboard from "@/views/AdminDashboard.vue";
// import AdminProfile from "@/components/admin/AdminProfile.vue";
// import Events from "@/components/admin/Events.vue";
// import EventEdit from "@/components/admin/EventEdit.vue";
// import MemberBookings from "@/views/MemberBookings.vue";
// import Bookings from "@/components/admin/Bookings.vue";
// import BookingUpdate from "@/components/admin/BookingUpdate.vue";
// import EventAdd from "@/components/admin/EventAdd.vue";
// import Contact from "@/views/Contact.vue";
// import About from "@/views/About.vue";
import FrontendLayout from "@/layouts/FrontendLayout.vue";
import Login from "@/views/Login.vue";
import MemberRegistration from "@/views/MemberRegistration.vue";
import Contact from "@/views/Contact.vue";
import About from "@/views/About.vue";
import AdminLayout from "@/layouts/AdminLayout.vue";
import AdminDashboard from "@/views/AdminDashboard.vue";
import Events from "@/components/admin/Events.vue";
import MemberDashboard from "@/views/MemberDashboard.vue";
import MemberEventConfirmation from "@/views/MemberEventConfirmation.vue";
import MemberBookings from "@/views/MemberBookings.vue";
import EventAdd from "@/components/admin/EventAdd.vue";
import EventEdit from "@/components/admin/EventEdit.vue";
import Bookings from "@/components/admin/Bookings.vue";
import BookingUpdate from "@/components/admin/BookingUpdate.vue";
import AdminProfile from "@/components/admin/AdminProfile.vue";





// const routes = [
//     {path: '/', component: Home},
//     {path: '/login', component: Login},
//     {path: '/member-dashboard', component: MemberDashboard},
//     {path: '/registration', component: Memberregistration},
//     {path: '/member-event-confirmation', component: MemberEventConfirmation},
//     {path: '/member-event-bookings', component: MemberBookings},
//     {path:'/contact',component:Contact},
//     {path:'/about', component:About},



//     {path: '/admin-dashboard', component: AdminDashboard,



//           children: [
//             {path: 'dashboard', component: AdminProfile },
//             {path: 'events', component: Events},
//             {path: 'events/add', component: EventAdd},
//             {path: 'event/edit/:eventId', component: EventEdit},
//             {path: 'bookings', component: Bookings},
//             {path: 'booking/update/:bookingId', component: BookingUpdate}
//         ]







//     },





// ]



const routes = [

  {path: '/',

            component: FrontendLayout,
            children:[
                { path: '', name: 'Home', component: Home },
                {path: '/login', component: Login},
                {path: '/registration', component: MemberRegistration},
                {path:'/contact',component:Contact},
                {path:'/about', component:About},
                {path: '/member-dashboard', name: 'MemberDashboard', component: MemberDashboard},
                {path: '/member-event-confirmation', component: MemberEventConfirmation},


            ]
  },
  {
      path: '/admin-dashboard',
      component: AdminLayout,
      children: [
         { path: '', name: 'Dashboard', component: AdminProfile },
         {path: 'events', name: 'events', component: Events},
         {path: 'admin-dashboard', name: 'MemberDashboard', component: AdminDashboard},
         {path: 'member-event-bookings', component: MemberBookings},
         {path: '/member-dashboard', name: 'MemberDashboard', component: MemberDashboard},
         {path: 'events/add', component: EventAdd},
         {path: 'event/edit/:eventId', component: EventEdit},
         {path: 'bookings', component: Bookings},
         {path: 'booking/update/:bookingId', component: BookingUpdate}


      ]
    }


]




const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router;
