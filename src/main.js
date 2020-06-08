import Vue from 'vue'
import './plugins/element.js'
import App from './App.vue'

// import Test from './test.vue'


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
// new Vue({
//   el: '#app',
//   data() {
//     return {
//       text: 'Hello, World'
//     };
//   }
// })