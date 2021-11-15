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
import Index from "./components/utils/Admin/Index";
import Login from './components/utils/authentication/Login'
import Signup from "./components/utils/authentication/Signup";
import Dashboard from "./components/utils/Dashboard";
import AddProducts from "./components/utils/Admin/AddProducts";


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
        <Route path="/dashboard">
          <Dashboard/>
        </Route>
        <Route path="/admin">
          <Index/>
        </Route>
        <Route path="/addproduct">
          <AddProducts/>
        </Route>
      </Switch>
    </div>
  </Router>
  )
}

export default App
