<template>
  <nav class="nav sticky top-0" :class="{change_color: scrollPosition > 50}">
    <input type="checkbox" id="check" />
    <label for="check" class="checkbtn">
      <i class="fas fa-bars"></i>
    </label>
    <label class="logo" :class="{change_logo: scrollPosition > 50,change_logo1:scrollPosition > 0}">Genesis</label>
    <ul class="navbarul">
      <li><a @click="tab='home'" :class="[isActive1==true ? 'active' : '', 'inactive']" href="#" class="navbutton mx-3">HOME</a></li>
      <li><a @click="tab='features'" :class="[isActive2==true ? 'active' : '', 'inactive']" href="#features" class="navbutton mx-3">FEATURES</a></li>
      <li><a @click="tab='resume'" :class="[isActive3==true ? 'active' : '', 'inactive']" href="#resume" class="navbutton mx-3">RESUME</a></li>
      <li><a @click="tab='portfolio'" :class="[isActive4==true ? 'active' : '', 'inactive']" href="#portfolio" class="navbutton mx-3">PORTFOLIO</a></li>
      <!-- <li><a class="navbutton mx-3">CLIENTS</a></li> -->
      <!-- <li><a class="navbutton mx-3">PRICING</a></li> -->
      <li><a @click="tab='contact'" :class="[isActive5==true ? 'active' : '', 'inactive']" href="#contact" class="navbutton mx-3">CONTACT</a></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return{
        scrollPosition: null,
        tab:'home'
    }
},
props:{
  isActive1:Boolean,
  isActive2:Boolean,
  isActive3:Boolean,
  isActive4:Boolean,
  isActive5:Boolean,
},
  methods: {
    updateScroll() {
       this.scrollPosition = window.scrollY
    }
},

mounted() {
    window.addEventListener('scroll', this.updateScroll);
}
};
</script>

<style scoped>
.change_color{
    background: #212428de;
    box-shadow: 10px 10px 19px #1c1e22,-10px -10px 19px #262a2e;
    transition: 0.3s;
}

.change_logo1{
  font-size: 28px !important;
  transition: .2s ease-in-out;

}

.change_logo{
  font-size: 40px !important;
  transition: .2s ease-in-out;
}

nav {
  z-index: 900 !important;
  height: 80px;
  width: 100%;
}
label.logo {
  color: white;
  font-size: 28px;
  line-height: 80px;
  padding: 0 40px;
  font-weight: bold;
}
nav ul {
  float: right;
  margin-right: 20px;
}
nav ul li {
  display: inline-block;
  line-height: 80px;
  margin: 0 5px;
}
nav ul li a {
  color: white;
  font-size: 17px;
  padding: 7px 13px;
  border-radius: 3px;
}
a.active,
a:hover {
  transition: 0.5s;
}
.checkbtn {
  font-size: 30px;
  color: white;
  float: right;
  line-height: 80px;
  margin-right: 40px;
  cursor: pointer;
  display: none;
}
#check {
  display: none;
}

/*--------------------------*/
/*----- MEDIA QUERRY -----*/
/*--------------------------*/

@media (max-width: 952px) {
  label.logo {
    font-size: 30px;
    padding-left: 50px;
  }
  nav ul li a {
    font-size: 16px;
  }
}

@media (max-width: 858px) {
  .checkbtn {
    display: block;
  }
  ul {
    position: fixed;
    width: 100%;
    height: 100vh;
    top: 80px;
    left: -100%;
    top: 80px;
    transition: all 0.5s;
    text-align: center;
    background-color: #212428;
  }
  nav ul li {
    display: block;
    margin: 50px 0;
    line-height: 30px;
  }
  nav ul li a {
    font-size: 20px;
  }
  a:hover,
  a.active {
    background: none;
    
  }

  #check:checked ~ ul {
    left: 0;
  }
}

.navbutton{
    font-size: 13px;
}

.navbutton:hover{
    color: white !important;
    cursor: none;
}

.active{
  color: #F9004D !important;
    cursor: pointer;
}

.navbarul:hover .navbutton{
    color: gray;
    transition: 0.5s;
}
</style>>