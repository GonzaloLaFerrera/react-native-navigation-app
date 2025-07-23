// metro.config.js
const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname, {
    // desactiva el CSS “web” que Expo habilita por defecto
    isCSSEnabled: false,
});

module.exports = withNativeWind(config, {
    input: "./global.css",  // ruta relativa a tu CSS con @tailwind …
});