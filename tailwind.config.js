/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "*.{html, js}"
  ],
  theme: {
    extend: {
      colors: {
        'primaryLightRed': 'hsl(0, 100%, 67%)',
        'primaryOrangeyYellow': 'hsl(39, 100%, 56%)',
        'primaryGreenTeal': 'hsl(166, 100%, 37%)',
        'primaryCobaltBlue': 'hsl(234, 85%, 45%)',
        'gradientLightSlateBlueBackground': 'hsl(252, 100%, 67%)',
        'gradientLightRoyalBlueBackground': 'hsl(241, 81%, 54%)',
        'gradientVioletBlueCircle': 'hsla(256, 72%, 46%, 1)',
        'gradientPersianBlueCircle': 'hsla(241, 72%, 46%, 0)',
        'neutralPaleBlue': 'hsl(221, 100%, 96%)',
        'neutralLightLavender': 'hsl(241, 100%, 89%)',
        'neutralDarkGrayBlue': 'hsl(224, 30%, 27%)',
      },
      screens: {
        'small-screen': '320px'
      }
    },
  },
  plugins: [],
  prefix: 'tw-'
}

