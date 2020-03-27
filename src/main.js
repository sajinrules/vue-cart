import Vue from 'vue';
import App from './App.vue';
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import router from './Router'
import { BootstrapVueIcons } from 'bootstrap-vue'

Vue.config.productionTip = false
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);


new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
