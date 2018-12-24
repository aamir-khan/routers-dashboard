<template>
  <div style="" class="login">
    <b-form @submit.prevent="login" >
      <b-form-group id="exampleInputGroup1"
                    label="Username:"
                    label-for="exampleInput1">
        <b-form-input id="exampleInput1"
                      type="text"
                      v-model="username"
                      required
                      placeholder="Enter username">
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup2"
                    label="Password:"
                    label-for="exampleInput2">
        <b-form-input id="exampleInput2"
                      type="password"
                      v-model="password"
                      required
                      placeholder="Enter name">
        </b-form-input>
      </b-form-group>

      <b-button type="submit" variant="">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    login() {
      const username = this.username;
      const password = this.password;
      this.$store.dispatch('login', { username, password })
        .then(() => this.$router.push('/'))
        .catch(err => console.log(err));
    },
  },
};
</script>

<style scoped>
.login {
  width: 100%;
  border: 1px solid #CCCCCC;
        /*background-color: #FFFFFF;*/
  background-color: #343a40 !important;
  margin: 20px auto auto;
  padding: 20px;
  color: white;
  align-content: center;
}
.login label {
  padding-right: 5px;
}
</style>
