/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './Components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                white: '#ffffff',
                Cerulean: '#0c5279',
                Cinereous: '#9a8383',
                Cultured: '#f8f8f8',
                Keppel: '#42b6a1',
                black: '#000000',
                Sapphire: '#14587e',
                Celadon: '#1e8c7f',
            },
            fontFamily: {
                Goblin: ['Goblin One', 'cursive'],
                Poppins: ['Poppins', 'sans-serif'],
                Inter: ['Inter', 'sans-serif'],
            },
            screens: {
                sm: '320px',
                lsm: '375px',
                usm: '420px',
                md: '768px',
                lg: '1024px',
                xlg: '1440px',
            },
        },
    },
    plugins: [],
};
