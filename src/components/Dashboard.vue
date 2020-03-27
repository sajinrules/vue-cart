<template>
  <div class="container mt-5">
    <div class="row wrapper">
      <b-card
        v-for="product in products"
        v-bind:key="product.id"
        v-bind:title="product.name"
        v-bind:img-src="'https://picsum.photos/600/300/?image='+ product.id"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-4 mx-2">
        <b-card-text>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </b-card-text>
        <b-card-text>
          <strong>${{product.cost}}</strong>
        </b-card-text>
        <b-button v-on:click="addToCart(product)" variant="primary">Cart</b-button>
      </b-card>
    </div>
  </div>
</template>
<script>
import { ResourceFactory } from '@/services/resourceFactory';
import Auth from '@/services/authService';
const UserResource = ResourceFactory.get('users');
const ProductResource = ResourceFactory.get('products');
import { EventBus } from '@/services/bus';
// import router from '@/Router';
export default {
  name: 'Dashboard',
  data() {
    return {
      products: []
    }
  },
  methods: {
    addToCart: function (product) {
      EventBus.$emit('CART_ADD', product);
    },
  },
  beforeCreate() {
    const profile = Auth.getProfile();
    if (profile.id) {
      UserResource.get(profile.id).then(res => {
        console.log('res:', res)
        Auth.setProfile(res.data)
      })
    } else {
      Auth.logout();
    }
    ProductResource.getAll().then(res => {
      this.products = res.data;
    })
  }
}
</script>
<style scoped>
	.wrapper {
    justify-content: center;;
  }
</style>