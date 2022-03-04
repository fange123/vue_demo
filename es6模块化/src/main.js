console.log("测试");

// node的导入方法
require("./a");

// es6的导入和导出

//导入：import '模块名'
import "./a";
import "./css/index.css";

//从模块导入name变量
import { name } from "./a";

//模块导出  默认导出  精确导出

//* 精确导出
// export const num = 10;
// export {name,fun};

//* 默认导出  每个模块都可以有一个默认导出
// export default fun
import hhhh from "./a";
hhhh();

export function fun() {
  console.log(name);
}

fun();
