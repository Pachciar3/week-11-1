import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

import Page from "./components/Page";
import Home from "./home";
import Users from "./users/containers/users";
import Header from "./components/Header"
import Messages from "./ui/containers/Messages";
import rootReducer from "./rootReducer";
import './app.scss';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Header />
          <main>
            <Switch>
              <Route exact path="/">
                <Page title="Home">
                  <Home />
                </Page>
              </Route>
              <Route path="/users">
                <Page title="Users">
                  <Users />
                </Page>
              </Route>
            </Switch>
            <Messages />
          </main>
          <footer>
            Created by <strong>Dawid Pachciarek</strong>
          </footer>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
