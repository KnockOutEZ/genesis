<template>
  <Home/>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Home from './views/Home.vue'
export default {
  components:{
    Home
  },
    created(){
    AOS.init();
  },
}
</script>

<style>
hr {
  border: 1px solid #121415;
}
.container1{
  padding-left:40px;
  margin-right: 43px;
}

.upBtn{
  z-index: 100 !important;
  background: #212428;
  position: absolute;
  right: 2vh;
  bottom: 2vw;
  box-shadow: 10px 10px 19px #1c1e22,-10px -10px 19px #262a2e;
  cursor:none
}

.upBtn:hover{
  color: #F9004D;
  transform: translateY(-3px);
transition: .4s ease-in-out;
background: rgb(24, 24, 24);
}
</style>
