import { createRouter, createWebHistory } from 'vue-router'
import { Category } from '@/apis/testApis'
import Home from '@/views/Home/index.vue'
import Layout from '@/views/Layout/index.vue'
import Login from '@/views/Login/index.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Layout,
      children:[
      {
       path: '',
       component: Home,
      },
      {path: '/Category',
       component: Category}]
    },
    {
      path: '/Login',
      component: Login,
    }
  ]
})

export default router
