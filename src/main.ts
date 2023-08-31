import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { setupStore } from '@/store'
import { setupRouter } from '@/router'
import vabIcon from '@/components/VabIcon/index.vue'
import 'virtual:svg-icons-register' // 引入svg


const app = createApp(App)
app.component('VabIcon',vabIcon)
setupStore(app)
setupRouter(app)
app.mount('#app')
