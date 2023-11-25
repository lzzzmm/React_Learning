import React, {useRef, useState} from 'react';
import Card from "../UI/Card/Card";
import "./LogForm.css"
import logs from "../Logs/logs";
const LogForm = () => {
    /*
    当表单发生变化时，获取用户输入的内容

     */
    // 创建三个变量存储用户输入的内容，这是非受控的
    /*let inputDate = "";
    let inputDesc = "";
    let inputTime = 0;*/

    /*const [inputDate, setInputDate] = useState();
    const [inputDesc, setInputDesc] = useState();
    const [inputTime, setInputTime] = useState();*/

    //将表单数据统一到一个state中
    const [formData, setFormData] = useState({
        inputDate:"",
        inputDesc:"",
        inputTime:""
    });

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
        //inputDesc = e.target.value;
        //setInputDesc(e.target.value)
        setFormData({
            ...formData, inputDesc: e.target.value
        })
    };
    const dateChangeHandler = (e)=>{
        //console.log(e.target.value);
        //inputDate = e.target.value;
        //setInputDate(e.target.value);
        setFormData({
            ...formData, inputDate: e.target.value
        })
    };
    const timeChangeHandler = (e)=>{
        //console.log(e.target.value);
        //inputTime = e.target.value;
        //setInputTime(e.target.value);
        setFormData({
            ...formData, inputTime: e.target.value
        })
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
            date:new Date(formData.inputDate),
            desc:formData.inputDesc,
            time:formData.inputTime
        }
        console.log(newLog);
        /*
        提交表单后清空表单中的旧数据
            现在这种表单，在react中称为非受控组件

        可以将表单中的数据存储到state中
            然后将state设置为表单value值，这样当表单发生变化时，state会随之发生变化
            反之，state发生变化，表单也会跟着改变，这种操作称为双向绑定
            这样依赖，表单就称为一个受控组件
         */
        /*setInputDate("");
        setInputTime("");
        setInputDesc("");*/
        setFormData({
            inputDesc: "",
            inputDate: "",
            inputTime: ""
        })

    }
    return (
        <div>
            <Card className={'logs-form'}>
                <form onSubmit={formSubmitHandler}>
                    <div className={"form-item"}>
                        <label htmlFor="date">日期</label>
                        <input id={"date"} type="date" onChange={dateChangeHandler} value={formData.inputDate}/>
                    </div>
                    <div className={"form-item"}>
                        <label htmlFor="desc" >描述</label>
                        <input id={"desc"} type="text" onChange={descChangeHandler} value={formData.inputDesc}/>
                    </div>
                    <div className={"form-item"}>
                        <label htmlFor="time">时长</label>
                        <input id={"time"} type="number" onChange={timeChangeHandler} value={formData.inputTime}/>
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