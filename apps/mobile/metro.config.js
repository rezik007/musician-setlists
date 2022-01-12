const path = require("path");
const projectRoot = __dirname;
const workspaceRoot = path.resolve(__dirname, '../..');

module.exports = {
  resolver: {
    nodeModulesPaths: [
      path.resolve(projectRoot, 'node_modules'),
      path.resolve(workspaceRoot, 'node_modules'),
    ],
  },
  watchFolders: [
    path.resolve(__dirname, '../../node_modules'),
    path.resolve(__dirname, '../../packages'),
  ],
  resetCache: true,
};