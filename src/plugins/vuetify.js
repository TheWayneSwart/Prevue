// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'

const prevueDark = {
    dark: true,
    colors: {
        primary: '#93b2e9',
        secondary: '#d8e1f2',
        light: '#555555',
        success: '#74d479',
    },
}

const prevueLight = {
    dark: false,
    colors: {
        primary: '#1976d2',
        secondary: '#424242',
        light: '#AAAAAA',
        success: '#4caf50',
    },
}

export default createVuetify({
    theme: {
        defaultTheme: 'prevueDark',
        font: {
            family: 'Poppins',
        },
        themes: {
            prevueDark,
            prevueLight,
        },
    },
})
