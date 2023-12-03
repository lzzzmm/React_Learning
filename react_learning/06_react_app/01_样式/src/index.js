import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
/*npx create-react-app name  这个命令创建项目，会自动添加需要的依赖*/
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

