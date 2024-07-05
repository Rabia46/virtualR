// tailwind.config.js

// tailwind.config.js
// tailwind.config.js

// module.exports = {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       keyframes: {
//         zoomIn: {
//           '0%': { opacity: 0, transform: 'scale(0.8)' },
//           '100%': { opacity: 1, transform: 'scale(1)' },
//         },
//         zoomOut: {
//           '0%': { transform: 'scale(1)' },
//           '100%': { transform: 'scale(0.95)' },
//         },
//       },
//       animation: {
//         'zoom-in': 'zoomIn 0.5s ease-out',
//         'zoom-out': 'zoomOut 0.5s ease-out',
//       },
//     },
//   },
//   plugins: [],
// };







// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }



// tailwind.config.js

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'zoom-out': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(0.9)' },
        },
        'button-hover': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.1)' },
        },
      },
      animation: {
        'zoom-out': 'zoom-out 0.2s ease-in-out',
        'button-hover': 'button-hover 0.2s ease-in-out',
      },
    },
  },
  plugins: [],
};


















