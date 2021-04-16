<template>
  <h1 class="text-4xl transition duration-500 ease-in-out transform hover:-skew-x-12 ">
      <span class="text-yellow-500">Donut </span>
      <span class="text-indigo-600">Menu</span></h1>
  <base-card :items="donuts"></base-card>
</template>

<script>

export default {
 
data(){
    return{
        donuts:[
            {id:1, name:'Becon-cheeda cheese', img: require('@/assets/Menu/donut/1.jpg'),price:95},
            {id:2, name:'Lemon meringue', img: require('@/assets/Menu/donut/2.jpg'),price:95},
            {id:3, name:'Raspberry Rose', img: require('@/assets/Menu/donut/3.jpg'),price:95},
            {id:4, name:'Creme brulee', img: require('@/assets/Menu/donut/4.jpg'),price:95},
            {id:5, name:'Nutella and Hazelnut', img: require('@/assets/Menu/donut/5.jpg'),price:95}]
    }
}
}
</script>

<style>
.img{
    width: 10%;
}
</style>