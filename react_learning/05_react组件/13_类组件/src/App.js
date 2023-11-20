import "./App.css"
import React from "react";
import User from "./components/User";
/*
Webstrom中的快捷键:
    rsc -> 函数组件（不带props）
    rei -> 函数组件（带props）
    rcc -> 类组件
 */
class App extends React.Component{
    render() {
        return <div className={"app"}>
            <User name={"猪八戒"} age={12} gender={"男"}/>
        </div>;
    }
}

export default App;