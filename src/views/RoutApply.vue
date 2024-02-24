<template>
  <NestedObject />
  <button
    @click="
      () => {
        $router.push({ name: 'MyMain' });
      }
    "
  >
    Go To Home
  </button>
  <button
    @click="
      () => {
        $router.push('/');
      }
    "
  >
    Go To Home
  </button>
  <!--   $router.replace('/') this redirect you to new route ("/")and delete the current route ("/test")from history so  you can't move back to it  -->
  <button
    @click="
      () => {
        $router.replace('/');
      }
    "
  >
    Go To about
  </button>
  <button
    @click="
      () => {
        // $router.push('/profile/120/ali');
        $router.push({
          name: 'Profile',
          params: { userId: 120, userName: 'ali' },
          query: { age: 22, gender: 'male' },
        });
      }
    "
  >
    Go To Profile
  </button>
</template>
<script>
import NestedObject from "@/components/NestedObject.vue";
export default {
  components: { NestedObject },
  mounted() {
    //define the route of your page
    console.log({ myRoute: this.$route });
    //to check if there is a route definded with specific name
    console.log({ hasRoute: this.$router.hasRoute("AboutPage") });
    console.log({ hasRoute: this.$router.hasRoute(this.$route.name) });
  },
};
</script>
