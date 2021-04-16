<template>
  <div class="text-4xl transition duration-500 ease-in-out transform hover:-skew-x-12 ">
    <span class="text-yellow-500"> Cake </span>
      <span class="text-indigo-600">Menu</span>
  </div>
    <base-card :items="cakes"></base-card>

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