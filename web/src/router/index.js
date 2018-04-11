import Vue from 'vue'
import Router from 'vue-router'
import Home from 'components/home/home'
import Introduction from 'components/introduction/introduction'
import News from 'components/news/news'
import Project from 'components/project/project'
import Contact from 'components/contact/contact'
import AboutUs from 'components/about-us/about-us'
import Test from 'components/test/test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/introduction',
      component: Introduction
    },
    {
      path: '/news',
      component: News
    },
    {
      path: '/project',
      component: Project
    },
    {
      path: '/contact',
      component: Contact
    },
    {
      path: '/aboutUs',
      component: AboutUs
    },
    {
      path: '/test',
      component: Test
    }
  ]
})
