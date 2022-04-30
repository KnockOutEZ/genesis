<template>
  <Navbar class="scrollme1" :isActive1 = 'isActive1' :isActive2 = 'isActive2' :isActive3 = 'isActive3' :isActive4 = 'isActive4' :isActive5 = 'isActive5'/>
  <section id="home" class=" scrollme1">
    <section class="px-5 md:mx-auto pt-20 md:pt-32 container">
      <!-- <div class="particles">
      <img
          class="banner ml-auto my-auto"
          src="../assets/images/banner-01.png"
          alt=""
        />
    </div> -->
      <div class="grid grid-cols-2">
      <div class="md:col-span-1 mt-auto col-span-2 order-2 md:order-1 text mt-auto">
        <div class="">
          <p class="text-sm">WELCOME TO MY WORLD</p>
          <h1 class="text-2xl">
            Hi, I'm <br> <span style="color: #ff014f">Towhid Khan</span>
          </h1>
          <div class="container headerText">
            <p>
              a <span class="typed-text"></span
              ><span class="cursor1">&nbsp;</span>
            </p>
          </div>
          <p >I am a Front End Web Developer.I enjoy using my skills to contribute to the exciting technological
advances that happen every day.</p>

    <div class=" mt-20 find scrollme">
      <p>FIND WITH ME</p>
      <div class="flex mt-3">
        <a href="https://www.facebook.com/towhid.khan.9699" target="__blank" class="flex-initial social-buttons mr-5 px-5 py-4 rounded">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
      </a>
      <a href="https://www.instagram.com/leaguepagla69/" target="__blank" class="flex-initial social-buttons mx-5 px-5 py-4 rounded">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
      </a>
      <a href="https://www.linkedin.com/in/towhid-khan-b2504b207/" target="__blank" class="flex-initial social-buttons mx-5 px-5 py-4 rounded">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
      </a>
      </div>
    </div>
        </div>
      </div>
      <div class=" md:col-span-1 flex  col-span-1 order-1 md:order-2 ">
        <vue-particles color="#dedede"
        :particleOpacity="0.7"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="4"
        linesColor="#dedede"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
        class="w-full">
        </vue-particles>
      </div>
    </div>
    </section>
  </section>
<div class="scrollme2 pt-32">
   <Features/>
</div>
   <div class="scrollme3">
     <br><br><br><br>
   <Resume/>
   </div>

   <div class="scrollme4">
     <br><br><br><br>
   <Portfolio/>
   </div>

   <div class="scrollme5">
     <br><br><br><br>
   <Contact />
   </div>

  <a href="#"><button class="px-5 py-4 rounded-full fixed upBtn"><i class="fas fa-arrow-up"></i></button></a>
</template>

<script>
import Features from '../components/Features.vue'
import Resume from '../components/Resume.vue'
import Portfolio from '../components/Portfolio.vue'
import Navbar from '@/components/Navbar'
import Contact from '../components/Contact.vue'
export default {
  name: "Home",
  data () {
    return {
      isActive1: false,
      isActive2: false,
      isActive3: false,
      isActive4: false,
      isActive5: false,
    }
  },
  components: {Features,Resume,Portfolio,Contact,Navbar},
  mounted() {
    const typedTextSpan = document.querySelector(".typed-text");
    const cursor1Span = document.querySelector(".cursor1");

    const textArray = [
      "Professional Coder",
      "Web Developer",
      "Graphics Designer",
    ];
    const typingDelay = 100;
    const erasingDelay = 100;
    const newTextDelay = 1000; // Delay between current and next text
    let textArrayIndex = 0;
    let charIndex = 0;

    function type() {
      if (charIndex < textArray[textArrayIndex].length) {
        if (!cursor1Span.classList.contains("typing"))
          cursor1Span.classList.add("typing");
        typedTextSpan.textContent +=
          textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
      } else {
        cursor1Span.classList.remove("typing");
        setTimeout(erase, newTextDelay);
      }
    }

    function erase() {
      if (charIndex > 0) {
        if (!cursor1Span.classList.contains("typing"))
          cursor1Span.classList.add("typing");
        typedTextSpan.textContent = textArray[textArrayIndex].substring(
          0,
          charIndex - 1
        );
        charIndex--;
        setTimeout(erase, erasingDelay);
      } else {
        cursor1Span.classList.remove("typing");
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
      }
    }

    document.addEventListener("DOMContentLoaded", function () {
      // On DOM Load initiate the effect
      if (textArray.length) setTimeout(type, newTextDelay + 10);
    });
  },

  methods:{
    handleScroll () {
      const els1 = document.querySelectorAll('.scrollme1')
      const els2 = document.querySelectorAll('.scrollme2')
      const els3 = document.querySelectorAll('.scrollme3')
      const els4 = document.querySelectorAll('.scrollme4')
      const els5 = document.querySelectorAll('.scrollme5')
      els1.forEach((el) => {
        const elTop = el.getBoundingClientRect().top
        const elBottom = el.getBoundingClientRect().bottom
        console.log(elBottom)
        if (elTop >= 0 || elBottom <= 0) {
          this.isActive1 = false
          
        } if (elTop <= 0 && elBottom >= 0) {
          this.isActive1 = true
          
        } 
      })
      els2.forEach((el) => {
        const elTop = el.getBoundingClientRect().top
        const elBottom = el.getBoundingClientRect().bottom
        console.log(elBottom)
        if (elTop >= 0 || elBottom <= 0) {
          this.isActive2 = false
          
        } if (elTop <= 0 && elBottom >= 0) {
          this.isActive2 = true
          
        } 
      })
      els3.forEach((el) => {
        const elTop = el.getBoundingClientRect().top
        const elBottom = el.getBoundingClientRect().bottom
        console.log(elBottom)
        if (elTop >= 0 || elBottom <= 0) {
          this.isActive3 = false
          
        } if (elTop <= 0 && elBottom >= 0) {
          this.isActive3 = true
          
        } 
      })
      els4.forEach((el) => {
        const elTop = el.getBoundingClientRect().top
        const elBottom = el.getBoundingClientRect().bottom
        console.log(elBottom)
        if (elTop >= 0 || elBottom <= 0) {
          this.isActive4 = false
          
        } if (elTop <= 0 && elBottom >= 0) {
          this.isActive4 = true
          
        } 
      })
      els5.forEach((el) => {
        const elTop = el.getBoundingClientRect().top
        const elBottom = el.getBoundingClientRect().bottom
        console.log(elBottom)
        if (elTop >= 0 || elBottom <= 0) {
          this.isActive5 = false
          
        } if (elTop <= 0 && elBottom >= 0) {
          this.isActive5 = true
          
        } 
      })
      
    }
  },

  created(){
    window.addEventListener('scroll', this.handleScroll);
  },

  unmounted(){
    window.removeEventListener('scroll', this.handleScroll);
  }
};
</script>

<style scoped>
@media only screen and (max-width: 600px) {
  .particles{
    display: none;
}
  .find{
    margin-top: 50px;
  }
  .text{
    margin-top: -95px;
    width: 350px;
  }
  .banner {
    margin-top: -50px;
    margin-left: -80px;
transform: scale(.7,.7);
}
}
hr {
  border: 1px solid #121415;
}
.banner {
z-index: 100;

  min-height: 700px;
  min-width: 515px;
  max-height: 701px;
  max-width: 516px;
}

h1 {
  font-size: 60px;
  line-height: 75px;
  font-weight: 700;
}
.typed-text {
  font-weight: 700 !important;
  font-size: 50px;
}
.headerText {
  font-size: 60px;
  line-height: 75px;
  font-weight: 700;
}
.container p span.typed-text {
  font-weight: normal;
  color: #ffffff;
}
.container p span.cursor1 {
  display: inline-block;
  background-color: #ccc;
  margin-left: 0.1rem;
  width: 3px;
  animation: blink 1s infinite;
}
.container p span.cursor1.typing {
  animation: none;
}
@keyframes blink {
  0% {
    background-color: #ccc;
  }
  49% {
    background-color: #ccc;
  }
  50% {
    background-color: transparent;
  }
  99% {
    background-color: transparent;
  }
  100% {
    background-color: #ccc;
  }
}

.social-buttons:hover{
transform: translateY(-3px);
transition: .4s ease-in-out;
background: rgb(24, 24, 24);
}

.social-buttons{
  background: linear-gradient(145deg,#1e2024,#23272b);
  box-shadow: 10px 10px 19px #1c1e22,-10px -10px 19px #2c2a2e;
}

.particles{
  z-index: 55;
  position: relative;
  margin-bottom: -100vh;
}

@media screen and (min-width: 1600px) {
.particles{
  z-index: 55;
  position: relative;
  margin-bottom: -60vh;
}
}
</style>
