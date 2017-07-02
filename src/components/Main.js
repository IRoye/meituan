import React,{Component} from 'react';
//import {BroswerRouter as Router, Route, Switch , Link} from 'react-router-dom';
import About from './About';
import Faq from './Faq';

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
                    <Route path='/about' component={About} />
                    <Route path='/faq' component={Faq} />
                </div>
            </Router>
        );
    }
}