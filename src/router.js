import { createRouter, createWebHistory } from 'vue-router'
import List from './components/List.vue'
import ChangeUser from './components/ChangeUser.vue'
import Register from './components/Register.vue'
import Delete from './components/Delete.vue'
import Guide from './components/Guide.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'main',
      component: List,
    },
    {
      path: '/changeusername',
      name: 'changeusername',
      component: ChangeUser,
    },
    {
      path: '/registershop',
      name: 'registerShop',
      component: Register,
    },
    {
      path: '/deleteshop',
      name: 'deleteShop',
      component: Delete,
    },
    {
      path: '/guide',
      name: 'guide',
      component: Guide,
    },
  ],
})