<template>
  <section id="resume" class="container mx-auto">
    <div class="text-center">
      <p class="subtitle">1+ years of experience</p>
      <h1>My Resume</h1>
    </div>
    <br /><br /><br />

    <div class="grid sm:grid-cols-1 md:grid-cols-3 bar1">
      <button
        @click="tab = 'education'"
        :class="{ active: tab == 'education' }"
        class="py-8 rounded-lg navBtn width"
      >
        Education
      </button>
      <button
        @click="tab = 'professional'"
        :class="{ active: tab == 'professional' }"
        class="py-8 rounded-lg navBtn width"
      >
        Professional Skills
      </button>
      <button
        @click="tab = 'experience'"
        :class="{ active: tab == 'experience' }"
        class="py-8 rounded-lg navBtn width"
      >
        Experience
      </button>
    </div>

    <div v-if="tab == 'professional'">
      <div class="grid md:grid-cols-2 sm:grid-cols-1 gap-9 m-5 md:m-0">
        <div class="wrapper">
          <h2></h2>
          <div class="skills">
            <div class="details">
              <span>HTML</span>
              <span>75%</span>
            </div>
            <div class="bar">
              <div id="html-bar"></div>
            </div>
          </div>
          <div class="skills">
            <div class="details">
              <span>CSS</span>
              <span>75%</span>
            </div>
            <div class="bar">
              <div id="css-bar"></div>
            </div>
          </div>
          <div class="skills">
            <div class="details">
              <span>Javascript</span>
              <span>65%</span>
            </div>
            <div class="bar">
              <div id="javascript-bar"></div>
            </div>
          </div>
          <div class="skills">
            <div class="details">
              <span>jQuery</span>
              <span>50%</span>
            </div>
            <div class="bar">
              <div id="jQuery-bar"></div>
            </div>
          </div>
          <div class="skills">
            <div class="details">
              <span>Vue Js</span>
              <span>60%</span>
            </div>
            <div class="bar">
              <div id="vuejs-bar"></div>
            </div>
          </div>
        </div>

        <div class="wrapper">
          <h2></h2>
          <div class="skills">
            <div class="details">
              <span>Bootstrap</span>
              <span>75%</span>
            </div>
            <div class="bar">
              <div id="bootstrap-bar"></div>
            </div>
          </div>
          <div class="skills">
            <div class="details">
              <span>Tailwind CSS</span>
              <span>75%</span>
            </div>
            <div class="bar">
              <div id="tailwind-bar"></div>
            </div>
          </div>
          <div class="skills">
            <div class="details">
              <span>Photoshop</span>
              <span>68%</span>
            </div>
            <div class="bar">
              <div id="ps-bar"></div>
            </div>
          </div>
          <div class="skills">
            <div class="details">
              <span>Illustrator</span>
              <span>68%</span>
            </div>
            <div class="bar">
              <div id="illustrator-bar"></div>
            </div>
          </div>
          <div class="skills">
            <div class="details">
              <span>SASS</span>
              <span>65%</span>
            </div>
            <div class="bar">
              <div id="sass-bar"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="tab == 'education'">
      <div class="grid sm:grid-cols-1 md:grid-cols-2 mt-10 gap-9 mx-5 md:mx-0">
        <div aos-init aos-animate data-aos="fade-up" data-aos-delay="300">
          <div class="rn-service">
            <div class="heading">
              <h3>Adamjee Cantonment College</h3>
              <span class="sub">JSC (2017-2017)</span>
            </div>

            <br /><br />
            <hr />
            <br />

            <p class="inner">
              My personal philosophy when it comes to education and learning is
              closely related to several cognitive theories of motivation.
            </p>
          </div>
        </div>

        <div aos-init aos-animate data-aos="fade-up" data-aos-delay="100">
          <div class="rn-service">
            <div class="heading">
              <h3>Greenfield School & College</h3>
              <span class="sub">SSC (2018-2020)</span>
            </div>

            <br /><br />
            <hr />
            <br />

            <p class="inner">
              Learning is complex phenomena,learning can be fine example of
              vertical progress or example of horizontal progress.
            </p>
          </div>
        </div>

        <!-- <div  aos-init aos-animate data-aos="fade-up" data-aos-delay="100">
          <div class="rn-service">
          <div class="heading">
            <h3>Greenfield School & College</h3>
            <span class="sub">SSC (2018-2020)</span>
          </div>

            <br><br><hr><br>

          <p class="inner">
            The education should be very interactual. Ut tincidunt est ac dolor
            aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in,
            lobortis mauris hendrerit ante.
          </p>
        </div>
        </div> -->

        <!-- <div  aos-init aos-animate data-aos="fade-up" data-aos-delay="300">
          <div class="rn-service">
          <div class="heading">
            <h3>Greenfield School & College</h3>
            <span class="sub">SSC (2018-2020)</span>
          </div>

            <br><br><hr><br>

          <p class="inner">
            The education should be very interactual. Ut tincidunt est ac dolor
            aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in,
            lobortis mauris hendrerit ante.
          </p>
        </div>
        </div> -->
      </div>
    </div>

    <div v-if="tab == 'experience'">
      <div class="grid sm:grid-cols-1 md:grid-cols-2 mt-10 gap-9 mx-5 md:mx-0">
        <div aos-init aos-animate data-aos="fade-up" data-aos-delay="100">
          <div class="rn-service">
            <div class="heading">
              <h3>Techynaf Technologies Limited</h3>
              <span class="sub">Front End Web Developer</span>
            </div>

            <br /><br />
            <hr />
            <br />

            <p class="inner">
              Techynaf is a Dhaka based tech startup company aims to provide
              top-notch IT solutions to local and international customers.
            </p>
          </div>
        </div>

        <!-- <div aos-init aos-animate data-aos="fade-up" data-aos-delay="300">
          <div class="rn-service">
            <div class="heading">
              <h3>Techynaf Technologies Limited</h3>
              <span class="sub">Front End Web Developer</span>
            </div>

            <br /><br />
            <hr />
            <br />

            <p class="inner">
              The education should be very interactual. Ut tincidunt est ac
              dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem
              in, lobortis mauris hendrerit ante.
            </p>
          </div>
        </div> -->

        <!-- <div aos-init aos-animate data-aos="fade-up" data-aos-delay="100">
          <div class="rn-service">
            <div class="heading">
              <h3>Techynaf Technologies Limited</h3>
              <span class="sub">Front End Web Developer</span>
            </div>

            <br /><br />
            <hr />
            <br />

            <p class="inner">
              The education should be very interactual. Ut tincidunt est ac
              dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem
              in, lobortis mauris hendrerit ante.
            </p>
          </div>
        </div> -->

        <!-- <div aos-init aos-animate data-aos="fade-up" data-aos-delay="300">
          <div class="rn-service">
            <div class="heading">
              <h3>Techynaf Technologies Limited</h3>
              <span class="sub">Front End Web Developer</span>
            </div>

            <br /><br />
            <hr />
            <br />

            <p class="inner">
              The education should be very interactual. Ut tincidunt est ac
              dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem
              in, lobortis mauris hendrerit ante.
            </p>
          </div>
        </div> -->
      </div>
    </div>
  </section>
  <br /><br /><br /><br />
  <div class="container mx-auto">
    <hr />
  </div>
</template>

<script>
export default {
  name: "Resume",
  data() {
    return {
      tab: "education",
    };
  },
};
</script>

<style scoped>
.rn-service:hover > .inner {
  color: #ffffff;
}

.inner {
  font-size: 18px;
  line-height: 28px;
  color: #878e99;
  transition: 0.4s;
}

h3 {
  font-size: 24px;
  line-height: 39px;
  margin-bottom: 7px;
  font-weight: 500;
}

.sub {
  color: #7c838e;
  font-size: 14px;
}

@media only screen and (max-width: 600px) {
  .width {
    width: 100vw;
  }
}

.active {
  color: #ff014f;
  background-color: transparent;
  border-color: transparent;
  border: 0 none;
  background: linear-gradient(145deg, #1e2024, #23272b);
  box-shadow: 10px 10px 19px #1c1e22, -10px -10px 19px #262a2e;
  transition: 0.4s ease-in-out;
}
.navBtn {
  font-weight: 500;
}
.bar1 {
  border: 0 none;
  border-radius: 10px;
  background: linear-gradient(145deg, #1e2024, #23272b);
  box-shadow: 10px 10px 19px #1c1e22, -10px -10px 19px #262a2e;
  justify-content: space-between;
}
.navBtn:hover {
  color: #ff014f;
  background-color: transparent;
  border-color: transparent;
  border: 0 none;
  background: linear-gradient(145deg, #1e2024, #23272b);
  box-shadow: 10px 10px 19px #1c1e22, -10px -10px 19px #262a2e;
  transition: 0.2s ease-in-out;
}
h1 {
  font-size: 60px;
  font-weight: 700;
  color: #c4cfde;
}

.subtitle {
  color: #f9004d;
  letter-spacing: 1px;
  display: block;
  line-height: 14px;
}

.wrapper {
  width: 100%;
}

.container1 {
  width: 100%;
  padding: 30px 30px 50px;
  border-radius: 10px;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.2);
}

h2 {
  margin: 50px 0px;
  font-size: 30px;
  font-weight: 700;
  color: #c4cfde;
}

.details {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.bar {
  border: 1px solid black;

  border-radius: 20px;
  background: black;
}

.bar div {
  width: 0;
  height: 9px;
  border-radius: 10px;
  background: linear-gradient(145deg, #f02981 0%, #c81901 100%);
}

.skills:not(:last-child) {
  margin-bottom: 30px;
}

#html-bar {
  animation: html-fill 2s forwards;
}

@keyframes html-fill {
  100% {
    width: 75%;
  }
}

#css-bar {
  animation: css-fill 2s forwards;
}

@keyframes css-fill {
  100% {
    width: 75%;
  }
}

#javascript-bar {
  animation: js-fill 2s forwards;
}

@keyframes js-fill {
  100% {
    width: 65%;
  }
}

#jQuery-bar {
  animation: jQuery-fill 2s forwards;
}

@keyframes jQuery-fill {
  100% {
    width: 50%;
  }
}

#vuejs-bar {
  animation: vuejs-fill 2s forwards;
}

@keyframes vuejs-fill {
  100% {
    width: 60%;
  }
}

#bootstrap-bar {
  animation: bootstrap-fill 2s forwards;
}

@keyframes bootstrap-fill {
  100% {
    width: 75%;
  }
}

#tailwind-bar {
  animation: tailwind-fill 2s forwards;
}

@keyframes tailwind-fill {
  100% {
    width: 75%;
  }
}

#ps-bar {
  animation: ps-fill 2s forwards;
}

@keyframes ps-fill {
  100% {
    width: 68%;
  }
}

#illustrator-bar {
  animation: illustrator-fill 2s forwards;
}

@keyframes illustrator-fill {
  100% {
    width: 68%;
  }
}

#sass-bar {
  animation: sass-fill 2s forwards;
}

@keyframes sass-fill {
  100% {
    width: 65%;
  }
}

.rn-service {
  text-align: left;
  padding: 35px 50px 35px 50px;
  border-radius: 10px;
  background: linear-gradient(145deg, #1e2024, #23272b);
  transition: 0.4s;
  box-shadow: 10px 10px 19px #1c1e22, -10px -10px 19px #262a2e;
}

.rn-service:hover {
  background: linear-gradient(to right bottom, #212428, #16181c);
  transition: 0.4s;
  transform: translateY(-5px);
}

button{
  cursor: none;
}
</style>