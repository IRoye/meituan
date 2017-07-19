//  集结所有的图标

import React, {Component} from 'react';
import WineIcon from './WineIcon';
import WesternFoodIcon from './WesternFoodIcon';
import SnackIcon from './SnackIcon';
import ShopIcon from './ShopIcon';
import NoshIcon from './NoshIcon';
import FruitIcon from './FruitIcon';
import ExpressIcon from './ExpressIcon';
import DinnerIcon from './DinnerIcon';
import HomeCatsStyle from '../../css/HomeCatsStyle.css';
import {BroswerRouter as Router, Route, Switch, Link} from 'react-router-dom';

export default class HomeCats extends Component {
    
    //  在最外层注册事件
    handleTouchStart = (e) => {
        // 在用户的手指触摸屏幕的瞬间触发；
        console.log('touchStart');
        //alert('touchStart');
    }

    handleTouchMove = (e) => {
        // 在用户移动手指的过程中连续触发
        console.log('touchMove');
    }

    handleTouchEnd = (e) => {
        // 在用户的手指离开屏幕瞬间触发
        console.log('touchEnd');
    }

    render() {
        return (
            <div className="nav" onTouchStart={
                this.handleTouchStart.bind(this)}
                onTouchEnd = {this.handleTouchEnd.bind(this)}
                onTouchMove = {this.handleTouchMove.bind(this)}>
            <div className='nav-items-row'>
                <Link to='/'>
                    <SnackIcon/>
                </Link>
                <Link to='/'>
                    <ShopIcon/>
                </Link>
                <Link to='/'>
                    <FruitIcon/>
                </Link>
                <Link to='/'>
                    <WineIcon/>
                </Link>
            </div>
            <div className='nav-items-row'>
                <Link to='/'>
                    <DinnerIcon/>
                </Link>
                <Link to='/'>
                    <ExpressIcon/>
                </Link>
                <Link to='/'>
                    <WesternFoodIcon/>
                </Link>
                <Link to='/'>
                    <NoshIcon/>
                </Link>
            </div>
        </div>
        );
    }
}