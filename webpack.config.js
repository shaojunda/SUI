const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

// 定义要导出的对象
module.exports = {
  // mode: 'production',
  // 配置程序的入口 index 是文件名
  entry: {
    index: './lib/index.tsx'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  // 配置输出
  output: {
    path: path.resolve(__dirname, 'dist/lib'),
    library: 'SUI', // 库的名字
    libraryTarget: 'umd' // 库的目标格式
  },
  module: {
    rules: [
      // 将 typescipt 编译成 js
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      }
    ]
  },
  // plugins: [
  //   // 将 JS 插入到页面
  //   new HtmlWebpackPlugin({
  //     title: 'SUI',
  //     template: 'index.html'
  //   })
  // ],
  // externals: {
  //   react: {
  //     commonjs: 'react',
  //     commonjs2: 'react',
  //     amd: 'react',
  //     root: 'React',
  //   },
  //   'react-dom': {
  //     commonjs: 'react-dom',
  //     commonjs2: 'react-dom',
  //     amd: 'react-dom',
  //     root: 'ReactDOM',
  //   },
  // }
}
