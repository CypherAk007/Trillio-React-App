/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "--color-primary":"#eb2f64",
        '--color-primary-light':"#FF3366",
        '--color-primary-dark': "#BA265D",
        '--color-grey-light-1': "#faf9f9",
        '--color-grey-light-2': "#f4f2f2",
        '--color-grey-light-3': "#f0eeee",
        '--color-grey-light-4':' #ccc',
        '--color-grey-dark-1': '#333',
        '--color-grey-dark-2': '#777',
        '--color-grey-dark-3': '#999',
      },
      boxShadow:{
        'dark':'0 2rem 6rem rgba(0,0,0,.3)',
        'light':'0 2rem 5rem rgba(0,0,0,.06)',
      },
      screens:{
        'big-desktop':{'max':'112.5em'},
        'tab-land':{'max':'75em'},
        'tab-port':{'max':'56.25em'},
        'phone':{'max':'37.5em'},
        'smallest':{'max':'31.25em'}
      },
    },
  },
  plugins: [],
}

