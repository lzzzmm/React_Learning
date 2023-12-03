import classes from "./backdrop.module.css"
import ReactDOM from "react-dom";
import React from 'react';

const backdropRoot = document.getElementById("backdrop-root");

const Backdrop = (props) => {
    return ReactDOM.createPortal(<div {...props} className={`${classes.BackDrop} ${props.className}`}>
        {props.children}
    </div>, backdropRoot)
};

export default Backdrop;