<template>
  <div class="wrapper">
    <div class="product-image">
      <img :src="image" />
    </div>

    <div class="product-info">
      <h1>{{ product }}</h1>
      <p v-show="onSaleView">On Sale</p>
      <p v-if="inventory > 10">in Stock</p>
      <p v-else-if="inventory <= 10 && inventory > 5">Almost Sold out</p>
      <p v-else-if="inventory <= 5 && inventory > 0">
        it's only {{ inventory }} left, HURRYY!!!!
      </p>
      <p v-else>Out of Stock</p>

      <div>
        <p>Details</p>
        <ul v-for="detail in details" :key="detail.index">
          <li>{{ detail }}</li>
        </ul>
      </div>
      <!-- <div>
        <ul v-for="variant in variants" :key="variant.variantId">
          <li>{{ variant.variantColor }}</li>
        </ul>
      </div> -->
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
      inventory: 5,
      onSale: true,
      details: ["80% cotton", "20% polyester", "Gender-neutral"],
      variants: [
        {
          variantId: 2234,
          variantColor: "green",
        },
        {
          variantId: 2235,
          variantColor: "blue",
        },
      ],
    };
  },
  methods: {
    onSaleView() {
      let data = this.inventory;
      if (data <= 5 && data > 0) {
        return (this.onSale = true);
      }
    },
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
