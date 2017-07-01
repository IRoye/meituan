import React, {Component} from 'react';
import './css/App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
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
    );
  }
}

export default App;
