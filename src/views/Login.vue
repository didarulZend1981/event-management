<template>

<div class="wrapper margin-TOP">
  <div class="logo">
            <img src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-bird-symbols-png-logo-0.png" alt="">
        </div>
    <h1 class="margin-top-log name">Login</h1>
    <form @submit.prevent="memberLogin">
      <div class="form-field">

      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="email" placeholder="Email">
                <div v-if="errors.email" class="text-danger">{{ errors.email[0] }}</div>
    </div>
    <div class="form-field">

                <input type="password" class="form-control" id="exampleInputPassword1" v-model="password" placeholder="Password">
                <div v-if="errors.password" class="text-danger">{{ errors.password[0] }}</div>
    </div>

    <div class="form-check small-checkbox">
  <input type="checkbox" class="form-check-input" id="exampleCheck1">
  <label class="form-check-label" for="exampleCheck1">Check me out</label>
</div>

    <button type="submit" class="btn ">Login</button>


    </form>

        <div class="text-center">
                <div class="or_divider">
                  <h6>OR</h6>
                </div>

                 <router-link class="btn-glow" to="/registration">
                                  <div class="sb-nav-link-icon"><i class="fas fa-tachometer-alt"></i></div>
                                 <h6 style="color: white;">Sign up</h6>
                </router-link>
        </div>


  </div>














</template>

<script setup>
import { ref } from 'vue';
import api from '@/api/axios';
import { useToast } from 'vue-toast-notification';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const toast = useToast();
const errors = ref({});
const router = useRouter();




const memberLogin = async () => {
  try{
    const response = await api.post('/login', {
      email: email.value,
      password: password.value
    });




    if(response.status){

      const userData = response.data.data
      localStorage.setItem('apiToken', response.data.token);
      localStorage.setItem('user', JSON.stringify(userData));

      toast.success('Login was successfull', {
        position:'top-right',
        duration:2000
      })
      setTimeout(()=>{

        // router.push('/admin-dashboard').then(() => {
        //     window.location.reload();
        //   })



        if(userData.role == 'user'){
          // this.$router.push('/');
          router.push('/member-dashboard').then(() => {
            window.location.reload();
          })
        }else if(userData.role == 'admin'){
          router.push('/admin-dashboard').then(() => {
            window.location.reload();
          })
        }



        //  if (userData.role === 'user') {
        //   router.push('/member-dashboard')
        // } else if (userData.role === 'admin') {
        //       router.push('/admin-dashboard')
        // }




      }, 2000)

    }







  }catch(error){
    toast.error('validation error', {
      position: 'top-right'
    })
    errors.value = error.response.data.errors
  }
}


</script>


<style scoped>

#contact {
  min-height: calc(100vh - 100px); /* Ensure the contact section always fills at least the full screen height */
  display: flex;
  flex-direction: column;
  justify-content: center; /* Vertically center content */
  padding: 20px;

  margin: 0 auto; /* Center content horizontally */
  font-family: Arial, sans-serif;
  box-sizing: border-box;
}





























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
  background-color: #ecf0f3;
  border-radius: 15px;
  box-shadow: 13px 13px 20px #cbced1, -13px -13px 20px #fff;
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
  display: block;
  border: none;
  outline: none;
  background: none;
  font-size: 1.2rem;
  color: #666;
  padding: 10px 15px 10px 10px;
}

.wrapper .form-field {
  padding-left: 10px;
  margin-bottom: 20px;
  border-radius: 20px;
  box-shadow: inset 8px 8px 8px #cbced1, inset -8px -8px 8px #fff;
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
  margin-top: 20px;
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

  position: relative;
  font-weight: 800;

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




