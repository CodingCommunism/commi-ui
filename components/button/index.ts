import { App } from 'vue'
import CButton from './button.vue'

CButton.install = function (app: App) {
  app.component(CButton.name, CButton)
}

export default CButton
