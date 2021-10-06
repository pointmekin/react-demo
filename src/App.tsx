import React from 'react';
import './App.css';
import Home from './component/Home';
import { Switch, Route } from 'react-router-dom';
import About from './component/About';

function App() {

  return(
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
      </Switch>
    </>
  )
}

export default App;
