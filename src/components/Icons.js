import SvgIcon from 'material-ui/SvgIcon';
import {orangeA100, blue500} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import React, {Component} from 'react';


//  主页
 class HomeIcon extends Component {

    render() {
        return (
            <MuiThemeProvider>
                <div>
                <SvgIcon
                    style={this.props.style}
                    color={this.props.active ? orangeA100 : blue500}>
                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                </SvgIcon>
                <div>首页</div>
                </div>
            </MuiThemeProvider>
        );
    }
}
//  订单
 class OrderIcon extends Component {
    render() {
        return(
        <MuiThemeProvider>
                <div>
                <SvgIcon
                    style={this.props.style}
                    color={this.props.active ? orangeA100 : blue500}>
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                </SvgIcon>
                <div>订单</div>
                </div>
            </MuiThemeProvider>
        )
    }
}

class  UserIcon extends Component {

    render() {
        return (
            <MuiThemeProvider>
                <div>
                <SvgIcon
                    style={this.props.style}
                    color={this.props.active ? orangeA100 : blue500}>
                    <path d="M3 5v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2zm12 4c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zm-9 8c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6v-1z"/>
                    <path d="M0 0h24v24H0z" fill="none" />
                </SvgIcon>
                <div>我的</div>
                </div>
            </MuiThemeProvider>
        );
    }
}


export {HomeIcon, OrderIcon, UserIcon};