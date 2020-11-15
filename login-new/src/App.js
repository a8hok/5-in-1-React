import React from 'react';
import { withRouter } from 'react-router-dom';

import Signup from './Components/Signup';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Signup />
      </header>
    </div>
  );
}

export default withRouter(App);
