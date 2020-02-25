const {
  override,
  fixBabelImports,
  addLessLoader,
  addWebpackAlias
} = require('customize-cra');
const path = require('path');
module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true //不用less，则是css，用less，此处为true
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { '@primary-color': '#faad14' }
  }),
  addWebpackAlias({
    ['@']: path.resolve(__dirname, 'src') //设置@符号代表src目录
  })
);
