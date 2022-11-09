
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', redirect: 'almoco' },
      { path: 'almoco', component: () => import('../pages/PageAlmoco.vue') },
      { path: 'jantar', component: () => import('../pages/PageJantar.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
