import React, {Component} from 'react';
import '../css/footer.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {HomeIcon, OrderIcon, UserIcon} from './Icons';
import {BrowserRouter as Router, withRouter, Link } from 'react-router-dom';

const Footer = (props) => {
        return (    
            <MuiThemeProvider>
                <div className="footer">
                    <div className='item'>
                    <Link to='/'>
                    <HomeIcon
                        style={{
                        width: '30px',
                        height: '30px'
                    }} active={props.location.pathname === '/'}/>
                    </Link>
                    </div>
                    <div className='item'>
                        <Link to='/order'>
                    <OrderIcon
                        style={{
                        width: '30px',
                        height: '30px'
                    }} active={props.location.pathname === '/order'}/>
                    </Link>
                    </div>
                    <div className='item'>
                        <Link to='/mine'>
                    <UserIcon
                        style={{
                        width: '30px',
                        height: '30px'
                    }} active={props.location.pathname === '/mine'}/>
                    </Link>
                    </div>
                </div>
            </MuiThemeProvider>
        );
}

//  假如withRouter 才会显示location的信息
export default withRouter(Footer);