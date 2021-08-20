import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

import Home from './pages/HomePage'
import Kiosk from './pages/KioskPage';

function App() {
  return (
    <BrowserRouter>
      <HeaderComponent />
      <div className="App">
        <Route path="/kiosk" component={Kiosk} />
        <Route path="/" exact component={Home} /> 
      </div>
      <FooterComponent />
    </BrowserRouter>
  );
};

export default App;
