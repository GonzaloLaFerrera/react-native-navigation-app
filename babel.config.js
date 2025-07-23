// babel.config.js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      // 1) El preset de Expo, pero indicándole a React que use `nativewind`
      ['babel-preset-expo', { jsxImportSource: 'nativewind' }],
      // 2) El preset de NativeWind convierte className → StyleSheet
      'nativewind/babel',
    ],
    plugins: [
      // 1) Plugin de Expo Router (importante si usas expo-router)
      // 'expo-router/babel',
      // 2) Cualquier otro plugin que tengas (e.g. reanimated)
      'react-native-reanimated/plugin',
    ],
  };
};