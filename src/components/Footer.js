import React, {Component} from 'react';
import '../css/footer.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {HomeIcon} from './Icons';


export default class Footer extends Component {

    render() {
        return (
            <MuiThemeProvider>
                <div className="footer">
                    <HomeIcon
                        style={{
                        width: '50px',
                        height: '50px'
                    }} active={true}/>
                </div>
            </MuiThemeProvider>
        );
    }
}