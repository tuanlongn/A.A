/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

const path = require('path');
const watchFolders = [
  //Relative path to packages directory
  path.resolve(__dirname + '/..'),
  path.resolve(__dirname + '/'),
];

module.exports = {
  resolver: {
    extraNodeModules: new Proxy(
      {},
      {get: (_, name) => path.resolve('.', 'node_modules', name)},
    ),
  },
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: true,
        inlineRequires: true,
      },
    }),
  },
  watchFolders,
};
