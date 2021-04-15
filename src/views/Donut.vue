<template>
  <h1>Donut Menu</h1>
  <div v-for="donut in donuts" :key="donut.id">
      <img :src="donut.img" />
      <h3>price : {{donut.name}}</h3>
  </div>
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