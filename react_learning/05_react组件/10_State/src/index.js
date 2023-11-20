/*
组件
    - react中逐渐有两种创建方式
    - 函数式组件
        - 就是一个返回JSX的普通函数
        - 组件的首字母必须大写
    - 类组件
 */
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"
const root = ReactDOM.createRoot(document.getElementById("root"));
// React组件可以直接通过JSX渲染
root.render(<App/>)


