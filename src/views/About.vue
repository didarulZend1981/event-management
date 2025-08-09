<template>
  <section id="" class="mapWrap marginTopBoTTom">
            <div id="googleMap" style="width:100%;"></div>
            <div id="">
              <div class="title-start col-md-4 col-md-offset-4">
						<br />
							<h2 class="block_title marginTop">About Us</h2>
							<p class="sub-text text-center">Know our great story</p>
						</div>

              <div class="container">
                  <div class="about-first">
                          <div class="block col-md-4">
                            <div class="content-block">
                              <i class="fa fa-users fa-3x"></i>
                              <h3 class="block_title_sub">Huge Customers</h3>
                              <p>I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                          </div>
                          <div class="block col-md-4">
                            <div class="content-block">
                              <i class="fa fa-rocket fa-3x"></i>
                              <h3 class="block_title_sub">RESPONSIVE DESIGN</h3>
                              <p>I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                          </div>
                          <div class="block col-md-4">
                            <div class="content-block">
                              <i class="fa fa-trophy fa-3x"></i>
                              <h3 class="block_title_sub">Award Winning Company</h3>
                              <p>I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                          </div>
                  </div>
                  <div class="about-part">
                        <div class="col-md-8">

                          <h3 class="hover-underline">ABOUT US</h3>


                          <p class="justified-text">Nullam enim nunc, sollicitudin eget rhoncus non, iaculis quis metus. Nunc urna diam, blandit nec ipsum eu, mollis convallis lectus. Vestibulum sapien mauris, auctor quis magna sed, pretium vestibulum est. Mauris vitae tristique urna. Nullam enim nunc, sollicitudin eget rhoncus non, iaculis quis metus. Nunc urna diam, blandit nec ipsum eu, mollis convallis lectus.

                          Vestibulum sapien mauris, auctor quis magna sed, pretium vestibulum est. Mauris vitae tristique urna.</p>
                        </div>
                        <div class="col-md-4">

                          <p> Design</p>
                          <div class="progress">
                          <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;">
                            60%
                          </div>
                          </div>
                          <br/>
                          <p> Idea</p>
                          <div class="progress">
                          <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 80%;">
                            80%
                          </div>
                          </div>
                          <br/>
                        </div>
                  </div>
						</div>
            </div><!-- contact-area -->


        </section><!-- contact -->
</template>

<script>
export default {
  name: 'about',
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
.marginTopBoTTom{

  margin-bottom:150px;
}
.marginTop{
  margin-top: 200px;
}

.block_title {
  font-size: 60px;
  color: black;
  text-shadow:
    2px 2px 0 black,
    4px 4px 8px black,
    6px 6px 0 black;
  margin-bottom: 40px;
}
.block_title_sub {
  font-size: 20px;
  color: black;
  text-shadow:
    1px 1px 0 black,
    2px 2px 1px black,
    2px 2px 0 black;


}

.justified-text {
  text-align: justify;
  font-size: 16px;
  line-height: 1.3;
  /* color: #333; */
  max-width: 800px;
  margin:  auto;
  padding: 0 ;

}
.hover-underline {

  color: #333;
  position: relative;

  color: black;
  text-shadow:
    1px 1px 0 black,
    2px 2px 1px black,
    2px 2px 0 black;
}

.hover-underline::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #00bcd4;
  transition: width 0.3s;
}

.hover-underline:hover::after {
  width: 100%;  /* হোভার করলে আন্ডারলাইন সম্পূর্ণ হবে */
}
</style>



