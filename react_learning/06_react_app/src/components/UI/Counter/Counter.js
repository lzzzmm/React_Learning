import React, {useContext} from 'react';
import classes from './Counter.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus, faMinus} from "@fortawesome/free-solid-svg-icons";
import CartContext from "../../../store/cart.context";
import cartContext from "../../../store/cart.context";
/*
引入FontAwesome
    - 安装依赖
        npm i --save @fortawesome/fontawesome-svg-core
        # Free icons styles
        npm i --save @fortawesome/free-solid-svg-icons
        npm i --save @fortawesome/free-regular-svg-icons
        npm i --save @fortawesome/react-fontawesome@latest
     - 引入组件
        import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
     - 引入图标
        import {faPlus} from "@fortawesome/free-solid-svg-icons";
 */

const Counter = (props) => {
    const ctx = useContext(cartContext);
    const addButtonHandler = ()=>{
        //props.onAdd(props.meal);
        //ctx.addItem(props.meal);
        ctx.cartDispatch({type:"ADD", meal:props.meal})
    }
    const subButtonHandler = ()=>{
        //props.onSub(props.meal);
        //ctx.removeItem(props.meal);
        ctx.cartDispatch({type:"SUB", meal:props.meal})
    }
    return (
        <div className={classes.Counter}>
            {
                (props.meal.amount && props.meal.amount !== 0)
                    ?  <>
                        <button className={classes.Sub} onClick={subButtonHandler}><FontAwesomeIcon icon={faMinus}/></button>
                        <span className={classes.Count}>{props.meal.amount}</span>
                    </>
                     : ""
            }
            <button className={classes.Add} onClick={addButtonHandler}>
              <FontAwesomeIcon icon={faPlus}/>
            </button>
        </div>
    );
};

export default Counter;