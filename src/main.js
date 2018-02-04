// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import './assets/js/fontsize.js'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/stylus/index.styl'

Vue.use(Element, {
  size: 'small'
})

// fade/zoom 等
// import 'element-ui/lib/theme-chalk/base.css';
// // collapse 展开折叠
// import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';

// Vue.component(CollapseTransition.name, CollapseTransition)


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
