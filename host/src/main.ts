import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './initModuleFederation'

const app = createApp(App)

app.use(router)

app.mount('#app')
