import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import routes from "./pages/routes";

import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        {routes.map(({ component: Component, path, ...rest }) => {
          return (
            <Route
              render={(props) => (
                <React.Suspense fallback={"loading..."}>
                  <Component {...props} />
                </React.Suspense>
              )}
              key={path}
              path={path}
              {...rest}
            />
          );
        })}
      </Switch>
    </Router>
  );
}

export default App;
