import { createRouter, createWebHistory } from 'vue-router'
import  Category  from '@/views/Category/index.vue'
import Home from '@/views/Home/index.vue'
import Layout from '@/views/Layout/index.vue'
import Login from '@/views/Login/index.vue'
import SubCategory from '@/views/SubCategory/index.vue'
import Detail from '@/views/Detail/index.vue'
import CartList from '@/views/CartList/index.vue'
import Checkout from '@/views/Checkout/index.vue'
import Pay from '@/views/Pay/index.vue'
import payBack from '@/views/Pay/components/payBack.vue'
import Member from '@/views/Member/index.vue'
import User from '@/views/Member/components/UserInfo.vue'
import Order from '@/views/Member/components/OrderInfo.vue'

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
      {
        path: 'category/:id',
        component: Category
      },
       {
        path: 'category/sub/:id',
        component: SubCategory
      },
      {
        path:'detail/:id',
        component:Detail
      },
      {
        path:'cartlist',
        component:CartList
      },
      {
        path:'checkout',
        component:Checkout
      },
      {
        path:'/pay',
        component:Pay
      },
      {
        path:'/paycallback',
        component:payBack
      },
      {
        path: '/member',
        component: Member,
        children:[
          {
            path:'user',
            component:User
          },
          {
            path:'order',
            component:Order
          }
        ]
    }
      ]
    },
    {
      path: '/Login',
      component: Login,
    }
  ],
  /* 路由滚动条行为配置 */
  scrollBehavior(){
    return{
      top:0
    }
  }
})

export default router
