import React from 'react';
import './App.css';
import Nav from './Nav';
import Id from './Id';
import Shop from './Shop';
import CountryDetails from './CountryDetails';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/Id" component={Id}/>
        <Route path="/Shop" exact component={Shop}/>
        <Route path="/Shop/:flag" component={CountryDetails} />
        </Switch>
      </div>
    </Router>
  );
}

const Home=()=>
(
  <div>
    <h1>Home Page</h1>
  </div>
)
export default App;
