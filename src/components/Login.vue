<template>
  <div class="login-container container">
    <b-form @submit.prevent="login">
      <b-form-group id="input-group-1">
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="Email"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2">
        <b-form-input
          id="input-2"
          v-model="form.password"
          required
          placeholder="Password"
        ></b-form-input>
      </b-form-group>

      <b-button block type="submit" variant="info">Submit</b-button>
    </b-form>
  </div>
</template>
<script>
import { ResourceFactory } from './../services/resourceFactory'
const UserResource = ResourceFactory.get('users')

export default {
  name: 'Login',
  data() {
    return {
      form: {
          email: '',
          password: '',
      }
    }
  },
  methods: {
    async login () {
      this.isLoading = true
      const data  = await UserResource.signIn(this.form)
      this.isLoading = false
      this.posts = data;
    }
  }
}
</script>
<style scoped lang="scss">
	.login-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 50%;
    max-width: 400px;
    form {
      width: 100%;
    }
  }
</style>