<template>
  <section id="contact" class="mapWrap">
            <div id="googleMap" style="width:100%;"></div>
            <div id="contact-area">
                <div class="container">
                    <h2 class="block_title con-title text-s">Hey !!!</h2>
                    <div class="row marginBottom">
                        <div class="col-xs-12">
                        </div>
                        <div class="col-sm-6">
                            <div class="moreDetails">
                                <h2 class="con-title">More About me</h2>
                                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum animi repudiandae nihil aspernatur repellat temporibus doloremque sint ea laboriosam, excepturi iure inventore rerum voluptatibus, suscipit totam, sit necessitatibus. Rerum, blanditiis. </p>
                                <ul class="address">
                                    <li><i class="pe-7s-map-marker"></i><span>1600 Pennsylvania Ave NW,<br>Washington, DC 20500,<br>United States</span></li>
                                    <li><i class="pe-7s-mail"></i><span>example@gmail.com</span></li>
                                    <li><i class="pe-7s-phone text-white"></i><span>+1-202-555-0144</span></li>
                                    <li><i class="pe-7s-globa text-white"></i><span><a href="#">www.themewagon.com</a></span></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <h2 class="con-title text-s">Contact us</h2>
                            <form role="form">
                              <div class="form-group">
                                <input type="text" class="form-control" id="user_name" placeholder="Enter your name">
                              </div>
                              <div class="form-group">
                                <input type="email" class="form-control" id="your_email" placeholder="Enter your email">
                              </div>
                              <div class="form-group">
                                <textarea name="InputMessage" id="user_message" class="form-control" rows="5" required></textarea>
                              </div>

                              <button type="submit" class="btn medium contactButton">Let us know</button>
                            </form>
                        </div>
                    </div>
                </div><!-- container -->
            </div><!-- contact-area -->
            <div id="social">
                <div class="container">
                    <div class="row">
                        <div class="col-xs-12">
                            <ul class="scoialinks">
                                <li class="normal-txt">Find us on</li>
                                <li class="social-icons"><a class="facebook" href="#"></a></li>
                                <li class="social-icons"><a class="twitter" href="#"></a></li>
                                <li class="social-icons"><a class="linkedin" href="#"></a></li>
                                <li class="social-icons"><a class="google-plus" href="#"></a></li>
                                <li class="social-icons"><a class="wordpress" href="#"></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div><!-- social -->
        </section><!-- contact -->
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      }
    };
  },
  methods: {
    submitForm() {
      console.log("Form submitted:", this.form);
      // In a real app, you'd send the form data to a server here.
      alert('Thank you for your message!');
      // Reset the form
      this.form.name = '';
      this.form.email = '';
      this.form.message = '';
    }
  }
}
</script>

<style scoped>
 .block_title{
  margin-top: 150px;
  border: 2px solid green;
 }
 .marginBottom{

 }
 button.btn.medium.contactButton {
  position: relative;
    margin-top: 75px;
    padding: 14px 32px;
    border: 2px solid #ff2e63;
    border-radius: 50px;
    background-color: transparent;
    color: white;
    font-size: 18px;
    font-weight: 600;
    text-shadow: 1px 1px #000;
    cursor: pointer;
    transition: all 0.4s ease-in-out;
    box-shadow: 0 0 15px rgba(255, 46, 99, 0.4);
    text-align: center;
}

button.btn.medium.contactButton:hover {
    background-color: #ff2e63;
    color: #fff;
    text-shadow: none;
    box-shadow: 0 0 25px rgba(255, 46, 99, 0.8);
    transform: scale(1.05);
}

button.btn.medium.contactButton::after {
    content: "";
    position: absolute;
    top: -15px;
    left: 50%; /* Center horizontally */
    transform: translateX(-50%); /* Align triangle exactly to center */
    width: 0;
    height: 0;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    border-bottom: 15px solid #ff2e63; /* Triangle pointing downward */
    z-index: 2;
}
.con-title.text-s{
  color: white;
    font-size: 50px;
    font-weight: 600;
    text-shadow: 1px 1px #000;
}
</style>


