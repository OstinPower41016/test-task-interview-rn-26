// babel.config.js
module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    // другие плагины (module-resolver и т.п.) можно оставить выше, если нужны
    ['module-resolver', {
      root: ['./src'],
      extensions: ['.tsx', '.ts', '.js', '.json'],
      alias: {
        '@theme': './src/theme',
        '@components': './src/components',
        '@screens': './src/screens',
        '@navigation': './src/navigation',
        '@assets': './assets',
        '@store': './src/store',
        '@services': './src/services',
      },
    }],
  ],
};