import React, { Component } from 'react';
import './index.scss';
import './App.css';
import Home from './pages/Home'
import O from './One'
import {Route,Switch,Redirect} from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <React.Fragment>
         <Switch>
            <Route path="/Home" component={Home}/>
            <Route path="/one" component={O}/>
            <Redirect to="/Home"/>
         </Switch>
      </React.Fragment>
    );
  }

}

export default App;