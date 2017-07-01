import React, {Component} from 'react';
import '../css/footer.css';
import SvgIcon from 'material-ui/SvgIcon';
import {orangeA100, blue500 }from 'material-ui/styles/colors';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const HomeIcon = (props) => (
    <SvgIcon {...props} color={props.active ? orangeA100 : blue500 }>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
    </SvgIcon>
);

export default class Footer extends Component {

    render() {
        const iconStyles = {
            marginRight: '50'
        };
        return (
            <MuiThemeProvider>
                <div className="footer">
                    <HomeIcon
                        style={{
                        width: '50',
                        height: '50'
                    }} active={true}/>
                </div>
            </MuiThemeProvider>
        );
    }
}