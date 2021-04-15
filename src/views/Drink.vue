<template>
  <h1>Drinks Menu</h1>
  <div v-for="drink in drinks" :key="drink.id">
      <img :src="drink.img" />
      <h3>{{drink.name}}</h3>
      <p>price : {{drink.price}}</p>
  </div>
</template>

<script>
export default {
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