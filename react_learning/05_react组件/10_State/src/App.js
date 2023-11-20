import React, {useState} from "react";
import "./App.css"
/*
* 在react中，当组件渲染完毕后，再修改组件中的变量，不会使组件重新渲染
* 修改变量后对组件进行重新渲染
* 这里徐亚一个特殊变量，当变量修改时，组件会自动重新渲染
*
* state相当于一个变量
*   这个变量在react中进行了注册
*   react会监控这个变量的变化，当react发生变化时候就会自动重新渲染组件
*
* 在函数组件中，需要通过钩子函数，获取state
*
* 使用钩子useState()创建state
*   import React, {useState} from "react";
*
* 需要一个值作为参数，这个值就是state的初始值
*   该函数会返回一个数组
*       数组中第一个元素是初始值
*       数组中第二个元素是函数,通常命名为setXXX
*           这个函数用来修改state，调用其state后会触发组件重新渲染，并且使用函数中的值作为新的state
* */


const App=()=>{
    //钩子函数
    const result = useState(1)
    //const [count, setCount] = result;
    // 创建变量存储数字
    let setCounter = result[1];
    /*
    * 点击+数字增加，点击-数字减少
    * */
    const addHandler=()=>{
        // 点击+
        //alert("+1");
        setCounter(result[0]+1);
    }
    const lessHandler=()=>{
        //点击-
        //alert("-1");
        setCounter(result[0]-1);
    }
    return <div className={"app"}>
        <h1>{result[0]}</h1>
        <button onClick={addHandler}>+</button>
        <button onClick={lessHandler}>-</button>
    </div>
};


// 导出App
export default App;
