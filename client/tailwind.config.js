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
      },
   },
   plugins: [],
}