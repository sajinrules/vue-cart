<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#" to="/dashboard">VueCart</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#" v-if="list.length > 0">
            <b-icon-archive-fill></b-icon-archive-fill>Cart <b-badge variant="light">{{list.length}}</b-badge>
          </b-nav-item>
          <b-nav-item-dropdown right v-if="profile.email">
            <template v-slot:button-content>
              {{profile.email}}
            </template>
            <b-dropdown-item href="#" >Total : {{total}}</b-dropdown-item>
            <b-dropdown-item href="#" @click.prevent="logout">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
import { EventBus } from '@/services/bus';
import Auth from '@/services/authService';
import router from '@/Router';

export default {
  name: 'Header',
  data() {
    return {
      profile: {},
      list:[],
      total: 0
    }
  },
  methods: {
    logout () {
      Auth.logout();
      router.push('login');
    },
    calculate() {
      this.total = this.list.reduce((accumulator, currentValue) => 
      accumulator + currentValue.cost, 0)
    }
  },
  beforeCreate() {
    EventBus.$on('loggedIn', profile => {
      this.profile = profile;
    });
  },
  mounted () {
    EventBus.$on('CART_ADD', product => {
      this.list.push(product);
      this.calculate()
    });
  }
}
</script>
<style scoped>
	.navbar {
		padding: 1rem;
	}
</style>