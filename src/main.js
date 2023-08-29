import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// 新增路由文件
import router from './router/index'

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

import 'bootstrap';
import './assets/style/all.scss';

const app = createApp(App)
app.use(router)
app.mount('#app')

