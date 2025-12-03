/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    light: '#F9FAFB', // Off-white
                    DEFAULT: '#F2F2F2', // Light gray
                },
                secondary: {
                    light: '#A7D9E3', // Light blue
                    DEFAULT: '#4ECDC4', // Soft teal
                },
                tertiary: {
                    DEFAULT: '#333333', // Dark gray
                },
            },
            fontFamily: {
                sans: ['Poppins', 'Montserrat', 'Noto Sans', 'sans-serif'],
                body: ['Lato', 'Open Sans', 'Roboto', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
