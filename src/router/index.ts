import type { RouteRecordRaw } from 'vue-router'
import type { VabRouteRecord } from '/#/router'

import type { App } from 'vue'
import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from 'vue-router'

export const constantRoutes: VabRouteRecord[] = [
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/Home/index.vue'),
    meta: {
      title:'Home'
    },
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/404.vue'),
    meta: {
      title:'404'
    },
  },
]
const publicPath = ''
const isHashRouterMode = true
const router = createRouter({
  history: isHashRouterMode
    ? createWebHashHistory(publicPath)
    : createWebHistory(publicPath),
  routes: constantRoutes as RouteRecordRaw[],
})


export function setupRouter(app: App<Element>) {
  app.use(router)
  return router
}

export default router
