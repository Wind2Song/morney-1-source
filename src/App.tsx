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
import { Tag } from 'views/Tag';

const AppWrapper = styled.div`
  color: #333;
  max-width: 420px;
  margin: 0 auto;
`;

function App() {
  return (
    <AppWrapper>
      <Router>
          <Switch>
            <Route exact path="/tags/:fuck">
              <Tag />
            </Route>
            <Route exact path="/tags">
              <Tags />
            </Route>
            <Route exact path="/money">
              <Money />
            </Route>
            <Route exact path="/statistics">
              <Statistics />
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
