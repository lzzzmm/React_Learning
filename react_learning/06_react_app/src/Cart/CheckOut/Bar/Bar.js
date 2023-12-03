import React from 'react';
import classes from "./Bar.module.css"
import CheckOut from "../CheckOut";
import CartDetail from "../../CartDetail/CartDetail";
import iconImage from "../../../asset/bag.png";
const Bar = (props) => {
    return (
        <div className={classes.Bar}>
            <div className={classes.TotalPrice}>{props.totalPrice}</div>
            <button className={classes.Button}>去支付</button>
        </div>
    );
};

export default Bar;