import React, {Component} from 'react';
import '../css/footer.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {HomeIcon, OrderIcon, UserIcon} from './Icons';
import {BrowserRouter as Router, Link } from 'react-router-dom';

export default class Footer extends Component {

    render() {
        return (
            <MuiThemeProvider>
                <Router>
                <div className="footer">
                    <div className='item'>
                    <Link to='/'>
                    <HomeIcon
                        style={{
                        width: '30px',
                        height: '30px'
                    }} active={true}/>
                    </Link>
                    </div>
                    <div className='item'>
                        <Link to='/'>
                    <OrderIcon
                        style={{
                        width: '30px',
                        height: '30px'
                    }} active={true}/>
                    </Link>
                    </div>
                    <div className='item'>
                        <Link to='/about'>
                    <UserIcon
                        style={{
                        width: '30px',
                        height: '30px'
                    }} active={true}/>
                    </Link>
                    </div>
                </div>
                </Router>
            </MuiThemeProvider>
        );
    }
}