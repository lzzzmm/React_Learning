import React, {useState} from "react";
import "./App.css"
/*
State
    - state实际上是一个被react管理的变量
        当我们通过setState()修改变量时，会触发组件的自动渲染
    - 只有state值发生变化时候，组件才会重新渲染
    - 当state的值是一个对象，修改时是使用新的对象去替换已有对象
    - 当通过setState修改一个state时，并不表示修改当前的state，修改的是组件下一次渲染时的state
    - setState()会触发组件的重新渲染，是异步的
        所以当调用setCounter需要用到旧state时，要注意：
            有可能出现计算错误的情况
            为避免这种情况，可以通过setState传递回调函数的形式来修改state
 */

const App=()=>{
    //钩子函数
    const result = useState({name:"孙悟空", age:8})
    const [counter, setCounter] = result;
    const addHandler=()=>{
        //setCounter({name: "猪八戒", age:9});

        // 如果直接修改旧的state对象，由于对象还是那个对象，所以不会生效
        /*counter.age = 15;
        setCounter(counter)*/

        /*const newCount = Object.assign({}, counter);
        newCount.age = 15;
        setCounter(newCount);*/
        //setCounter({...counter, name: "猪八戒"})
        setTimeout(()=>{
            //setCounter({...counter, age:counter.age+1})
            // setState()中回调函数的返回值会成为新的state值
                //回调函数执行时，react会将最新的state值作为参数值
            setCounter((prevCounter)=> {
                //react 确保prevCounter永远是最新的
                return {...prevCounter, age:prevCounter.age+1}
            })
        }, 1000)
    }

    return <div className={"app"}>
        <h1>{counter.name}---{counter.age}</h1>
        <button onClick={addHandler}>+</button>
    </div>
};


// 导出App
export default App;
