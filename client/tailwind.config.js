module.exports = {
   content: [
      "./src/**/*.{js,jsx,ts,tsx}",
   ],
   theme: {
      extend: {
         fontSize: {
            main: ['0.875rem', { lineHeight: '1.125rem', }],
            medium: ['1rem', { lineHeight: '1.125rem' }],
            large: ['1.25rem', { lineHeight: '1.5rem' }],
         },

         keyframes: {
            list: {
               '0%': {
                  'transform': 'scaleY(0)'
               },

               '100%': {
                  'transform': 'scaleY(100%)'
               }
            },
         },

         animation: {
            list: 'list 0.25s ease-in-out',
         }
      },
   },
   plugins: [],
}