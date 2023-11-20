// src/index.js 是js的入口文件

/*
三种方法：
    终端 npm init -y
    终端 yarn init -y
    项目右键new一个package.json
安装包：
    npm add react react-dom react-scripts -S

打包项目：
    npx react-scripts build （项目开发完成才会用这种方法，开发中这样做很麻烦）
    npx react-scripts start （启动内置的测试服务器，实时对代码进行编译）

    在json文件添加：
         "scripts": {
          "start": "react-scripts start",
          "build": "react-scripts build"
          },
          之后在终端运行npm start就可以了

 */

// 引入reactDOM
import ReactDOM from "react-dom/client";

// 创建一个JSX
const App = <div>
    <h1>这是一个react项目</h1>
    <p>第一个react项目</p>
</div>;

// 获取一个根容器
const root = ReactDOM.createRoot(document.getElementById("root"));

// 将APP渲染进容器
root.render(App);



