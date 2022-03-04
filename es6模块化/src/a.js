console.log("aaaa");

//直接到处
export const name = "zhy";
const number = 192;
const getName = () => {
  console.log(name);
};

//批量导出
export { number, getName };

//默认导出
export default getName;
//默认导出一个对象
export default {
  getName,number
}
//取值的时候 import * from './a

