const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        redirect: () => {
          const date = new Date()
          const currentTime = date.getHours() * 100 + date.getMinutes()

          if (currentTime <= 1945) {
            if (currentTime <= 1400) {
              return 'almoco'
            }

            return 'jantar'
          }

          return 'almoco'
        }
      },
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
