import { createApp as createVueApp } from 'vue';
import { createPinia } from 'pinia';
import ElementPlus from 'element-plus'

import 'element-plus/dist/index.css'
import '../assets/main.css';

export function createApp(AppComponent: any) {
  const app = createVueApp(AppComponent);
  app.use(ElementPlus)
  app.use(createPinia());

  app.mount('#app');
  return app;
}
