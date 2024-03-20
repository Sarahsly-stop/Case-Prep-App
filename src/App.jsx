// App.js
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./Layout";
import FrameworksTab from "./tabs/FrameworksTab";
import GraphsTab from "./tabs/GraphsTab";
import MathTab from "./tabs/MathTab";
import CaseExamplesTab from "./tabs/CaseExamplesTab";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/frameworks" component={FrameworksTab} />
          <Route path="/graphs" component={GraphsTab} />
          <Route path="/math" component={MathTab} />
          <Route path="/case-examples" component={CaseExamplesTab} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
