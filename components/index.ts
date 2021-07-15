import { App } from 'vue'
import * as components from './components'

export * from './components'

export default {
  install: function (app: App) {
    Object.keys(components).forEach(key => {
      const component = components[key]
      if (component.install) {
        app.use(component)
      }
    })
  },
}
