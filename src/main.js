import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '@fortawesome/fontawesome-free/js/all'
import '@/assets/tailwind.css'

createApp(App).use(router).mount('#app')
