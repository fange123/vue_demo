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
      //TODO:配置处理图片的规则  webpack5失效
      // {
      //   test: /\.(png|jpe?g|gif)$/,
      //   use: [
      //     {
      //       loader: "url-loader",
      //       options: {
      //         //如果图片小于30kb，会转成base64
      //         //如果图片大于30kb，会交给file-loader处理
      //         limit: 30 * 1024,
      //       },
      //     },
      //   ],
      // },
      //TODO: webpack5 处理图片打包规则

      {
        // 处理图片资源
        test: /\.(png|jpe?g|gif)$/,
        //*  webpack5中使用assets-module（url-loader已废弃）
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 30 * 1024,
          },
        },
        generator: {
          filename: "img/[name].[hash:6][ext]",
          publicPath: "./",
        },
      },
      //处理字体图标
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        type: "asset", // (webpack 5)
        // (webpack 4)
        // loader: 'file-loader',
      },
      //处理音视频
      {
        test: /\.(mp3|wma|wav|avi|wmv|mpeg|mp4|m4v)$/,
        type: "asset",
      },
    ],
  },
};
