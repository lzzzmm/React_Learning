import React, {useContext, useEffect, useState} from 'react';
import classes from "./Cart.module.css"
import iconImage from "../asset/bag.png"
import CartContext from "../store/cart.context";
import CartDetail from "./CartDetail/CartDetail";
import CheckOut from "./CheckOut/CheckOut";
const Cart = () => {
    const ctx=useContext(CartContext);
    const [showDetail, setShowDetail] = useState(false);
    // 添加state设置结账页的显示与隐藏
    const [showCheckout, setShowCheckout] = useState(false);
    const showDetailHandler = ()=>{
        if (ctx.totalAmount === 0) {
            setShowDetail(false);
            return;
        }
        setShowDetail(prevState => !prevState);
    }
    const showCheckoutHandler = ()=>{
        if (ctx.totalAmount === 0) return;
        setShowCheckout(true);
    }
    const hideCheckoutHandler = ()=>{
        setShowCheckout(false);
    }

    // 在组件每次重新渲染的时候，检查商品数量，如果数量为0，则修改showDetails为false
    // 组件每次重新渲染，组件的函数体就会执行
    // 以下代码会报错，触发死循环
    /*if(ctx.totalAmount ===0){
        setShowDetail(false);
    }*/
    /*
    默认情况下，useEffect中的函数，会在组件渲染完成后调用
    并且是每次渲染完成后都会调用

    在useEffect可以传递一个第二个参数
        第二个参数是一个数组，数组中指定Effect依赖项
        指定后，只有当依赖发生变化，Effect才会被触发
        通常会将Effect中使用的所有变量都设置为依赖项
        setState()是由钩子函数useState生成的，useState会确保组件的每次渲染都会获取到相同的setState()对象
            所以setState()对象在useEffect中写不写都无所谓，因为一旦创建，即使重新渲染拿到的setState对象也不会改变
        如果依赖项只设置一个空数组，则意味Effect只会在组件初始化时触发一次

     */
    useEffect(() => {
        if(ctx.totalAmount ===0){
            setShowDetail(false);
            setShowCheckout(false);
    }},[ctx]);
    return (
        <div className={classes.Cart} onClick={showDetailHandler}>
            {showCheckout  && <CheckOut onHide={hideCheckoutHandler}/>}
            {/*购物车详情*/}
            {showDetail?<CartDetail></CartDetail>:""}
            <div className={classes.Icon} >
                <img src={iconImage}/>
                {ctx.totalAmount === 0?null:<span className={classes.TotalAmount}>{ctx.totalAmount}</span>}

            </div>
            {ctx.totalAmount === 0?<p className={classes.NoMeal}>未选购商品</p>:<p className={classes.Price}>{ctx.totalPrice}</p>}
            <button className={classes.Button} onClick={showCheckoutHandler}>去结算</button>
        </div>
    );
};

export default Cart;