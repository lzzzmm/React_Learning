/*
日志的容器
 */
import LogItem from "./LogItem/LogItem";
import "./Log.css"
const Logs = ()=>{
    return <div className="logs">
        {/*在父组件中可以直接在子组件中设置属性*/}
        <LogItem test="123"/>
        <LogItem/>
        <LogItem/>
        <LogItem/>
    </div>
}

export default Logs;