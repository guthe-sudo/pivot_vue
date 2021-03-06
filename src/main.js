import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "webdatarocks/webdatarocks.min.css"
import "./css/main.css"

const app = createApp(App)
app.use(router)
app.mount('#app')
