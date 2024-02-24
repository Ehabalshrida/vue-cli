<template>
  <slot-component :identity="identity">
    <template #hello> <h3>hello</h3> </template>
    <template #name><h4>ehab</h4></template>
    <h3>ehab al-shrida</h3>
  </slot-component>
  <keep-alive>
    <div v-if="ToggleData" class="center">
      <ToggleComponent1 :name="name.firstName" />
    </div>
  </keep-alive>
  <keep-alive>
    <div v-if="!ToggleData" class="center">
      <ToggleComponent2 :name="name.secondName" />
    </div>
  </keep-alive>
  <div class="center"><button @click="toggleFunction">ToggleClick</button></div>
  <VModel />
</template>
<script>
import SlotComponent from "@/components/SlotComponent.vue";
import ToggleComponent1 from "@/components/ToggleComponent.vue";
import ToggleComponent2 from "@/components/ToggleComponent.vue";
import VModel from "@/components/VModel.vue";

export default {
  components: {
    SlotComponent,
    ToggleComponent2,
    ToggleComponent1,
    VModel,
  },
  data() {
    return {
      identity: "slot data",
      ToggleData: true,
      name: { firstName: "first", secondName: "second" },
    };
  },
  methods: {
    toggleFunction() {
      this.ToggleData = !this.ToggleData;
    },
  },
};
</script>
<style>
.center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
