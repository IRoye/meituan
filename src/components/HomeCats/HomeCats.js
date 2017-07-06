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
    
    render() {
        return (
            <div className="nav">
            <div className='nav-items-row'>
                <Link to='/'>
                    <SnackIcon />
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