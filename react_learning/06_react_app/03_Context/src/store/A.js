import React from 'react';
import "./testContext"
import TestContext from "./testContext";

/*
使用方式一：
    1、引入context
    2、使用xxx.Consumer 组件创建元素
        Consumer的标签需要一个回调函数
        会将Context设置回调函数的参数，通过参数就可以访问到context中存储的数据
 */
const A = () => {
    return (
        <div style={{fontSize:"12px"}}>
            <TestContext.Consumer>  {/*里面是回调函数*/}
                {(ctx)=>{
                    return <div>{ctx.name} - {ctx.age}</div>
                }}
            </TestContext.Consumer>
        </div>
    );
};

export default A;