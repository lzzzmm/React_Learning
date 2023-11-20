import React from 'react';

const App = () => {

    const clickHandler = (event) => {
        event.preventDefault();//取消默认行为
        event.stopPropagation();//取消事件的冒泡
        alert(event)
        alert("我是APP中的clickHandler");
        //return false;
        /*
        在react中，无法通过return false取消默认行为
        return false;

        事件对象
            -react事件中同样会传递事件对象，可以在响应函数中定义参数接收事件对象
            -react中事件对象同意不是原生对象，是经过react包装后的事件对象
            -由于对象进行包装，所以使用过程中无需考虑兼容性问题
        */
    }

    return (
        <div onClick={()=>{alert('div');}}
            style={{width:200, height:200, margin:'100px auto', backgroundColor:"#bfa"}}>
            <button onClick={()=>{alert(123);}}>点我一下</button>
            <button onClick={clickHandler}>哈哈</button>
            <a href="#" onClick={clickHandler}>超链接</a>
        </div>
    );
    /*在react中事件需要通过元素的属性设置
    * 和原生的JS不同，在react中事件的属性需要用驼峰命名法
    * onclick->onClick
    * onchange->onChange
    *
    * 属性值不能直接执行代码，而是需要一个回调函数
    * onclick="alert(123)"
    * onClick="{()=>{alert(123)}}"
    */
};

/*
<button  onclick="alert（123）">点我一下</button>


<button id={"btn"}>点我一下</button>
document.getElementById("btn").onClick = function (){};
document.getElementById("btn").addElementListener("click", function(){}, false);
 */


export default App;