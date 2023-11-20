import React, {Component} from 'react';

class User extends Component {
    /*
    类组件的props是存储到类的实例对象中
        可以直接通过实例对象访问
        this.props

    类组件中state统一存储到实例对象的state属性中
        可以通过this.state访问
        通过this.setState对其进行修改
            当通过this.setState修改state时，react只会修改设置了的属性，没有修改的之前的属性会保留，但仅限于直接存储于state中的属性

    函数组件中，响应函数直接以函数的形式定义在组件中
        在类组件中，响应函数以类的方法定义


    获取DOM对象
        1、创建一个属性，用来存储DOM对象
            divRef = React.createRef();
        2、将这个属性设置为指定元素的ref值
     */
    //创建DOM对象
    divRef = React.createRef();

    state = {  //类里面写不用加this，在类里面的函数写就要加this
        count:0
    }

    clickHandler = ()=>{
        //this.setState({count:this.state.count + 1});
        //this.setState(prevCount=>{return {count:prevCount.count + 1}});
        console.log(this.divRef);
    }
    render() {
        console.log(this.props);
        return (
            <div ref={this.divRef}>
                <h1>{this.state.count}</h1>
                <button onClick={this.clickHandler}>点</button>
                <ul>
                    <li>姓名:{this.props.name}</li>
                    <li>年龄:{this.props.age}</li>
                    <li>性别:{this.props.gender}</li>
                </ul>
            </div>
        );
    }
}

export default User;