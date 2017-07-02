import React,{Component} from 'react';
//import {BroswerRouter as Router, Route, Switch , Link} from 'react-router-dom';
import Order from './Order';
import Mine from './Mine';

 import {
   BrowserRouter as Router,
   Route
 } from 'react-router-dom'


import Home from './Home';
export default class Main extends Component {

    render() {
        return (
            <Router>
                <div>
                    <Route exat path='/' component={Home} />
                    <Route path='/order' component={Order} />
                    <Route path='/mine' component={Mine} />
                </div>
            </Router>
        );
    }
}