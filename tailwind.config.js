const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    mode: 'jit',
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        colors: {
            purple: '#6B21A8',
            purpleLite: '#D8B4FE',
            white: '#FAF5FF',
            red: '#E11D48',
            green: '#064E3B',
            black: '#111827',
            orange: '#FB923C',
        },
        extend: {
            fontFamily: {
                title: ['Merienda One', ...defaultTheme.fontFamily.sans],
                sans: ['Itim', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
