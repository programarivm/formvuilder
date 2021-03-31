import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMaterial from 'vue-material'
import App from './App.vue'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import routes from "./routes/routes"

const router = new VueRouter({
  routes,
  linkExactActiveClass: "nav-item active"
})

Vue.use(VueMaterial)
Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
