import React, {useState} from "react";
import Logs from "./Components/Logs/logs";
import Card from "./Components/UI/Card/Card";
import LogForm from "./Components/LogFrom/LogForm";
import "./App.css"
import ConfirmModel from "./Components/ConfirmModel/ConfirmModel";
const App=()=>{
    const [logsData, setLogData]=useState([
        {
            id:"001",
            date:new Date(2021,10,20,19,1,4),
            test:"学习",
            time:30
        },
        {
            id:"002",
            date:new Date(2022,7,5,4,1,4),
            test:"学习2",
            time:302
        }
    ])
    /*
    下一步：
        将logsForm中的数据传递给APP组件，APP组件，将新的日志添加到数组中
     */

    // 定义一个函数
    const saveLogHandler=(newLog)=>{
        //添加id
        newLog.id = Date.now() + '';
        //添加到数组中
        //logsData.push(newLog);
        setLogData([...logsData, newLog])
    };

    // 定义一个函数，从数据中删除一条数据
    /*const delLogByIndex = (index)=>{
        setLogData(prevState => {
            const newLogs = [...prevState];
            newLogs.splice(index, 1);
            return newLogs;
        })
    }*/
    const delLogById = (id)=>{
        setLogData(prevState => {
            return prevState.filter(item=>item.id !== id);
        })
    }
    return <div className={"app"}>
        {/*引入logForm*/}
        <LogForm onSaveLog={saveLogHandler}/>
        <Logs logsData={logsData} onDelLog={delLogById}/>
    </div>
};


// 导出App
export default App;
