import React, {useRef, useState} from "react";
import "./App.css"

let temp;
const App=()=>{
/*
获取原生DOM对象
    1、可是使用传统的document.getElementById对DOM进行操作
    2、直接从react处获取DOM对象
        1、创建一个存储DOM对象的容器
            - 使用useRef()钩子函数
                - 钩子函数注意事项
                    react中的钩子函数只能用于函数组件或自定义钩子
                    钩子函数只能直接在函数组件中调用（函数组件中的函数中定义就不行，会报错）
        2、将容器设置为想要获取DOM对象元素的ref属性
            <h1 ref={xxx}>XXX</h1>
            react会自动自动将当前元素的FOM对象，设置为容器current属性

   useRef()
    - 返回的是一个普通JS对象
    - {current:undefined}
    - 直接创建一个js对象也可以代替useRef()   const h1Ref = {current:undefined};
    - 区别：
        自己创建对象，组件每次重新渲染都会创建一个新对象
        useRef创建的对象，可以确保每次渲染获取的都是同一个对象




 */
    const [count, setCount] = useState(1);
    const h1Ref = useRef(); //创建一个容器
    //const h1Ref = {current:undefined};
    console.log(temp === h1Ref);
    temp = h1Ref;

    const clickHandler=()=>{
        // 通过id获取h1
        //const header = document.getElementById("header");
        //alert(header);
        //header.innerHTML = "哈哈";

        //alert(h1Ref.current)
        h1Ref.current.innerText = "嘻嘻！";
        setCount(()=>count+1);
    };
    return <div className={"app"} >
        <h1 id={"header"} ref={h1Ref}>{count}</h1>
        <button onClick={clickHandler}>1</button>
        <button>2</button>
    </div>
};


// 导出App
export default App;
