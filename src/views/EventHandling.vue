<template>
  <div class="wrapper">
    <div class="product-image">
      <img :src="image" />
    </div>

    <div class="product-info">
      <h1>{{ product }}</h1>
      <h1>{{ "cart (" + cart + ")" }}</h1>
      <p v-show="onSaleView">On Sale</p>
      <p v-if="inventory > 10">in Stock</p>
      <p v-else-if="inventory <= 10 && inventory > 5">Almost Sold out</p>
      <p v-else-if="inventory <= 5 && inventory > 0">
        it's only {{ inventory }} left, HURRYY!!!!
      </p>
      <p v-else>Out of Stock</p>

      <div>
        <ul v-for="(detail, index) in details" :key="index">
          <li>{{ detail }}</li>
        </ul>
      </div>
      <div>
        <h3>colors:</h3>
        <div v-for="variant in variants" :key="variant.variantId">
          <p @mouseover="updateProduct(variant.variantImage)">
            {{ variant.variantColor }}
          </p>
        </div>
      </div>
      <button @click="addToCart">Add to Cart</button>
      <div class="cart-controller">
        <button v-if="cart == 0" disabled>-</button>
        <button v-else @click="decrementCart">-</button>
        <h1>{{ cart }}</h1>
        <button @click="incrementCart">+</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cart: 0,
      product: "Socks",
      inStock: false,
      inventory: 5,
      onSale: true,
      details: ["80% cotton", "20% polyester", "Gender-neutral"],
      variants: [
        {
          variantId: 2234,
          variantColor: "green",
          variantImage:
            "https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg",
        },
        {
          variantId: 2235,
          variantColor: "blue",
          variantImage:
            "https://www.vuemastery.com/images/challenges/vmSocks-blue-onWhite.jpg",
        },
      ],
      image:
        "https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg",
      link:
        "https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=socks",
    };
  },
  methods: {
    onSaleView() {
      let data = this.inventory;
      if (data <= 5 && data > 0) {
        return (this.onSale = true);
      }
    },

    addToCart() {
      this.cart += 1;
    },
    decrementCart() {
      this.cart -= 1;
    },
    incrementCart() {
      this.cart += 1;
    },

    updateProduct(image) {
      this.image = image;
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
.cart-controller {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.cart-controller button {
  width: 30px;
  height: 30px;
  align-items: center;
}
</style>
