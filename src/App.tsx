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
import styled from 'styled-components'

const AppWrapper = styled.div`
color: #333;
`;

function App() {
  return (
    <AppWrapper>
      <Router>
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
    </AppWrapper>
  );
}






export default App;
