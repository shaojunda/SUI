// 定义要导出的对象
module.exports = {
  // 程序的入口
  entry: {
    index: './lib/index.tsx'
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
