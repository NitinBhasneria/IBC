import history from './history';
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import contactUs from './components/contact_us/contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/responsive.css';
import Navbar_Desktop from './components/navbar_desktop/navbar.js';
import "./components/contact_us/Contact.css";
import Future from "./components/future_is_now/future";

function App() {
  return (
    <Router history={history} forceRefresh={true}>
      	<Navbar_Desktop />
      	<Switch>
          <Route exact path='/ibc/future' component={Future} />
         	<Route exact path='/ibc/contact_us' component={contactUs}/>
         </Switch>
    </Router>
  );
}

export default App;
