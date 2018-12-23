<template>
 <div class="login">
   <form @submit.prevent="login">
     <div style="width: 100%; text-align: left;"><h1>Sign in</h1></div>
     <label for="username">Username:</label>
     <input required v-model="username" id="username" type="text" placeholder="Name"/>
     <br />
     <label for="password">Password</label>
     <input required v-model="password" type="password" id="password" placeholder="Password"/>
     <br />
     <button type="submit">Login</button>
   </form>
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
}
.login label {
  padding-right: 5px;
}
</style>
