import './assets/base.css'
import { createI18n } from 'vue-i18n'
import { createApp } from 'vue'
import App from './App.vue'
import messagesEn from './locales/en.json';
import messagesFr from './locales/fr.json';
import store from './store/store';

const i18n = createI18n({
    locale: 'fr',
    messages: {
        en: messagesEn,
        fr: messagesFr
    }
});

const app = createApp(App)
app.use(i18n)
app.use(store)
app.mount('#app')
