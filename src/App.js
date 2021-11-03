import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Body from './components/Body'
import Shop from './components/Shop'

const App = () => {
  return (
    <div>
      <Body/>
    </div>
  //   <Router>
  //   <div>
  //     <Switch>
  //       <Route exact path="/">
  //         <Body/>
  //       </Route>
  //       <Route path="/shop">
  //         <Shop/>
  //       </Route>
  //     </Switch>
  //   </div>
  // </Router>
  )
}

export default App
