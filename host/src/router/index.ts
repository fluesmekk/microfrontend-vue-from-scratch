import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import * as bridge from '@module-federation/bridge-vue3'
import { loadRemote } from '@module-federation/enhanced/runtime'

const Remote = bridge.createRemoteComponent({
  loader: () => loadRemote('remote/export-app'),
})

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/remote',
      name: 'remote',
      component: Remote,
    },
  ],
})

export default router
