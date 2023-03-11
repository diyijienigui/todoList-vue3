import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import directives from "./common/directives";
import { Checkbox,Input } from 'ant-design-vue';
import piniaPluginPersist from 'pinia-plugin-persist'

const pinia = createPinia()
pinia.use(piniaPluginPersist)
const app = createApp(App)

app.use(pinia)
app.use(directives);
app.use(Checkbox,Input);

app.mount('#app')


