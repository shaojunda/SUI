const base = require('./webpack.config')
const HtmlWebpackPlugin = require('html-webpack-plugin');

// 定义要导出的对象
module.exports = Object.assign({}, base, {
  mode: 'development',
  entry: {
    example: './example.tsx',
  },
  plugins: [
    // 将 JS 插入到页面
    new HtmlWebpackPlugin({
      title: 'SUI',
      template: 'example.html'
    })
  ],
})
