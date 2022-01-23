import mitt from 'mitt'
export const $eventBus = mitt()
import http from './http'

const deviceRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i

const GlobalConfig = {
  install(app) {
    app.config.globalProperties.$http = http;
    app.config.globalProperties.$store.$http = http;
    app.config.globalProperties.$eventBus = $eventBus
    app.config.globalProperties.$store.$eventBus = $eventBus
    app.config.globalProperties.$isMobile = deviceRegex.test(navigator.userAgent)
  }
}

export default GlobalConfig
