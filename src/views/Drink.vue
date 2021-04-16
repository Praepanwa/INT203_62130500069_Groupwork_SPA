<template>
  <div class="text-4xl transition duration-500 ease-in-out transform hover:-skew-x-12 ">
      <span class="text-yellow-500">Drinks </span>
      <span class="text-indigo-600">Menu</span>
</div>
<base-card :items="drinks"></base-card>
</template>

<script>
import BaseCard from '../components/BaseCard.vue'
export default {
  components: { BaseCard },
data(){
    return{
        drinks:[
            {id:1, name:'White cold brew coffee', img: require('@/assets/Menu/drinks/1.jpg'),price:80},
            {id:2, name:'Black cold brew coffee', img: require('@/assets/Menu/drinks/2.jpg'),price:80},
            {id:3, name:'Matcha latte', img: require('@/assets/Menu/drinks/3.jpg'),price:80},
            {id:4, name:'Dark-Cocoa', img: require('@/assets/Menu/drinks/4.jpg'),price:80},
            {id:5, name:'Milk-tea', img: require('@/assets/Menu/drinks/5.jpg'),price:80}]
    }
}
}
</script>

<style>
.img{
    width: 10%;
}
</style>