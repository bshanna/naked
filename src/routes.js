import Home from './views/Home.vue'
import Wines from './views/Wines.vue'
import NotFound from './views/NotFound.vue'

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  { path: '/', component: Home, meta: { title: 'Home' } },
  {
    path: '/wines',
    meta: { title: 'Wines' },
    component: Wines,
  },
  { path: '/:path(.*)', component: NotFound },
]
