<template>
  <button @click="getProfiles">getProfiles</button>
  <div v-for="profile in profiles" :key="profile.userId">
    <p>User Name: {{ profile.userName }}</p>
    <p>Age: {{ profile.age }}</p>
    <p>Gender: {{ profile.gender }}</p>
    <button
      @click="
        ($event) => {
          showProfile(profile);
        }
      "
    >
      show Profile
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listProfiles: [
        { userName: "ali", userId: 1, age: 22, gender: "male" },
        { userName: "salma", userId: 2, age: 20, gender: "female" },
        { userName: "hasan", userId: 3, age: 23, gender: "male" },
      ],
      profiles: [],
    };
  },
  methods: {
    getProfiles() {
      return (this.profiles = this.listProfiles);
    },
    showProfile({ userName, userId, age, gender }) {
      this.$router.push({
        name: "Profile",
        params: { userId, userName },
        query: { age, gender },
      });
    },
  },
};
</script>
