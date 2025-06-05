import App from './App.vue'
import router from './router'
import { createBridgeComponent } from '@module-federation/bridge-vue3'
import './assets/main.css'

export default createBridgeComponent({
  rootComponent: App,
  appOptions: () => {
    return { router }
  },
})
