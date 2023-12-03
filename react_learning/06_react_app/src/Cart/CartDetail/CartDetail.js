import React, {useContext, useState} from 'react';
import Backdrop from "../../components/UI/backdrop/backdrop";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrain} from "@fortawesome/free-solid-svg-icons";
import classes from "./CartDetail.module.css"
import CartContext from "../../store/cart.context";
import Meal from "../../components/Meals/Meal/Meal";
import Confirm from "../../components/UI/Confirm/Confirm";
const CartDetail = () => {
    const ctx = useContext(CartContext);
    //控制确认框
    const [showConfirm, setShoeConfirm] = useState(false);
    const showConfirmHandler=()=>{
        setShoeConfirm(true);
    }
    const cancelHandler=(e)=>{
        e.stopPropagation();
        setShoeConfirm(false);
    }
    const okHandler=()=>{
        ctx.cartDispatch({type:"CLEAR"});
    }
    return (
        <Backdrop>
            {showConfirm && <Confirm confirmText={"确认清空购物车"} onCancel={cancelHandler} onOk={okHandler}/>}
            <div className={classes.CartDetails} onClick={e=>e.stopPropagation()}>
                <header className={classes.Header}>
                    <h2 className={classes.Title}>餐品详情</h2>
                    <div className={classes.Clear} onClick={showConfirmHandler}>
                        <FontAwesomeIcon icon={faTrain}/>
                        清空购物车
                    </div>
                </header>
                <div className={classes.MealList}>
                    {ctx.items.map(item=><Meal key={item.id} meal={item}/>)}
                </div>
            </div>
        </Backdrop>
    );
};

export default CartDetail;