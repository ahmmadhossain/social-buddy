import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "@material-ui/core";
import Header from "./components/Header/Header";
import NotFound from "./components/NotFound/NotFound";
import Posts from "./components/Posts/Posts";
import PostDetails from "./components/PostDetails/PostDetails";

function App() {
  return (
    <div>
      <Header></Header>
      <Container maxWidth="sm">
        <Router>
          <Switch>
            <Route path="/PostDetails/:id">
              <PostDetails />
            </Route>
            <Route exact path="/">
              <Posts />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </Container>
    </div>
  );
}

export default App;
