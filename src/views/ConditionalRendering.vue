<template>
  <div class="wrapper">
    <div class="product-image">
      <img :src="image" />
    </div>

    <div class="product-info">
      <h1>{{ product }}</h1>
      <p v-if="inventory > 10">in Stock</p>
      <p v-else-if="inventory <= 10 && inventory > 5">Almost Sold out</p>
      <p v-else-if="inventory <= 5 && inventory > 0">
        it's only {{ inventory }} left, HURRYY!!!!
      </p>
      <p v-else>Out of Stock</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: "Socks",
      image:
        "https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg",
      link:
        "https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=socks",
      inStock: false,
      inventory: 6,
    };
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  justify-content: space-around;
  /* align-items: center; */
  padding: 8em;
}
.product-image img {
  height: 120px;
  width: 100px;
  border: solid 1px grey;
  padding: 3em;
}
.product-info {
  text-align: left;
  padding-left: 0;
}
</style>
