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
      path: '/shopping_reminder',
      name: 'main',
      component: List,
    },
    {
      path: '/shopping_reminder/changeusername',
      name: 'changeusername',
      component: ChangeUser,
    },
    {
      path: '/shopping_reminder/registershop',
      name: 'registerShop',
      component: Register,
    },
    {
      path: '/shopping_reminder/deleteshop',
      name: 'deleteShop',
      component: Delete,
    },
    {
      path: '/shopping_reminder/guide',
      name: 'guide',
      component: Guide,
    },
  ],
})