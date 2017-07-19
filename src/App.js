import React, {Component} from 'react';
import './css/App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

import {BrowserRouter as Router} from 'react-router-dom';
/**
 * 这里用Router 来包裹的话， 到main里面就可以去掉Router了；
 */
class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <div className='header-wrap'>
            <Header/>
          </div>
          <div className='main-wrap'>
            <Main/>
          </div>
          <div className='footer-wrap'>
            <Footer/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
