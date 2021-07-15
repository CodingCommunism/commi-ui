import { App } from 'vue'
import CTag from './tag.vue'

CTag.install = function (app: App) {
  app.component(CTag.name, CTag)
}

export default CTag
