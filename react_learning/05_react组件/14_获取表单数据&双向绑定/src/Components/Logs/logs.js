/*
日志的容器
 */
import LogItem from "./LogItem/LogItem";
import Card from "../UI/Card/Card";
import "./Log.css"
const Logs = ()=>{
    // 模拟一组从服务器中加载的数据
    const logsData=[
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
    ]
    // 将数放入JSX中
    const logItemData = logsData.map(item=><LogItem key={item.id} test={item.test} date={item.date}/>);
    return <Card className="logs">
        {
            logItemData
            //logsData.map(item=><LogItem key={item.id} test={item.test} date={item.date}/>)
            //logsData.map(item=><LogItem key={item.id} {...item}/>) //这样写就是属性名和参数名得一样
        }
    </Card>
}

export default Logs;