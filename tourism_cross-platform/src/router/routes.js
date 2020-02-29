
const routes = [
  {
    path: '',
    component: () => import('../layouts/MainLayout'),
    children: [
      { path: '/', component: () => import('../pages/Index') }
    ]
  },
  {
    path: '',
    component: () => import('../layouts/MainLayoutLogin'),
    children: [
      { path: '/page/login', component: () => import('../pages/Login') }
    ]
  }
];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
