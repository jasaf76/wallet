// tailwind.config.js
const tailwindcssReactNative = require("tailwindcss-react-native/tailwind/native")
module.exports = {
  content: [
    './App.{js,ts,jsx,tsx}',
  ],
 plugins: [tailwindcssReactNative()],
};