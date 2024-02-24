<template>
  <div class="slot-data">
    <slot name="hello"></slot>
    <!-- <h2 class="slot-data">{{ identity }}</h2> -->
    <slot name="name"></slot>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    identity: {
      type: String,
      required: true,
    },
  },
};
</script>
<style scoped lang="scss">
.slot-data {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
