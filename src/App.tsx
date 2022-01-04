import React from 'react';
import './App.css';
import Money from 'views/Money';
import Tags from 'views/Tags';
import NoMatch from 'views/NoMatch';
import Statistics from 'views/Statistics';
import {
  HashRouter as Router,
  Switch,
  Route,

  Redirect
} from "react-router-dom";




function App() {
  return (
    <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
          <Route path="/money">
            <Money />
          </Route>
          <Route path="/statistics">
            <Statistics />
          </Route>
          <Route path="/tags">
            <Tags />
          </Route>
          <Redirect exact from="/" to="/money" />
          <Route path="*">
            <NoMatch />
          </Route>
          </Switch>
        
    </Router>
  );
}






export default App;
