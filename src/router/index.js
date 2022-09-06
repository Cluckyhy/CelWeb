import Vue from 'vue'
import VueRouter from 'vue-router'
import CelTop from "@/components/CelTop";
import CelLottery from "@/components/CelLottery";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'celtop',
    component: CelTop
  },
  {
    path: '/lottery',
    name: 'lottery',
    component:CelLottery
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
