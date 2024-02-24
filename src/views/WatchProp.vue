<template>
  <div><input type="text" v-model="student['name']" /></div>
  <div>{{ student["name"] }}</div>
  <div>{{ isActive }}</div>
  <div>
    <button @click="($e) => (isActive = !isActive)">Change ACtive</button>
  </div>
  <div>
    <button
      @click="
        ($e) => {
          arr.push('newItem');
        }
      "
    >
      push
    </button>
    <div>
      <ul>
        <li v-for="(ele, index) in arr" :key="index">{{ ele }}</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isActive: false,
      student: {
        name: "ali",
        age: 22,
      },
      arr: [],
    };
  },
  watch: {
    isActive(newval, oldval) {
      console.log({ newval, oldval });
    },
    "student.name"(newval1, oldval1) {
      console.log({ newval1, oldval1 });
    },
    arr: {
      handler(newval2, oldval2) {
        console.log({ newval2, oldval2 });
      },
      deep: true,
    },
  },
};
</script>
