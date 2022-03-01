require("./a.js");
//导入样式
require("./css/base.css");
require("./less/index.less");

//导入字体图标的css文件
require("./fonts/iconfont.css");

//引入jquery来实现各行换色
const $ = require("jquery");
const moment = require("moment");

$(function () {
  $("li:odd").css("color", "red");
  $("li:even").css("color", "green");
  //改最后一行li的文本为当前时间
  $("li:last").text(moment().format("YYYY-MM-DD HH:mm:ss"));
});
