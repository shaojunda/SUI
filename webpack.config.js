const path = require('path')

// 定义要导出的对象
module.exports = {
  mode: 'production',
  // 配置程序的入口 index 是文件名
  entry: {
    index: './lib/index.tsx'
  },
  // 配置输出的路径
  output: {
    path: path.resolve(__dirname, 'dist/lib'),
    library: 'SUI', // 库的名字
    libraryTarget: 'umd' // 库的目标格式
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      }
    ]
  }
}
