import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import router from './router'
import BaseCard from './components/BaseCard.vue'

createApp(App).use(router).component('base-card',BaseCard).mount('#app')
