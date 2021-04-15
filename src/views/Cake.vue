<template>
  <h1>Cake Menu</h1>
  <div v-for="cake in cakes" :key="cake.id">
      <img :src="cake.img" alt="" />
      <p>{{cake.name}}</p>
      <p>price : {{cake.price}}</p>
  </div>
</template>

<script>
export default {
data(){
     return{
        cakes:[
            {id:1, name:'Banoffee Cake', img: require('@/assets/Menu/cake/1.jpg'),price:80},
            {id:2, name:'Basque burnt cheesecake', img: require('@/assets/Menu/cake/2.jpg'),price:160},
            {id:3, name:'Chocolate Cheesecake', img: require('@/assets/Menu/cake/3.jpg'),price:70},
            {id:4, name:'Tiramisu Cake', img: require('@/assets/Menu/cake/4.jpg'),price:95},
            {id:5, name:'New York Cheesecake', img: require('@/assets/Menu/cake/5.jpg'),price:90},
            {id:6, name:'Ovaltine Crepe Cake', img: require('@/assets/Menu/cake/6.jpg'),price:65},
            {id:7, name:'Thai Tea Crepe', img: require('@/assets/Menu/cake/7.jpg'),price:65},
            {id:7, name:'Chocolate Brownie', img: require('@/assets/Menu/cake/8.jpg'),price:55}
            ]
    }
}
}
</script>

<style>

</style>