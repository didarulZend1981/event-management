<template>



  <div class="header-cta margin-TO">
				<div class="container">
					<div class="row">
						<div class="entry-content">
				            <p><span class="start-text"><b>From THE MARCH 7, 2014</b></span></p>
				            <h4 class="entry-title"><a href="#">Organizing World class events</a></h4>
				            <h5><span><b>Schrodinger confirms that Germany international ...</b></span></h5>
					    </div>

					</div>
				</div>
			</div>

			<div class="header-bg">
				<div id="preloader">
					<div class="preloader"></div>
				</div>
				<div class="main-slider" id="main-slider">

					<!--== Main Slider ==-->
					<ul class="slides">
						<li><img src="../../assets/frontend/images/demo/bg-slide-01.jpg" alt="Slide Image"/></li>
						<li><img src="../../assets/frontend/images/demo/bg-slide-02.jpg" alt="Slide Image 2"/></li>
					</ul>

				</div>
			</div>



</template>

<script>



  export default {
    name: "HeroSection",
    mounted() {





      // External jQuery functions
      const fn = {
        MainSlider() {
          $('.main-slider').flexslider({
            noCSS: true,
            touch: false,
            controlNav: false,
            directionNav: false,
            animation: "fade",
            start: function () {
              $('#preloader').addClass('ready');
            }
          });
        },
        MainSliderAlign() {
          const container = $('.header-bg');
          function centerImage() {
            const imageWidth = container.find('img').width();
            const widthFix = imageWidth / 2;
            container.find('img').css('margin-left', -widthFix);
          }
          $(window).on("load resize", centerImage);
        },
        Slider() {
          $('.flexslider').flexslider({
            noCSS: true,
            touch: false,
            directionNav: false,
            animation: "fade"
          });
        },
        Launch() {
          fn.MainSlider();
          fn.MainSliderAlign();
          fn.Slider();
        }
      };

      fn.Launch();
    }
  }
  </script>
<style scoped>
.margin-TOP {
  margin-top: 200px;
  /* border: 1px solid red; */

}


</style>





