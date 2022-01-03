import React from 'react';
import './App.css';
import Money from 'views/Money';
// import Button from 'components/Button'
import Nav from './components/Nav';
import {
  HashRouter as Router,
  Switch,
  Route,

  Redirect
} from "react-router-dom";
import Layout from 'components/Layout';




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

function NoMatch() {
  return (
    <div>
      <h2>404</h2>
      宁访问的页面不存在
    </div>  
  )
}

function Tags() {
  return (
    <Layout>
      <h2>标签页面</h2>        
    </Layout>
  )
}


function Statistics() {
  return (
    <Layout>
      <h2>统计页面</h2>        
    </Layout>
  )
}

export default App;
