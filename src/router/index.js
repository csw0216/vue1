import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// 管理页面之间的关系，比如跳转等，构建单页应用（即只有一个页面）
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  
  // 这里的 routes 选项定义了一组路由，把 URL 路径映射到组件。
  // 其中，由 component 参数指定的组件就是先前在 App.vue 中被<RouterView> 渲染的组件。
  // 这些路由组件通常被称为视图，但本质上它们只是普通的 Vue 组件。
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
  ],
})

export default router
