
import { createRouter, createWebHistory } from 'vue-router';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/Introduce',
    name: 'Introduce',
    component: () => import('../views/Introduce.vue')
  
  },
  {
    path: '/CurriculumVitae',
    name: 'CurriculumVitae',
    component: () => import('../views/CurriculumVitae.vue')
  
  },
  {
    path: '/Achievement',
    name: 'Achievement',
    component: () => import('../views/Achievement.vue')
  
  }
]
})

export default router
