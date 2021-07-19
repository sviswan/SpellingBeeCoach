import { createApp } from 'vue'
import App from './App.vue'
import store from '../src/store';
//import { BootstrapVue} from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

const app = createApp(App)
app.use(store)
//app.use(BootstrapVue)
app.mount('#app')
