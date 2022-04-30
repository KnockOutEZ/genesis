<template>
  <section id="features" class="container mx-auto">
      <div class="px-5" aos-init aos-animate data-aos="fade-up" data-aos-delay="100" >
          <p class="features">FEATURES</p>
          <br>
          <h1 class="text-2xl">What I do</h1>
      </div>
        <br><br><br>
      <div class="grid md:grid-cols-3 sm:grid-cols-1 md:gap-5 sm:gap-2">
          <div class="styled-cols" aos-init aos-animate data-aos="fade-up" data-aos-delay="100" >
              <div class="rn-service">
                  <div class="svg-ico"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg></div>
                    <br>
                    <h2 class="text-2xl font-bold">Web Development</h2>
                    <br>
                    <p>I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
                    <!-- <div class="text-center arrow-icon"><i class="fas fa-3x fa-angle-right"></i></div> -->
              </div>
          </div>
          <div class="styled-cols " aos-init aos-animate data-aos="fade-up" data-aos-delay="300" >
              <div class="rn-service ">
                  <div class="svg-ico"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg></div>
                    <br>
                    <h2 class="text-2xl font-bold">UI/UX Design</h2>
                    <br>
                    <p>I value simple content structure, clean design patterns, and thoughtful interactions.</p>
              </div>
          </div>
          <div class="styled-cols" aos-init aos-animate data-aos="fade-up" data-aos-delay="500" >
              <div class="rn-service ">
                  <div class="svg-ico"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg></div>
                    <br>
                    <h2 class="text-2xl font-bold">Graphics Design</h2>
                    <br>
                    <p>I combine graphic design and illustration to help truly bring your brand to life.</p>
              </div>
          </div>

          <!-- <div class="styled-cols" aos-init aos-animate data-aos="fade-up" data-aos-delay="100" >
              <div class="rn-service ">
                  <div class="svg-ico"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg></div>
                    <br>
                    <h2 class="text-2xl font-bold">Web Development</h2>
                    <br>
                    <p>I throw myself down among the tall grass  by  the stream as I lie  close to earth.</p>
              </div>
          </div> -->
          <!-- <div class="styled-cols " aos-init aos-animate data-aos="fade-up" data-aos-delay="300" >
              <div class="rn-service ">
                  <div class="svg-ico"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg></div>
                    <br>
                    <h2 class="text-2xl font-bold">Web Development</h2>
                    <br>
                    <p>I throw myself down among the tall grass  by  the stream as I lie  close to earth.</p>
              </div>
          </div> -->
          <!-- <div class="styled-cols" aos-init aos-animate data-aos="fade-up" data-aos-delay="500" >
              <div class="rn-service ">
                  <div class="svg-ico"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg></div>
                    <br>
                    <h2 class="text-2xl font-bold">Web Development</h2>
                    <br>
                    <p>I throw myself down among the tall grass  by  the stream as I lie  close to earth.</p>
              </div>
          </div> -->
      </div>
  </section>
  <br><br><br><br>
    <div class="container mx-auto">
    <hr>
  </div>
</template>

<script>
export default {
name:"Features"
}
</script>

<style scoped>
.styled-cols{
    margin-top: 30px;
    margin-right: 10px;
    margin-left:10px
}
.features{
    color: #f9004d;
    letter-spacing: 1px;
}

.svg-ico{
    color: #f9004d;

}

h1{
    font-size: 60px;
    font-weight: 700;
    color: #C4CFDE;
}

.rn-service {
	text-align: left;
	padding: 35px 50px 35px 50px;
	transition: 0.5s all ease-in-out;
	border-radius: 10px;
	background: linear-gradient(145deg,#1e2024,#23272b);
	box-shadow: 10px 10px 19px #1c1e22,-10px -10px 19px #262a2e;
}

.rn-service:hover {
	background: linear-gradient(to right bottom, #212428, #16181c);
	transition: .4s ease-in-out;
    transform: translateY(-3px);
}

/* .rn-service:hover > .svg-ico{
    display: none;
    transition: 1s;
}

.rn-service:hover > .arrow-icon{
    display: block;
    transition: 1s;

}

.arrow-icon{
    color: #f9004d;
    display:none
} */
</style>