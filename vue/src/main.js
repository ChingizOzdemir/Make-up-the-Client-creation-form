import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import Registration from './Registration.vue'

Vue.use(Vuelidate)

Vue.component ('app-registration', Registration)

new Vue({
  el: '#app',
  render: h => h(App)
})
