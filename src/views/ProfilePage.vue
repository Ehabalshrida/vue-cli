<template>
  <div>
    <h1>Profile Page</h1>
    <h2>{{ this.$route.params.userId }}</h2>
    <h2>{{ this.$route.params.userName }}</h2>
    <h2>{{ this.$route.query.age }}</h2>
    <h2>{{ this.$route.query.gender }}</h2>
    <div>
      <router-link
        :to="{
          name: 'MyTasks',
          params: {
            userId: this.$route.params.userId,
            userName: this.$route.params.userName,
          },
          query: {
            age: this.$route.query.age,
            gender: this.$route.query.gender,
          },
        }"
        >My Tasks</router-link
      >
      <router-link
        :to="{
          name: 'MyNotes',
          params: {
            userId: this.$route.params.userId,
            userName: this.$route.params.userName,
          },
          query: {
            age: this.$route.query.age,
            gender: this.$route.query.gender,
          },
        }"
        >My Notes</router-link
      >
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  mounted() {
    // Check if userId and userName are present
    if (this.$route.params.userId && this.$route.params.userName) {
      // Redirect to MyTasks route
      this.$router.push({
        name: "MyTasks",
        params: {
          userId: this.$route.params.userId,
          userName: this.$route.params.userName,
        },
        query: {
          age: this.$route.query.age,
          gender: this.$route.query.gender,
        },
      });
    }
  },
};
</script>
