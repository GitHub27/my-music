import Vue from 'vue'
import Router from 'vue-router'

const asyncComponent = r => require.ensure([], () => r(require('@/views/asyncComponent')), 'asyncComponent')
const HelloWorld = r => require.ensure([], () => r(require('@/components/HelloWorld')), 'HelloWorld')
const postCss = r => require.ensure([], () => r(require('@/views/postCss')), 'postCss')
const awesomeIcons = r => require.ensure([], () => r(require('@/views/awesomeIcons')), 'awesomeIcons')

import childRouter from '@/components/child-router'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/asyncComponent',
      name: 'asyncComponent',
      component: asyncComponent
    },
    {
      path: '/postCss',
      name: 'postCss',
      component: postCss
    },
    {
      path: '/awesomeIcons/:id',
      name: 'awesomeIcons',
      component: awesomeIcons,
      children: [{
        path: 'a',
        component: childRouter
      }]
    }
  ]
})
