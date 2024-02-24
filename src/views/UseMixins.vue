<template>
  <p>{{ fullName }}</p>
  <p>{{ average }}</p>
  <!-- <div><input type="text" v-model="search" /></div> -->
  <div><input type="number" min="12" v-model="price" /></div>
  <div>
    <div v-if="findByPrice.length" class="container">
      <div class="products" v-for="product in findByPrice" :key="product.id">
        <p>{{ product.brand }}</p>
        <p>{{ product.category }}</p>
        <p>{{ product.price }}</p>
        <img :src="product.thumbnail" width="100px" height="100px" alt="" />
        <p>......................................................</p>
      </div>
    </div>
    <div v-else-if="!findByPrice.length">loading ...</div>
  </div>
</template>
<script>
import ProductMixins from "@/mixins/ProductsMixin";
export default {
  data() {
    return {
      firstName: "ali",
      lastName: "mahmoud",
      search: "",
      price: "",
      grads: [18, 17, 20, 19, 18],
    };
  },
  mixins: [ProductMixins],
  computed: {
    fullName() {
      return this.firstName + " " + this.lastName;
    },
    average() {
      const sum = this.grads.reduce((acc, current) => {
        return acc + current;
      }, 0);
      return sum / this.grads.length;
    },
    searchByBrand() {
      return this.products.filter((product) =>
        product.brand.match(this.search)
      );
    },
    findByPrice() {
      console.log("findByPrice");
      if (!this.price) {
        return this.products;
      }
      return this.products.filter((ele) => ele.price <= this.price);
    },
  },
};
</script>
<style>
.products {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.container {
  display: grid;
  grid-template-columns: auto auto auto auto auto;
}
</style>
