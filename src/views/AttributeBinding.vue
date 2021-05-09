<template>
  <div class="wrapper">
    <div class="product-image">
      <img :src="image" />
    </div>

    <div class="product-info">
      <h1>{{ product }}</h1>
      <a :href="link" target="_blank">More products like this</a>
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
