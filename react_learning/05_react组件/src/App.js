import React from "react";
import Logs from "./Components/Logs/logs";
import Card from "./Components/UI/Card/Card";
import LogForm from "./Components/LogFrom/LogForm";
import "./App.css"
const App=()=>{
    return <div className={"app"}>
        {/*引入logForm*/}
        <LogForm/>
        <Logs/>
    </div>
};


// 导出App
export default App;
