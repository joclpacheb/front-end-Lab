import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

/*
router.beforeEach((to, from, next) => {
  const publicPages = ['/login', '/register', '/home']
  const authRequired = !publicPages.includes(to.path)
  const loggedIn = localStorage.getItem('user')

  // trying to access a restricted page + not logged in
  // redirect to login page
  if (authRequired && !loggedIn) {
    next('/login')
  } else {
    next()
  }
}) */

const routes = [
  {
    // Document title tag
    // We combine it with defaultDocumentTitle set in `src/main.js` on router.afterEach hook
    meta: {
      title: 'Dashboard'
    },
    path: '/',
    name: 'home',
    component: Home
  },
  {
    meta: {
      title: 'Tables'
    },
    path: '/tables',
    name: 'tables',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: 'tables' */ '../views/Tables.vue')
  },
  {
    meta: {
      title: 'Login'
    },
    path: '/login',
    name: 'login',
    component: () =>
      import(/* webpackChunkName: 'tables' */ '../views/Login.vue')
  },
  {
    meta: {
      title: 'Usuarios'
    },
    path: '/usuarios',
    name: 'usuarios',
    component: () =>
      import(/* webpackChunkName: 'tables' */ '../views/Usuarios.vue')
  },
  {
    meta: {
      title: 'Decanatos'
    },
    path: '/decanatos',
    name: 'decanatos',
    component: () =>
      import(/* webpackChunkName: 'tables' */ '../views/Decanatos.vue')
  },
  {
    meta: {
      title: 'ActasCreate'
    },
    path: '/actas/create',
    name: 'createActas',
    component: () =>
      import(/* webpackChunkName: 'tables' */ '../views/Actas/Create.vue')
  },
  {
    meta: {
      title: 'ActasList'
    },
    path: '/actas/list',
    name: 'listActas',
    component: () =>
      import(/* webpackChunkName: 'tables' */ '../views/Actas/List.vue')
  },
  {
    meta: {
      title: 'ActasReport'
    },
    path: '/actas/report',
    name: 'reportActas',
    component: () =>
      import(/* webpackChunkName: 'tables' */ '../views/Actas/Report.vue')
  },
  {
    meta: {
      title: 'Forms'
    },
    path: '/forms',
    name: 'forms',
    component: () =>
      import(/* webpackChunkName: 'forms' */ '../views/Forms.vue')
  },
  {
    meta: {
      title: 'Signin'
    },
    path: '/signin',
    name: 'signin',
    component: () =>
      import(/* webpackChunkName: 'forms' */ '../views/Signin.vue')
  },
  {
    meta: {
      title: 'Profile'
    },
    path: '/profile',
    name: 'profile',
    component: () =>
      import(/* webpackChunkName: 'profile' */ '../views/Profile.vue')
  },
  {
    meta: {
      title: 'About'
    },
    path: '/about',
    name: 'about',
    component: () =>
      import(/* webpackChunkName: 'profile' */ '../views/About.vue')
  },
  {
    meta: {
      title: 'New Client'
    },
    path: '/client/new',
    name: 'client.new',
    component: () =>
      import(/* webpackChunkName: 'client-form' */ '../views/ClientForm.vue')
  },
  {
    meta: {
      title: 'Edit Client'
    },
    path: '/client/:id',
    name: 'client.edit',
    component: () =>
      import(/* webpackChunkName: 'client-form' */ '../views/ClientForm.vue'),
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

router.beforeEach((to, from, next) => {
  const publicPages = ['/login', '/register', '/home']
  const authRequired = !publicPages.includes(to.path)
  const loggedIn = localStorage.getItem('user')

  // trying to access a restricted page + not logged in
  // redirect to login page
  if (authRequired && !loggedIn) {
    next('/login')
  } else {
    next()
  }
})

export default router
