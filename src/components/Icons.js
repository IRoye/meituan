import SvgIcon from 'material-ui/SvgIcon';
import {orangeA100, blue500} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import React, {Component} from 'react';

 class HomeIcon extends Component {

    render() {
        return (
            <MuiThemeProvider>
                <SvgIcon
                    style={this.props.style}
                    color={this.props.active ? orangeA100 : blue500}>
                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                </SvgIcon>
            </MuiThemeProvider>
        );
    }
}

export {HomeIcon};