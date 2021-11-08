import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Body from './components/pages/Body'
import Gallery from "./components/pages/Gallery";
import PriceAlert from "./components/pages/PriceAlert";
import Shop from './components/pages/Shop'
import Login from './components/utils/authentication/Login'
import Signup from "./components/utils/authentication/Signup";

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
        <Route path="/prices">
          <PriceAlert/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/signup">
          <Signup/>
        </Route>
      </Switch>
    </div>
  </Router>
  )
}

export default App
