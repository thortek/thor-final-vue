import '@babel/polyfill'
import Vue from "vue";
import './plugins/vuetify'
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vuelidate from 'vuelidate'

Vue.use(Vuelidate)

Vue.directive('box-shadow', {
  bind(el, binding) {
    let blur = 0
    if (binding.modifiers['blur']) {
      blur = 5
    }
    if (binding.arg === 'offset') {
      el.style.boxShadow = `0px ${binding.value}px ${blur}px #222`
    } else {
      el.style.boxShadow = `13px 13px 5px #666`
    }
  }
})

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
