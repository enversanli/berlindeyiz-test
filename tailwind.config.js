/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito"],
      },
      colors: {
        "theme-color": "#f9a50c",
        "facebook-blue": "#1877F2",
        "tiktok-red": "#FF0000",
        'instagram-gradient': '#8134AF',
        "youtube-red": '#FF0000',

      },
    },
  },
  plugins: [],
  important: true,
};
