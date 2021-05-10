<template>
  <div class="wrapper">
    <div class="product-image">
      <img :src="image" />
    </div>

    <div class="product-info">
      <h1>{{ product }}</h1>
      <h1>{{ "cart (" + cart + ")" }}</h1>
      <p v-show="inventory <= 3 && inventory > 0">On Sale</p>
      <p v-if="inventory > 10">in Stock</p>
      <p v-else-if="inventory === 0" :class="{ garis: inventory === 0 }">
        Out of Stock
      </p>
      <p v-else-if="inventory <= 10 && inventory > 5">Almost Sold out</p>
      <p v-else-if="inventory <= 5 && inventory > 0">
        it's only {{ inventory }} left, HURRYY!!!!
      </p>

      <div>
        <ul v-for="(detail, index) in details" :key="index">
          <li>{{ detail }}</li>
        </ul>
      </div>
      <div>
        <h3>colors:</h3>
        <div
          class="color-box"
          v-for="variant in variants"
          :key="variant.variantId"
          :style="{ backgroundColor: variant.variantColor }"
          @mouseover="updateProduct(variant.variantImage)"
        ></div>
      </div>
      <button :disabled="inventory == 0" @click="addToCart">Add to Cart</button>
      <div class="cart-controller">
        <button v-if="cart == 0" disabled>-</button>
        <button v-else @click="decrementCart">-</button>
        <h1>{{ cart }}</h1>
        <button
          :disabled="inventory == 0 && cart === inventory"
          @click="incrementCart"
        >
          +
        </button>
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
      inventory: 0,
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
  computed: {},
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
.color-box {
  width: 60px;
  height: 60px;
  border: grey solid 1px;
  padding: auto;
}
.garis {
  text-decoration: line-through;
}
</style>
