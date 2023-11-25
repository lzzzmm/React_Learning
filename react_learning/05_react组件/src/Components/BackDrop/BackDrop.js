import React from 'react';
import "./BackDrop.css"
import ReactDOM from "react-dom";
/*
获取backdrop的根元素
 */
const backdropRoot = document.getElementById("backup-root");

const BackDrop = (props) => {
    return ReactDOM.createPortal(<div className={"backDrop"}>
        {props.children}
    </div>, backdropRoot);
};

export default BackDrop;