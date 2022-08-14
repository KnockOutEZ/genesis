<template>
  <section class="container mx-auto" id="portfolio">
    <div class="header text-center">
      <span class="subtitle">VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</span>
      <h1>My Portfolio</h1>
    </div>

    <div class="grid sm:grid-cols-1 md:grid-cols-3 gap-9 mx-5 md:mx-0 mt-20">
        <div v-for="projects in projects" :key="projects.id" aos-init aos-animate data-aos="fade-up" data-aos-delay="100">
          <div class="card rounded-lg shadow-lg w-full">
          <div class="cardImg">
            <img
              :src="projects.project_icon"
              :alt="projects.project_name"
              class="rounded-t-lg cardImg-2 m-auto"
            />
          </div>
          <div class="pt-5">
            <span class="subtitle1 mb-3">{{projects.project_skill_area}}</span>
            <div class="subtitle3">
                <a :href="projects.project_links" target="__blank" class="mb-2"
              >{{projects.project_name}}</a
            >
            <i class="fa fa-arrow-right arrow pl-2" aria-hidden="true"></i>
            </div>
          </div>
        </div>
        </div>

        <!-- <div   aos-init aos-animate data-aos="fade-up" data-aos-delay="300">
          <div class="card rounded-lg shadow-lg w-full">
          <div class="cardImg">
            <img
              src="../assets/images/image2.png"
              alt=""
              class="rounded-t-lg mx-auto cardImg-1"
            />
          </div>
          <div class="pt-5">
            <span class="subtitle1 mb-3">WEB DEVELOPMENT</span>
            <div class="subtitle3">
                <a href="https://www.shapla.xyz/" target="__blank" class="mb-2"
              >Shapla</a
            >
            <i class="fa fa-arrow-right arrow pl-2" aria-hidden="true"></i>
            </div>
          </div>
        </div>
        </div> -->

        <!-- <div   aos-init aos-animate data-aos="fade-up" data-aos-delay="100">
          <div class="card rounded-lg shadow-lg">
          <div class="cardImg ">
            <img
              src="https://images.unsplash.com/photo-1600054800747-be294a6a0d26?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80"
              alt=""
              class="rounded-t-lg"
            />
          </div>
          <div class="pt-5">
            <span class="subtitle1 mb-3">DEVELOPMENT</span>
            <div class="subtitle3">
                <a href="" target="__blank" class="mb-2"
              >This is a little bit better of a card!</a
            >
            <i class="fa fa-arrow-right arrow pl-2" aria-hidden="true"></i>
            </div>
          </div>
        </div>
        </div> -->

        <!-- <div   aos-init aos-animate data-aos="fade-up" data-aos-delay="300">
          <div class="card rounded-lg shadow-lg">
          <div class="cardImg">
            <img
              src="https://images.unsplash.com/photo-1600054800747-be294a6a0d26?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80"
              alt=""
              class="rounded-t-lg"
            />
          </div>
          <div class="pt-5">
            <span class="subtitle1 mb-3">DEVELOPMENT</span>
            <div class="subtitle3">
                <a href="" target="__blank" class="mb-2"
              >This is a little bit better of a card!</a
            >
            <i class="fa fa-arrow-right arrow pl-2" aria-hidden="true"></i>
            </div>
          </div>
        </div>
        </div> -->

        <!-- <div aos-init aos-animate data-aos="fade-up" data-aos-delay="500">
            <div class="card rounded-lg shadow-lg">
          <div class="cardImg">
            <img
              src="https://images.unsplash.com/photo-1600054800747-be294a6a0d26?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80"
              alt=""
              class="rounded-t-lg"
            />
          </div>
          <div class="pt-5">
            <span class="subtitle1 mb-3">DEVELOPMENT</span>
            <div class="subtitle3">
                <a href="" target="__blank" class="mb-2"
              >This is a little bit better of a card!</a
            >
            <i class="fa fa-arrow-right arrow pl-2" aria-hidden="true"></i>
            </div>
          </div>
        </div>
        </div> -->
      </div>

      <br><br><br><br>
    <div class="container mx-auto">
    <hr>
  </div>
  </section>
</template>

<script>
import axios from 'axios'
export default {
  name: "Portfolio",
  data() {
    return{
        projects: [],
    }
},
  mounted() {
    let self = this
      axios.get('https://go-smtp-client.herokuapp.com/1/myprojects')
      .then(function (response) {
        self.projects = response.data;
        console.log(self.projects)
      })
      .catch(function (error) {
        console.log(error);
      });
    }
};
</script>

<style scoped>
.card {
  text-align: left;
  padding: 30px;
  border-radius: 20px;
  background: linear-gradient(145deg, #1e2024, #23272b);
  box-shadow: 10px 10px 19px #1c1e22, -10px -10px 19px #262a2e;
  transition: 0.4s;
  display: inline-block;
}

.card:hover {
  transition: 0.4s;
  background: linear-gradient(to right bottom, #212428, #16181c);
  transform: scale(1.05, 1.05);
}

.subtitle {
  color: #f9004d;
  letter-spacing: 1px;
  display: block;
  line-height: 25px;
}

.subtitle1 {
  color: #f9004d;
  letter-spacing: 1px;
  display: block;
  line-height: 14px;
  font-size: 12px;
}

.subtitle3 {
  transition: 0.4s;
  color: #c4cfde;
  font-weight: 600;
  font-size: 23px;
  line-height: 34px;
}

.subtitle3:hover {
  color: #f9004d;
}

.arrow{
    transform: scale(0,0);
    transition: .4s;
}

.subtitle3:hover > .arrow{
    transform: scale(.8,.8);
    transition: .4s;

}

h1 {
  font-size: 60px;
  font-weight: 700;
  line-height: 1.2;
  color: #c4cfde;
  margin-top: 15px;
  margin-bottom: 0;
}

.cardImg{
  min-height: 230px;
}

.cardImg-2{
  padding-top: 20%;
  max-height: 230px;
}
.cardImg-1{
  padding-top: 25%;
}
</style>