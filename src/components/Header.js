//

import {MoreIcon, ReturnIcon} from './Icons';
import React, {Component} from 'react';
import headerStyles from '../css/header.css';
import {BrowserRouter as Router, withRouter, Link} from 'react-router-dom';

class Header extends Component {

    render() {
        return (
            <div className="header">
                    <Link to='/' className='return'>
                    <ReturnIcon/>
                    </Link>
                    <Link to='/' className='more'>
                       <MoreIcon/>
                    </Link>
            </div>
        );
    }
}

export default Header;