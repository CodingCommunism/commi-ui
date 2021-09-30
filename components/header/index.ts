import { App } from 'vue'
import CHeader from './header.vue'

CHeader.install = function (app: App) {
  app.component(CHeader.name, CHeader)
}

export default CHeader
