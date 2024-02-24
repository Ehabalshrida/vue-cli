<template>
  <form @submit.prevent="handleSubmit">
    <div class="form">
      <div>
        <input v-model="member.firstName" type="text" />
        <div>First Name: {{ member["firstName"] }}</div>
      </div>
      <div>
        <input v-model="member.lastName" type="text" />
        <div>Last Name:{{ member["lastName"] }}</div>
      </div>
      <div>Sports:</div>
      <div>
        <input v-model="member.sports.football" type="checkbox" />
        <span>football:</span>
        <div>
          <span v-if="member['sports']['football']">
            football is your sport</span
          >
        </div>
      </div>
      <div>
        <input v-model="member.sports.basktball" type="checkbox" />
        <span>basketball:</span>
        <div>
          <span v-if="member['sports']['basktball']">
            football is your sport</span
          >
        </div>
      </div>
      <div>Gender:</div>

      <div>
        <input v-model="member.gender" value="male" type="radio" />
        <span>Male:</span>
        <div>
          <span v-if="member.gender === 'male'"> Your Gender iS:</span>
        </div>
      </div>
      <div>
        <input v-model="member.gender" value="female" type="radio" />
        <span>Female:</span>
        <div>
          <span v-if="member.gender === 'female'"> Your Gender iS</span>
        </div>
      </div>
      <div>Order:</div>
      <div>
        <select v-model="member.order" name="" id="">
          <option value="first">First</option>
          <option value="second">Second</option>
          <option value="third">Third</option>
        </select>
      </div>
      <div>Order: {{ member.order }}</div>
      <input type="submit" />
    </div>
  </form>
  <div>
    <div v-for="(member, index) in members" :key="index">
      <div>firstName: {{ member.firstName }}</div>
      <div>lastName: {{ member.lastName }}</div>
      <div>gender: {{ member.gender }}</div>
      <div>order: {{ member.order }}</div>
      <div>sports:</div>
      <div v-for="(sportValue, sportKey, index) in member.sports" :key="index">
        <!-- <div>{{ sportValue }}</div> -->
        <div v-if="sportValue">{{ sportKey }}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      member: {
        firstName: "",
        lastName: "",
        sports: {
          football: "",
          basktball: "",
        },
        gender: "",
        order: "",
      },
      members: [],
    };
  },
  methods: {
    handleSubmit() {
      const plainMember = JSON.parse(JSON.stringify(this.member));

      console.log({ member: plainMember });
      this.members.push(this.member);
      this.member = {
        firstName: "",
        lastName: "",
        sports: {
          football: "",
          basktball: "",
        },
        gender: "",
        order: "",
      };
    },
  },
};
</script>
<style>
.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
