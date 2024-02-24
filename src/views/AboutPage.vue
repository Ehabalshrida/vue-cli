<template>
  <div>
    <h2>About Us Page</h2>
    <ExtraText />
    <PropsCom :flag="name" />
    <hr />

    <PrimitiveReference
      @changeCounter="setCounter"
      :ReferenceValue="AboutRef"
      :PrimitiveValue="AboutPrim"
    />
    <hr />
    <PrimitiveReference
      :ReferenceValue="AboutRef"
      :PrimitiveValue="AboutPrim"
    />
    <hr />
    <div class="counter">
      {{ counter }}
    </div>
  </div>
</template>

<script>
import ExtraText from "@/components/ExtraText.vue";
import PropsCom from "@/components/PropsCom.vue";
import PrimitiveReference from "@/components/PeimitiveReference.vue";

export default {
  components: { ExtraText, PropsCom, PrimitiveReference },
  data() {
    return {
      name: "khaled",
      AboutRef: ["en", "ar"],
      AboutPrim: true,
      counter: 0,
    };
  },
  methods: {
    setCounter(count) {
      this.counter = count;
    },
  },
};
</script>

<style scoped>
h2 {
  display: flex;
  justify-content: center;
  color: blue;
}
</style>
