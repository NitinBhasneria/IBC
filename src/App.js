import history from './history';
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import contactUs from './components/contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/responsive.css';
import Navbar_Desktop from './components/navbar.js';

function App() {
  return (
    <Router history={history} forceRefresh={true}>
      	<Navbar_Desktop />
      	<Switch>
         	<Route exact path='/ibc/' component={contactUs}/>
         </Switch>
    </Router>
  );
}

export default App;
