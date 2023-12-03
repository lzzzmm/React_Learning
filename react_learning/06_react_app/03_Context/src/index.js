import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import "./index.css"
/*npx create-react-app name  这个命令创建项目，会自动添加需要的依赖*/

// 设置移动端适配
// 除以几视口的宽度就是多少rem，设置视口的总宽度为750rem
document.documentElement.style.fontSize = 100 / 750 + 'vw';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

