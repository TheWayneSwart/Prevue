/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

const tunityDarkTheme = {
    dark: true,
    colors: {
        primary: '#93b2e9',
        secondary: '#d8e1f2',
        light: '#555555',
        success: '#74d479',
    },
}

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
    theme: {
        defaultTheme: 'tunityDarkTheme',
        font: {
            family: 'Poppins',
        },
        themes: {
            tunityDarkTheme,
        },
    },
})
