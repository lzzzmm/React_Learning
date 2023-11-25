import React, {useState} from 'react';
import MyDate from "./Date/MyDate";
import  "./LogItem.css"
import Card from "../../UI/Card/Card";
import ConfirmModel from "../../ConfirmModel/ConfirmModel";
/*
按rsc自动生成框架
 */
const LogItem = (props) => {
    // 在函数组件中，属性相当于是函数的参数，可以通过参数访问
    // 可以在函数组件的形参中定义一个props，props指向的是一个对象
    // props包含父组件中传递的所有参数 props是只读的不能修改
    const clickHandler=()=>{
        /*const isDelete = window.confirm("不可恢复，是否确认？");
        if (isDelete){
            props.onDelLog(props.logIndex);
        }*/

        // 显示确认窗口
        setShowConfirm(true);
    }

    // 取消按钮
    const cancelHandler=()=>{
        setShowConfirm(false);
    }

    // 确认按钮
    const confirmHandler=()=>{
        props.onDelLog();
        setShowConfirm(false);
    }
    // 添加一个state，记录是否显示确认窗口
    const [showConfirm, setShowConfirm] = useState(false);

    /*
    portal
        组件默认会作为父组件的后代渲染到页面中
        但是有些情况下，这种方式会带来一些问题
        通过portal可以将组件渲染到页面中的指定位置
        使用方法：
            1、在index.html添加一个新元素
            2、修改组件渲染方式
                - 通过ReactDom.createPortal()作为返回值创建元素
                - 参数：
                    1、JSX（修改前return后的代码）
                    2、目标位置（DOM元素）
     */
    return (
        <Card className="item">
            {showConfirm && <ConfirmModel confirmTest={"该操作不可恢复，请确认"} onCancel={cancelHandler} onConfirm={confirmHandler}/>}

            <MyDate date={props.date}/>

            {/*日志内容的容器*/}
            <div className="content">
                <h2 className="desc">学习React {props.test}</h2>
                <div className="time">40分钟</div>
            </div>
            {/*添加一个删除按钮*/}
            <div>
                <div className={'delete'} onClick={clickHandler}>X</div>
            </div>
        </Card>
    );
};
/*组件间，父组件可以通过props（属性）向子组件传递数据*/
export default LogItem;