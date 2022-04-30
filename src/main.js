import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import './assets/tailwind.css'
import VueParticles from 'vue-particles'
import loader from "vue-ui-preloader";

createApp(App).use(router).use(loader).use(VueParticles).mount('#app')
