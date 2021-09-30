import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../pages/home/index.vue'
import ShowComponents from '../pages/show-components/index.vue'

const routes: RouteRecordRaw[] = [
  { path: '/', component: Home },
  { path: '/components', name: 'show-component', component: ShowComponents },
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})

export default router
