<template>
  <label for="">{{ name }}</label>
  <input type="text" />
</template>
<script>
export default {
  props: {
    name: {
      type: String,
    },
  },
};
</script>
