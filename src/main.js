import './assets/css/main.scss'
import VueApexCharts from "vue3-apexcharts";

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

const app = createApp(App)

// Automatically register all the plugins in the @/plugins directory
registerPlugins(app)

app.use(VueApexCharts);

app.mount('#app')
