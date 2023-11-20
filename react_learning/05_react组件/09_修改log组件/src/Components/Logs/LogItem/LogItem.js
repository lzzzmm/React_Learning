import React from 'react';
import MyDate from "./Date/MyDate";
import  "./LogItem.css"
/*
按rsc自动生成框架
 */
const LogItem = (props) => {
    // 在函数组件中，属性相当于是函数的参数，可以通过参数访问
    // 可以在函数组件的形参中定义一个props，props指向的是一个对象
    // props包含父组件中传递的所有参数 props是只读的不能修改
    return (
        <div className="item">
            <MyDate date={props.date}/>

            {/*日志内容的容器*/}
            <div className="content">
                <h2 className="desc">学习React {props.test}</h2>
                <div className="time">40分钟</div>
            </div>
        </div>
    );
};
/*组件间，父组件可以通过props（属性）向子组件传递数据*/
export default LogItem;