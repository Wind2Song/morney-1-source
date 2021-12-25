import React from 'react';
import './App.css';
import styled from 'styled-components';
// import Button from 'components/Button'
import Nav from './components/Nav';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

const Wrapper = styled.div`
  border: 1px solid red;
  height: 100vh;
  display:flex;
  flex-direction: column;
`
// flex-grow: 1;表示标签高度尽量高；下一行表示滚动条就只在这个标签里
const Main = styled.div`
  flex-grow: 1;
  overflow: auto;
`



function App() {
  return (
    <Router>
      <Wrapper>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Main>
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
        </Main>
        <Nav />
      </Wrapper>
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
  return <h2>标签页面</h2>;
}

function Money() {
  return <h2>记账页面</h2>;
}

function Statistics() {
  return <h2>统计页面</h2>;
}

export default App;
