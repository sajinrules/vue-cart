<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#" to="/dashboard">VueCart</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
					<b-nav-item href="#" to="/login" right>Login</b-nav-item>
          <b-nav-item-dropdown right>
            <template v-slot:button-content>
              User
            </template>
            <b-dropdown-item href="#" >Profile</b-dropdown-item>
            <b-dropdown-item href="#" @click.prevent="logout">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>

export default {
  name: 'Header',
  methods: {
    async logout () {
      // const res  = await UserResource.signIn(this.form);
      // if (res.data && res.data) {
      //   Auth.setToken(res.data);
      //   router.push('dashboard');
      // }
    }
  }
}
</script>
<style scoped>
	.navbar {
		padding: 1rem;
	}
</style>