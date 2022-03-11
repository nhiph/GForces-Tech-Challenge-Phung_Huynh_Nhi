import { createRouter, createWebHistory } from 'vue-router'
import BookView from '../components/BookView.vue'
import BookDetail from '../components/BookDetail.vue'

const routes = [
  {
    path: '/books',         
    name: 'book-view',
    component: BookView, 
  },
  {
    path: '/book/:bookId',
    name: 'book-detail',
    component: BookDetail,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
