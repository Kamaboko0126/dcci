import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index.js';

const app = createApp(App)
    .use(router)

    
await router.isReady()
// 掛載應用
app.mount('#app');
