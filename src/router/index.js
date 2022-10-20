import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: "/dashboard",
    name: "DashBoard",
    component: () => import ('../components/DashBoard')
  },
  {
    path: "/task",
    name: "ToDo",
    component: () => import ('../components/ToDo')
  },
  {
    path: "/profileimage",
    name: "ProfileImage",
    component: () => import ('../components/ProfileImage')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
