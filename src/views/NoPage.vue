<template>
  <h2>Page Not Found</h2>
  <button
    @click="
      ($event) => {
        this.$router.push('/about');
      }
    "
  >
    About us
  </button>
</template>
