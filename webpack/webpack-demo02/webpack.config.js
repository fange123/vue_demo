// webpack.config.js文件名字是固定的，是webpack会自动识别的文件
// webpack是运行在nodejs下的，所以可以使用node模块

const path = require("path");
//导入html-webpack-plugin插件
const htmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  // 入口：对哪个文件打包
  entry: "./src/main.js",
  // 出口：到包完的文件放到哪儿
  output: {
    //打包路径 必须是绝对路径
    path: path.join(__dirname, "dist"),
    //打包完的文件名
    filename: "bundle.js",
  },
  // 打包模式：生产或者开发
  mode: "development",

  //插件
  plugins: [
    new htmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],

  //配置loader
  module: {
    //处理css文件的规则
    rules: [
      {
        test: /\.css$/, //正则表达式 匹配所有.css结尾的文件
        use: ["style-loader", "css-loader"], //顺序从右到左，css处理css文件，style使样式生效
      },
      //配置less
      {
        test: /\.less$/, //正则表达式 匹配所有.css结尾的文件
        use: ["style-loader", "css-loader", "less-loader"], //顺序从右到左，css处理css文件，style使样式生效
      },
    ],
  },
};
