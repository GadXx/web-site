
const routes = [
  {
    path: '/',
    component: () => import('pages/HomePage.vue'),
  },
  {
    path: '/card-film',
    component: () => import('pages/FilmPage.vue'),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
