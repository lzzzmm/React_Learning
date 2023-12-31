import React, {useRef, useState} from 'react';
import Card from "../UI/Card/Card";
import "./LogForm.css"
import logs from "../Logs/logs";
const LogForm = (props) => {
    const [formData, setFormData] = useState({
        inputDate:"",
        inputDesc:"",
        inputTime:""
    });


    const descChangeHandler = (e)=>{
        setFormData({
            ...formData, inputDesc: e.target.value
        })
    };
    const dateChangeHandler = (e)=>{
        setFormData({
            ...formData, inputDate: e.target.value
        })
    };
    const timeChangeHandler = (e)=>{
        setFormData({
            ...formData, inputTime: e.target.value
        })
    };

    const formSubmitHandler=(e)=>{
        //取消表单的默认行为
        e.preventDefault();
        const newLog={
            date:new Date(formData.inputDate),
            desc:formData.inputDesc,
            time:formData.inputTime
        }
        //当添加新日志时，调用父组件传递过来的函数
        props.onSaveLog(newLog);
        console.log(newLog);
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