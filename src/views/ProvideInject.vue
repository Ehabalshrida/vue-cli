<template>
  <h1>Provide Inject</h1>
  <ProvideInject />
</template>

<script>
import ProvideInject from "@/components/ProvideInject.vue";
export default {
  components: {
    ProvideInject,
  },
  data() {
    return { name: "ali" };
  },
  provide() {
    return { name: this.name, sayHello: this.sayHello };
  },
  methods: {
    sayHello() {
      console.log("sayHello");
    },
  },
};
</script>
