import history from './history';
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import contactUs from './components/contact_us/contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/responsive.css';
import Navbar_Desktop from './components/navbar_desktop/navbar.js';
import "./components/contact_us/Contact.css";
import "./components/future_is_now/future.css";
import "./components/building/our_buildings.css";
import Future from "./components/future_is_now/future";
import Footer from "./components/footer_desktop/footer"
import Buildings from "./components/building/our_buildings"
import "./components/tommorow/tommorow.css";
import Tommorow from "./components/tommorow/tommorow";
import Experience from "./components/experience/experience"
import "./components/experience/experience.css"
import Foundation from "./components/foundation/foundation.js";
import "./components/foundation/foundation.css";
import "./components/knowledge/knowledge.css";
import Knowledge from "./components/knowledge/knowledge.js"

function App() {
  return (
    <Router history={history} forceRefresh={false}>
      	<Navbar_Desktop />
      	<Switch>
          <Route exact path='/ibc/knowledge' component={Knowledge} />
          <Route exact path='/ibc/foundation' component={Foundation} />
          <Route exact path='/ibc/experience' component={Experience} />
          <Route exact path='/ibc/tommorow' component={Tommorow} />
          <Route exact path='/ibc/building' component={Buildings} />
          <Route exact path='/ibc/future' component={Future} />
         	<Route exact path='/ibc/contact_us' component={contactUs}/>
         </Switch>
         <Footer />
    </Router>
  );
}

export default App;
