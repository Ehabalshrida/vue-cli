<template>
  <!-- <nav>
    <h2 v-for="(link, index) in links" :key="index">
      <router-link :to="link.path">{{ link.value }}</router-link>
    </h2>
  </nav> -->
  <!-- hande links dynamin -->
  <!-- <nav>
    <h2 v-for="link in $router.options.routes" :key="link.name">
      <router-link :to="link.path">{{ link.name }}</router-link>
    </h2>
  </nav> -->
  <nav>
    <h2 v-for="link in $router.options.routes" :key="link.name">
      <router-link
        v-if="link.name !== 'Profile' && link.name !== 'NoPage'"
        :to="{ name: link.name }"
        >{{ link.name }}</router-link
      >
      <router-link
        v-else-if="link.name === 'Profile'"
        :to="{
          name: link.name,
          params: {
            userId: '150',
            userName: 'ahmad',
          },
        }"
        >{{ link.name }}</router-link
      >
    </h2>
    <button
      @click="
        ($event) => {
          emitter.emit('global', logo);
        }
      "
    >
      Global Emitt
    </button>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { path: "/", value: "Home" },
        { path: "/about", value: "About" },
        { path: "/test", value: "RoutApply" },
      ],
      logo: "logo",
    };
  },
  inject: ["emitter"],
  mounted() {
    console.log(this.$router.options.routes);
  },
};
</script>
<style>
nav {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
</style>
