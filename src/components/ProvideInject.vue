<template>
  <h2>{{ name }}</h2>
  <h3>{{ logo }}</h3>
  <button @click="sayHello">say hello</button>
</template>
<script>
export default {
  data() {
    return {
      logo: "",
    };
  },
  inject: ["name", "sayHello", "emitter"],
  mounted() {
    this.emitter.on("global", (data) => {
      this.logo = data;
    });
  },
};
</script>
