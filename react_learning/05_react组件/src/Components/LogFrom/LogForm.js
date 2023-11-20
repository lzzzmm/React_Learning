import React, {useRef} from 'react';
import Card from "../UI/Card/Card";
import "./LogForm.css"
import logs from "../Logs/logs";
const LogForm = () => {
    /*
    当表单发生变化时，获取用户输入的内容

     */
    // 创建三个变量存储用户输入的内容
    let inputDate = "";
    let inputDesc = "";
    let inputTime = 0;
    //创建一个响应函数，监听表单项的变化
    //const descRef = useRef();
    const descChangeHandler = (e)=>{
        /*const desc = document.getElementById("desc");
        console.log(desc.value);*/

        //console.log(descRef.current.value);

        // 获取当前触发事件的对象
        // 事件对象中保存了当前事件触发时的所有信息
        // event.target执行的是触发事件的对象（DOM对象）
        //console.log(e.target.value);
        inputDesc = e.target.value;
    };
    const dateChangeHandler = (e)=>{
        //console.log(e.target.value);
        inputDate = e.target.value;
    };
    const timeChangeHandler = (e)=>{
        //console.log(e.target.value);
        inputTime = e.target.value;
    };

    // 当表单提交时，汇总表单中的数据
    /*
    在react中 通常表单不需要自行提交
        而是通过react提交
     */
    const formSubmitHandler=(e)=>{
        //取消表单的默认行为
        e.preventDefault();
        const newLog={
            date:new Date(inputDate),
            desc:inputDesc,
            time:inputTime
        }
        console.log(newLog);

    }
    return (
        <div>
            <Card className={'logs-form'}>
                <form onSubmit={formSubmitHandler}>
                    <div className={"form-item"}>
                        <label htmlFor="date">日期</label>
                        <input id={"date"} type="date" onChange={dateChangeHandler}/>
                    </div>
                    <div className={"form-item"}>
                        <label htmlFor="desc" >描述</label>
                        <input id={"desc"} type="text" onChange={descChangeHandler}/>
                    </div>
                    <div className={"form-item"}>
                        <label htmlFor="time">时长</label>
                        <input id={"time"} type="number" onChange={timeChangeHandler}/>
                    </div>
                    <div className={"form-btn"}>
                        <button>添加</button>
                    </div>
                </form>
            </Card>
        </div>
    );
};

export default LogForm;