import About from "@/components/About.vue"
import Build from "@/components/Build.vue"

const routes = [
  {
    path: '/about',
    component: About
  },
  {
    path: '/build',
    component: Build
  },
  {
    path: '/',
    redirect: '/about'
  }
]

export default routes
