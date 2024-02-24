<template>
  <h2 v-for="(product, index) in products" :key="index">
    <h3>{{ product["name"] }}</h3>
    <h3>{{ product["price"] }}</h3>
  </h2>
</template>

<script>
export default {
  data() {
    return {
      products: [
        { name: "orange", price: "20$" },
        { name: "banana", price: "30$" },
      ],
    };
  },
};
</script>
