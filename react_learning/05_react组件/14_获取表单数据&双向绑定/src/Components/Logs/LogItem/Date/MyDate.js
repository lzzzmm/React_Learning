import React from 'react';
import "./MyDate.css"
const MyDate = (props) => {
    const month = props.date.toLocaleString("zh-CN", {month:'long'});
    return (
        <div className="date">
            <div className="month">
                {month}
            </div>
            <div className="day">
                {props.date.getDate()}
            </div>
        </div>
    );
};

export default MyDate;