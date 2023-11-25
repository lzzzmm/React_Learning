/*
日志的容器
 */
import LogItem from "./LogItem/LogItem";
import Card from "../UI/Card/Card";
import "./Log.css"
import LogFilter from "../LogFilter/LogFilter";
import {useState} from "react";
const Logs = (props)=>{
    /*
    logData 用来存储学习的日志
        这个数据处理当前组件Logs需要使用外，LogsForm也需要使用
        当遇到一个数据被多个组件使用时，可以将数据放入到这些组件共同的祖先元素中
        这样就可以使得多个组件都能访问到这个数据

     state的提升
     */
    const [year, setYear] = new useState(2022);
    //创建一个修改年份的
    const changeYearHandler=(year)=>{
      setYear(year);
    };
    // 过滤数据，只显示某一年的数据
    let filterData = props.logsData.filter(item=>item.date.getFullYear() === year);
    // 将数放入JSX中
    let logItemData = filterData.map((item, index)=><LogItem onDelLog={()=>props.onDelLog(item.id)} key={item.id} test={item.test} date={item.date}/>);
    if (logItemData.length === 0) logItemData = <p>没有找到日志！</p>;
    return <Card className="logs">
        {/*引入年份选择器*/}
        <LogFilter current={year} onYearChange={changeYearHandler}/>
        {
            logItemData
            //logsData.map(item=><LogItem key={item.id} test={item.test} date={item.date}/>)
            //logsData.map(item=><LogItem key={item.id} {...item}/>) //这样写就是属性名和参数名得一样
        }
    </Card>
}

export default Logs;