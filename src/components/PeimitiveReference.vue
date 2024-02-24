<template>
  <div class="primitiv-reference">
    <div class="primitive">
      <div>{{ MyPrimitive }}</div>
      <button @click="SetPrimitive">ClickPrim</button>
    </div>
    <div class="reference">
      <div v-for="(Reference, index) in MyReference" :key="index">
        {{ Reference }}
      </div>
      <button @click="SetReference">ClickRef</button>
    </div>
    <hr />
    <!-- <button @click="changeValue">changeCounter</button> -->
    <button @click="($value) => $emit('changeCounter', 5)">
      changeCounter
    </button>
  </div>
</template>
<script>
export default {
  props: {
    PrimitiveValue: { type: Boolean, required: false },
    ReferenceValue: { type: Array, required: true },
  },
  data() {
    return {
      MyPrimitive: this.PrimitiveValue,
      MyReference: this.ReferenceValue,
    };
  },
  emits: ["changeCounter"],
  methods: {
    SetPrimitive() {
      return (this.MyPrimitive = !this.MyPrimitive);
    },
    SetReference() {
      this.MyReference.pop();
    },
    changeValue() {
      this.$emit("changeCounter", 5);
    },
  },
};
</script>
