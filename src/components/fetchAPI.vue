<template>
  <div class="container">
    <p v-setBackground="'yellow'">local Directive</p>
    <p v-fontSize="40" v-color="'red'" v-backGround="'black'">fetchAPI</p>
    <!-- <div class="products" v-for="product in products" :key="product.id">
      <p>{{ product.brand }}</p>
      <p>{{ product.category }}</p>
      <p>{{ product.price }}</p>
      <img :src="product.thumbnail" width="100px" height="100px" alt="" />
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
    };
  },
  methods: {
    fetchData() {
      fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((json) => {
          console.log({ json });
          this.products = json.products;
        });
    },
  },
  mounted() {
    this.fetchData();
  },
  directives: {
    setBackground(ele, action) {
      ele.style.backgroundColor = action.value;
    },
  },
};
</script>
<style scoped lang="scss">
.container {
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
  margin: auto;
  display: flex;
  gap: 20px;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
}
</style>
