import React, {useContext} from 'react';
import "./testContext"
import TestContext from "./testContext";
/*
访问context方式二：
    1、导入context
    2、使用钩子函数useContext()获取context
        useContext()需要一个Context作为参数
        会将Context中数据获取并作为返回值返回

xxx.Provider
    表示数据的生产者，可以使用它来指定Context中的数据
    通过value指定context中存储的数据
    这样在该组件的的所有的子组件都可以通过Context访问它所指定数据
 */
const B = () => {
    // 使用钩子函数获取Context
    const ctx = useContext(TestContext);
    return (
        <div style={{fontSize:"12px"}}>
            {ctx.name} -- {ctx.age}
        </div>
    );
};

export default B;