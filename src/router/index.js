import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Drink from '../views/Drink.vue'
import Donut from '../views/Donut.vue'
import Cake from '../views/Cake.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/drinks',
    name: 'Drinks',
    component:Drink
  },
  {
    path: '/donuts',
    name:'Donuts',
    component:Donut
  },
  {
    path:'/cakes',
    name:'Cakes',
    component:Cake
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
