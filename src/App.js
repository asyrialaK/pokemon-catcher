import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <>
        <Link to="/">Poké Center</Link>
        <Link to="/wildencounter">Route 102</Link>
        <Switch>
          {/* <Route exact path="/" component={Landing} />
          <Route exact path="/wildencounter" component={WildEncounter} />
          <Route exact path="/pokemon/:id" component={Pokemon} /> */}
        </Switch>
      </>
    </Router>
  );
}

export default App;