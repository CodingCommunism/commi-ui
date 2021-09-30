import { createApp } from 'vue'
import hljs from 'highlight.js/lib/common'
import commiUI from '../../components/index'
import router from './routes'
import App from './App.vue'

import './styles/index.scss'

const app = createApp(App)
app.use(router)
app.use(commiUI)
app.mount('#app')
