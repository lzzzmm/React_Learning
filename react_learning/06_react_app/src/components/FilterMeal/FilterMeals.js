import React, {useEffect, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import classes from "./FilterMeals.module.css"
const FilterMeals = (props) => {
    const [keyword, setKeyword] = useState("");

    useEffect(() => {
        // 降低数据过滤次数，提高用户体验
        // 用户输入完了再过滤，输入过程中不要过滤
        // 当用户停止输入后一秒，才过滤
        // 下面这种写法并没有减少触发次数
        /*setTimeout(()=>{
            props.onFilter(keyword);
        }, 1000)*/
        // 在开启一个定时器的同时关闭少一次
        // 在Effect的回调函数中，可以指定一个函数作为返回值,称为清理函数，会在下次Effect执行前调用
        // 可以在这个函数中，做一些工作清除上次Effect执行所带来的影响
        const timer = setTimeout(()=>{
            props.onFilter(keyword);
        }, 1000)
        return ()=>{
            clearTimeout(timer);
        };
    }, [keyword]);
    const inputChangeHandler=e=>{
        /*const keyword = e.target.value;
        props.onFilter(keyword);*/
        setKeyword(e.target.value.trim());
    }

    return (
        <div className={classes.FilterMeals}>
            <div className={classes.InputOuter}>
                <input value={keyword} onChange={inputChangeHandler} type="text" placeholder={"请输入关键字"} className={classes.SearchInput}/>
                <FontAwesomeIcon icon={faSearch} className={classes.SearchIcon}></FontAwesomeIcon>
            </div>
        </div>
    );
};

export default FilterMeals;