import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Tags from './Components/Tags';
import './App.css';

const mapStatetoProps = (state) => ({ news : state});

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Tags /> 
      </header>
    </div>
  );
}

const appComponent = withRouter(App);

export default connect(mapStatetoProps)(appComponent);
