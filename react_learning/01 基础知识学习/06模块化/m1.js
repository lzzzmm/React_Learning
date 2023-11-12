const a = "m1模块中的变量a";
export const b = 20;
export const c = 30;
const obj={
    name:"孙悟空"
};
const fn = ()=>{
    console.log("我是fn");
}
/*
作为一个模块不希望模块中所有内容都暴露给外部
作为导入方，也不希望导入无用内容

export(导出) ： 用来决定一个模块中哪些内容可以被外部查看
    - 导出分成两种：
        - 默认导出
            - export default XXX
            - 一个模块中只能有一个默认导出
        - 命名导出


import(导入) ： 导入用来将外部模块中的内容导入到当前模块
    - 导入默认模块
        - import a from './m1.js';
        - 导入默认模块时，变量名可以自主指定，无需与模块中的变量名对应
        - 在网页中导入模块时候，模块的路径必须写完整(./或../开头，扩展名也要写上)
    - 导入指定内容
       - import {b, c} from './m1.js';
       - 需要和js变量名一致

    - import a, {b, c as hello, obj} from './m1.js';

 */

export default a;  //将变量a作为默认导出
export {obj, fn}; // 命名导出 导出多个 与上面的导出没有影响