<template>







  <div class="wrapper mt-5">
      <div class="row justify-content-center">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header">

              <div class="logo">
                    <img src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-bird-symbols-png-logo-0.png" alt="">
              </div>
              <h1 class="margin-top-log name">Registration</h1>


            </div>
            <div class="card-body">
              <form @submit.prevent="memberRegistration">
              <div class="mb-3 form-field">



                  <input type="text" class="form-control" id="name" aria-describedby="emailHelp" v-model="form.name" placeholder="Name">
                  <div v-if="errors.name" class="text-danger">{{ errors.name[0] }}</div>





                <!-- <label for="name" class="form-label">Name</label>
                <input type="text" class="form-control" id="name" v-model="form.name"/>
                <div v-if="errors.name" class="text-danger">{{ errors.name[0] }}</div> -->
              </div>
              <div class="mb-3 form-field">
                <!-- <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" id="email" v-model="form.email"/> -->

                <input type="email" class="form-control" id="email" aria-describedby="emailHelp" v-model="form.email" placeholder="email">

                <div v-if="errors.email" class="text-danger">{{ errors.email[0] }}</div>
              </div>
              <div class="mb-3 form-field">
                <!-- <label for="password" class="form-label">Password</label> -->
                <!-- <input type="password" class="form-control" id="password" v-model="form.password"/> -->

                <input type="password" class="form-control" id="password"  v-model="form.password" placeholder="password">

                <div v-if="errors.password" class="text-danger">{{ errors.password[0] }}</div>
              </div>
              <div class="mb-3 form-field">
                <!-- <label for="password_confirmation" class="form-label">Confirm Password</label>
                <input type="password" class="form-control" id="password_confirmation"  v-model="form.password_confirmation"/> -->
                <input type="password" class="form-control" id="password_confirmation"  v-model="form.password_confirmation" placeholder="confirm password">
                <div v-if="errors.password_confirmation" class="text-danger">{{ errors.password_confirmation[0] }}</div>

              </div>
              <div class="mb-3 form-field">
                <!-- <label for="profile_image" class="form-label">Profile Image</label>
                <input type="file" class="form-control" id="profile_image" @change="profileImageHandle"/> -->

                <input type="file" class="form-control" id="profile_image" @change="profileImageHandle"  placeholder="image">


              </div>
              <button type="submit" class="btn btn-primary">Register</button>
            </form>


            <div class="text-center">
                <div class="or_divider">
                   <h6>OR</h6>
                </div>

                 <router-link class="btn-glow" to="/login">
                                  <div class="sb-nav-link-icon"><i class="fas fa-tachometer-alt"></i></div>
                                 <h6 style="color: white;">Login</h6>
                </router-link>
        </div>
          </div>
          </div>

        </div>
      </div>
    </div>



  </template>

<script setup>

import { ref } from 'vue';
import api from '@/api/axios';
import  { useRouter } from 'vue-router';
import {useToast} from 'vue-toast-notification';

const form = ref({
  name: '',
  email: '',
  password: '',
  password_confirmation: '',
  profile_image: ''
});

const router = useRouter();
const toast = useToast();
const errors = ref({});

const profileImageHandle = (event) => {
  form.value.profile_image = event.target.files[0];
}

const memberRegistration = async () => {


   const formData = new FormData()

    for(const key in form.value) {
      formData.append(key, form.value[key])
    }

  try{
    const response = await api.post('/member-registration', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });



    toast.success('registration has been completed', {
      position:'top-right',
      duration:2000
    })


    setTimeout(()=>{
      router.push('/login').then(() => {
        return window.location.reload();
      })
    }, 2000)


  }catch(error){
    toast.error('validation error', {
      position: 'top-right'
    })
    errors.value = error.response.data.errors

  }



}

</script>

<style>


@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

body {
  background: #ecf0f3;
}

.wrapper {
  max-width: 350px;
  min-height: 500px;
  margin: 80px auto;
  padding: 40px 30px 30px 30px;
  background-color: #f0f4f8;
  border-radius: 20px;
  box-shadow: 10px 10px 25px rgba(0, 0, 0, 0.1),
              -10px -10px 25px #ffffff;

}

.logo {
  width: 80px;
  margin: auto;
}

.logo img {
  width: 100%;
  height: 80px;
  object-fit: cover;
  border-radius: 50%;
  box-shadow: 0px 0px 3px #5f5f5f,
              0px 0px 0px 5px #ecf0f3,
              8px 8px 15px #a7aaa7,
              -8px -8px 15px #fff;
}

.wrapper .name {
  font-weight: 600;
  font-size: 1.4rem;
  letter-spacing: 1.3px;
  padding-left: 10px;
  color: #555;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 30px;
}

.wrapper .form-field input {
  width: 100%;
  border: none;
  outline: none;
  background: none;
  font-size: 1.5rem;
  color: #333;
  padding: 12px 15px;
  border-radius: 25px;
  text-align: center;
  text-transform: uppercase;
  font-weight: 800;
  text-shadow: 1px 1px 1px;
}

.wrapper .form-field {
  padding-left: 10px;
  margin-bottom: 20px;
  border-radius: 25px;
  background: #f0f4f8;
  box-shadow: inset 4px 4px 8px #d1d9e6,
              inset -4px -4px 8px #ffffff;
  transition: box-shadow 0.3s ease;
}

.wrapper .btn {
  width: 100%;
  height: 40px;
  background-color: #03A9F4;
  color: #fff;
  border-radius: 25px;
  box-shadow: 3px 3px 3px #b1b1b1, -3px -3px 3px #fff;
  letter-spacing: 1.3px;
  border: none;
  cursor: pointer;
}

.wrapper .btn:hover {
  background-color: #039BE5;
}

.wrapper a {
  text-decoration: none;
  font-size: 0.8rem;
  color: #03A9F4;
  display: block;
  text-align: center;
  margin-top: 20px;
}

.wrapper a:hover {
  color: #039BE5;
}

@media(max-width: 380px) {
  .wrapper {
    margin: 30px 20px;
    padding: 40px 15px 15px 15px;
  }
}



.form-check {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  margin-bottom: 20px;
}
.small-checkbox .form-check-input {
  width: 16px;
  height: 16px;
  transform: scale(0.8); /* আরও ছোট করতে চাইলে */
}
.btn-glow {
  display: inline-block;
  padding: 10px;
  background: linear-gradient(135deg, red, #0288D1);

  border-radius: 35px;
  font-weight: 500;
  padding: 15px 20px;
  text-decoration: none;
  box-shadow: 0 8px 20px rgba(3, 169, 244, 0.4);
  transition: all 0.3s ease;


}



.btn-glow:hover {
  background: linear-gradient(135deg, #0288D1, red);
  box-shadow: 0 12px 25px rgba(2, 136, 209, 0.5);
  transform: translateY(-2px);
}
.or_divider {
  display: flex;
  align-items: center;
  text-align: center;
  margin: 20px 0;
}

.or_divider h6 {
  flex: 1;
  border-bottom: 1px solid #ccc;
  line-height: 0.1em;
  margin: 0 10px;
  color: black;
  font-weight: 800;
  position: relative;
  text-shadow: 1px 2px 3x green;



}

.or_divider h6::before,
.or_divider h6::after {
  content: '';
  flex: 1;
  border-bottom: 1px solid #ccc;
  margin: 0 10px;
}

.or_divider h6 {
  display: inline-block;
  padding: 0 10px;
  background: #fff; /* Match your form background */
}

</style>


