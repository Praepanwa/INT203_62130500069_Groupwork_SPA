<template>
  <div class="content">
    <slot>
      <div class="grid grid-cols-3 gap-4 p-3">
        <div v-for="item in items" :key="item.id">
          <img :src="item.img" />
          <h3>{{item.name}}</h3>
          <h3>price : {{ item.price}}</h3>
        </div>
      </div>
    </slot>
  </div>
</template>

<script>
export default {
  props: ["items"],
};
</script>

<style scoped>
.bgvdo {
  display: block;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  max-width: none;
  opacity: 50%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
#bg-viewport {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;
}

.content {
  width: 100%;
  max-width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 0;
  position: relative;
  z-index: 2;
}
</style>