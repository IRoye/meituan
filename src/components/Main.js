import React,{Component} from 'react';
//import {BroswerRouter as Router, Route, Switch , Link} from 'react-router-dom';
import About from './About';
import Faq from './Faq';

 import {
   BrowserRouter as Router,
   Route,
   Link
 } from 'react-router-dom'

export default class Main extends Component {

    render() {
        return (
            <Router>
                <div>
                    <Route path='/about' component={About} />
                    <Route path='/faq' component={Faq} />
                </div>
            </Router>
        );
    }
}