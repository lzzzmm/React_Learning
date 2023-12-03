import React, {useReducer, useState} from 'react';
import Meals from "./components/Meals/Meals";
import CartContext from "./store/cart.context";
import FilterMeals from "./components/FilterMeal/FilterMeals";
import Cart from "./Cart/Cart";
import Confirm from "./components/UI/Confirm/Confirm";
// 模拟一组食物数据
const MEALS_DATA = [
    {
        id: '1',
        title: '汉堡包',
        desc: '百分百纯牛肉配搭爽脆酸瓜洋葱粒与美味番茄酱经典滋味让你无法抵挡！',
        price: 12,
        img: '/img/meals/1.png'
    },
    {
        id: '2',
        title: '双层吉士汉堡',
        desc: '百分百纯牛肉与双层香软芝，加上松软面包及美味酱料，诱惑无人能挡！',
        price: 20,
        img: '/img/meals/2.png'
    },
    {
        id: '3',
        title: '巨无霸',
        desc: '两块百分百纯牛肉，搭配生菜、洋葱等新鲜食材，口感丰富，极致美味！',
        price: 24,
        img: '/img/meals/3.png'
    }, {
        id: '4',
        title: '麦辣鸡腿汉堡',
        desc: '金黄脆辣的外皮，鲜嫩幼滑的鸡腿肉，多重滋味，一次打动您挑剔的味蕾！',
        price: 21,
        img: '/img/meals/4.png'
    }, {
        id: '5',
        title: '板烧鸡腿堡',
        desc: '原块去骨鸡排嫩滑多汁，与翠绿新鲜的生菜和香浓烧鸡酱搭配，口感丰富！',
        price: 22,
        img: '/img/meals/5.png'
    }, {
        id: '6',
        title: '麦香鸡',
        desc: '清脆爽口的生菜，金黄酥脆的鸡肉。营养配搭，好滋味的健康选择！',
        price: 14,
        img: '/img/meals/6.png'
    }, {
        id: '7',
        title: '吉士汉堡包',
        desc: '百分百纯牛肉与香软芝士融为一体配合美味番茄醬丰富口感一咬即刻涌现！',
        price: 12,
        img: '/img/meals/7.png'
    }
];
// 定义cartReducer
const cartReducer = (state, action)=>{
    // 复制购物车
    const newCart = {...state};
    switch (action.type){
        case "ADD":
            if (newCart.items.indexOf(action.meal) === -1) {
                newCart.items.push(action.meal);
                action.meal.amount = 1;
            } else {
                action.meal.amount += 1;
            }

            newCart.totalAmount += 1;
            newCart.totalPrice += action.meal.price;
            return newCart;
        case "SUB":
            action.meal.amount -= 1;
            if (action.meal.amount === 0) {
                newCart.items.splice(newCart.items.indexOf(action.meal), 1);
            }
            newCart.totalAmount -= 1;
            newCart.totalPrice -= action.meal.price;
            return newCart;
        case "CLEAR":
            newCart.items.forEach(item => delete item.amount);
            newCart.items = [];
            newCart.totalAmount = 0;
            newCart.totalPrice = 0;
            return newCart;
        default:
            return state;
    }
}
const App = () => {
    // 创建一个state用来存储食物列表
    const [mealsData, setMealsData] = useState(MEALS_DATA);

    // 创建一个state，用来存储购物车的数据
    /*
    *   1.商品 [] items
    *   2.商品总数（totalAmount）
    *   3.商品总价（totalPrice）
    * */
    /*const [cartData, setCartData] = useState({
        items: [],
        totalAmount: 0,
        totalPrice: 0
    });*/
    const [cartData, cartDispatch] = useReducer(cartReducer, {
        items: [],
        totalAmount: 0,
        totalPrice: 0
    })

    // 向购物车中添加商品
    /*const addItem = (meal) => {
        // meal 要添加进购物车的商品
        // 对购物车进行复制
        const newCart = {...cartData};

        // 判断购物车中是否存在该商品
        if (newCart.items.indexOf(meal) === -1) {
            // 将meal添加到购物车中
            newCart.items.push(meal);
            // 修改商品的数量
            meal.amount = 1;
        } else {
            // 增加商品的数量
            meal.amount += 1;
        }

        // 增加总数
        newCart.totalAmount += 1;
        // 增加总金额
        newCart.totalPrice += meal.price;

        // 重新设置购物车
        setCartData(newCart);
    };*/

    /*//减少商品的数量
    const removeItem = (meal) => {
        // 复制购物车
        const newCart = {...cartData};

        // 减少商品的数量
        meal.amount -= 1;

        // 检查商品数量是否归0
        if (meal.amount === 0) {
            // 从购物车中移除商品
            newCart.items.splice(newCart.items.indexOf(meal), 1);
        }

        // 修改商品总数和总金额
        newCart.totalAmount -= 1;
        newCart.totalPrice -= meal.price;

        setCartData(newCart);
    };*/

    // 创建一个过滤meals的函数
    const filterHandler = (keyword)=>{
        const newMealsData = MEALS_DATA.filter(item=>item.title.indexOf(keyword) !== -1);
        setMealsData(newMealsData);
    }

    /*const clearCart = () => {

        const newCart = {...cartData};
        // 将购物车中商品的数量清0
        newCart.items.forEach(item => delete item.amount);
        newCart.items = [];
        newCart.totalAmount = 0;
        newCart.totalPrice = 0;

        setCartData(newCart);
    };*/
    /*
    Too many re-renders
    - 当直接在函数体中调用setState时，会触发上述错误
    - 问题：
        不是说过，当新的state值和旧值相同时，不会触发组件重新渲染吗？
    - setState()的执行流程（函数组件）
        setCount() --> dispatchSetDate()
                --> 会先判断，组件当前处于什么阶段
                        渲染阶段    -->  不会检查state值是否相同
                        非渲染阶段  --> 会检查state的值是否相同
                            - 如果值不同，则对组件进行重新渲染
                            - 如果值相同，则不对组件进行重新渲染
                                - 如果值相同，react在一些情况下回继续执行当前组件的渲染
                                但是这个渲染不会触发其子组件的渲染，这次渲染不会产生实际效果

     */
    /*
    useEffect()是一个钩子函数，需要一个函数作为参数
    这个作为参数的函数，将会在组件渲染完毕后执行
    在开发中，可以将那些会产生副作用的代码编写到useEffect回调函数中
    这样就可以避免这些代码影响到组件的渲染
     */
    /*
    useReducer(reducer, initialArg, init)
        reducer:整合函数
            对于当前state的所有操作都应该在该函数中定义
            该函数的返回值，会成为state的新值
            reducer执行时会收到两个参数：
                1、当前最新的state
                2、action 需要一个对象
                    在对象中会存储dispatch所发送的指令
        initialArg:state的初始值，作用和useState()中的值一样
    返回值：
        第一个参数，state用来获取state值
        第二个参数，state次改的派发器
            通过派发器可以发送操作state命令
            具体的修改行为会由另外一个函数(reducer)执行

    为了避免reducer会重复创建，通常reducer会定义到组件外部
     */

    /*
    useCallBack是一个钩子函数，用来创建React中的回调函数
    useCallBack创建的回调函数不会总在组件重新渲染时重新创建
        1、回调函数
        2、依赖数组
            当依赖数组中的变量发生变化，回调函数才会重新创建
            如果不指定依赖数组，回调函数每次都会重新创建
            一定要把回调函数中使用的所有变量都设置到依赖数组中除了setState
     */
    return (
        /*<CartContext.Provider value={{...cartData, addItem, removeItem,clearCart}}>*/
        <CartContext.Provider value={{...cartData, cartDispatch}}>
            <div>
                <FilterMeals onFilter={filterHandler}></FilterMeals>
                <Meals mealsData={mealsData}/>
                <Cart/>
            </div>
        </CartContext.Provider>
    );
};

export default App;