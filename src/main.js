import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import "@/styles/common.scss"
import { Category } from './apis/testApis'
Category().then(
    res => {console.log(res)}
)

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
