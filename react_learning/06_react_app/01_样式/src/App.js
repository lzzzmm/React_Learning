import React, {useState} from 'react';
//import "./App.css"  //外部样式表
import classes from "./App.module.css";
const App = () => {
    const [redBorder, setRedBorder] = useState(false);
    //内联样式
    /*const pStyle = {color:"red",
        backgroundColor:"#bfa",
        border:!redBorder?"blue solid 1px":"red solid 1px"};*/


    /*
    CSS 模块
        1、创建一个xxx.module.css
        2、在组件中引入css
            import classes from "./App.module.css";
        3、通过classes来设置类
    CSS 模块可以动态的设置唯一的class值
     */
    const [showBorder, setShowBorder] = useState(false);
    const clickHandler=()=>{
        setShowBorder(true);
    }
    return (
        <div>
           {/* <p style={pStyle}>我是一个段落</p>*/}
            {/*<p className={`p1 ${redBorder?"": "blueBorder"}`}>我是一个段落</p>*/}
            {/*<button onClick={clickHandler}>点我一下</button>*/}
            <p className={`${classes.p1} ${showBorder?classes.Border:""}`}>我是一个段落</p>
            <button onClick={clickHandler}>点我一下</button>
        </div>
    );
};

export default App;