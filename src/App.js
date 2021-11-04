import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Body from './components/pages/Body'
import Gallery from "./components/pages/Gallery";
import Shop from './components/pages/Shop'

const App = () => {
  return (
    <Router>
    <div>
      <Switch>
        <Route exact path="/">
          <Body/>
        </Route>
        <Route path="/shop">
          <Shop/>
        </Route>
        <Route path="/gallery">
          <Gallery/>
        </Route>
      </Switch>
    </div>
  </Router>
  )
}

export default App
