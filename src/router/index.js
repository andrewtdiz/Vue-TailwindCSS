import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/appeal',
    name: 'Appeal',
    component: () => import('../views/Appeal.vue')
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import('../views/Blog.vue')
  },
  { path: '/blog/:id', component: () => import('../views/BlogContent.vue') },
  {
    path: '/pricing',
    name: 'Pricing',
    component: () => import('../views/Pricing.vue')
  },
  {
    path: '/faqs',
    name: 'FAQs',
    component: () => import('../views/FAQs.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
