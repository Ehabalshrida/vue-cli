<template>
  <div>
    <!-- <h2>Vue Project</h2>
    <ButtonAction />
    <PropsCom :flag="name" /> -->
    <fetchData />
  </div>
</template>
<script>
// import ButtonAction from "@/components/ButtonAction.vue";
// import PropsCom from "@/components/PropsCom.vue";
import fetchData from "@/components/fetchAPI.vue";

export default {
  name: "MyMain",
  components: { fetchData },
  data() {
    return { name: "ali" };
  },
};
</script>

<style scoped>
h2,
button {
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
