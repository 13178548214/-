/* import './assets/main.css' */

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { lazyPlugin } from './directives'
import "@/styles/common.scss"


import App from './App.vue'
import router from './router'
import {componentPlugin} from '@/components/index'
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(lazyPlugin)
app.use(componentPlugin)
app.mount('#app')

