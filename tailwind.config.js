/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            backgroundColor: {
                ijo: '#7FFF00',
                dark: '#00264C',
            },
        },
    },
    plugins: [],
}
