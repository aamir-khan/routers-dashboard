import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import Axios from 'axios';
import store from './store';

import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.prototype.$http = Axios;
const token = localStorage.getItem('token');
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
