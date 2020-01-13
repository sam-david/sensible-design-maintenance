import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://sensible-design.s3-us-west-1.amazonaws.com/image-assets/logos/sensible-design/sd-long-logo.svg" className='company-logo' />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Site Under Maintenance. Check back soon!
        </p>
      </header>
    </div>
  );
}

export default App;
