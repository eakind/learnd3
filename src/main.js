import Vue from 'vue';
import App from './App.vue';
import router from './router/router';
import index from './store/index';

Vue.config.productionTip = false;

new Vue({
  router,
  index,
  render: h => h(App)
}).$mount('#app');
