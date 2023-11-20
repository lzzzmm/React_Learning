import React from "react";
const App=()=>{
    return <div>Hello React</div>
};

/*
类组件必须继承React.Component
 */
class AppClass extends React.Component{
    //类组件中，必须添加一个render()方法，且方法的返回值要是一个JSX
    render(){
        return <div>我是一个类组件</div>
    }
}
// 导出App
export default AppClass;
