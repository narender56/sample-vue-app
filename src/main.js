import { createApp } from 'vue'
import App from './App.vue'

// Load prefills
import './setup'
import router from './router'
import store from './store'

//Styles
import './styles/main.scss'
// import 'element-plus/lib/theme-chalk/index.css'

// Plugins
import GlobalConfigPlugin from './plugins/config'

// Directives
import ClickOutside from './directives/click-outside'

const Root = createApp(App)

Root.directive('click-outside', ClickOutside)

Root
  .use(store)
  .use(router)
  .use(GlobalConfigPlugin)
  .mount('#app')
