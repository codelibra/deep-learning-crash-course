import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';

import './App.css';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import Form from './components/Form';
import Navigator from './components/navigator';


class App extends Component {
  constructor() {
    super();
    this.state = {
    }
  }


    render() {
      return (
      <div className="App">
      <div className="App-header">
      </div>
      <Navigator/>
      <div className="App-content">
        <Switch>
           <Route exact path='/demo/' component={Form}/>
           
        </Switch> 
      </div>  
      </div>
      );
    }
  }

  export default App;
