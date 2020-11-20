import { Container, Row, Col } from 'react-bootstrap';
import './navbar.css';
import ibcIcon from './../../static/IBCicon.png';
import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    withRouter
} from "react-router-dom";

class Navbar_Desktop extends Component {
	constructor(props) {
        super(props);
    }

render() {
	return (
		<div className="navbar_desktop fz mb-xl-5 mb-md-5 mb-sm-4">
			<Container fluid className="h-100">
				<Row className="h-75">
					<Col lg="7" md="6" sm="5" className="h-100 flex-row-vc" onClick={()=>{this.props.history.push("/ibc")}}><img className="pl-xl-5 pl-lg-4 pl-md-3 w-icon" src={ibcIcon} /></Col>
					<Col lg="5" md="6" sm="7" className="h-100 flex-row-hc-vc"><div className="git-h-w mr-xl-5 mr-lg-4 mr-md-3 get_in_touch">GET IN TOUCH</div></Col>
				</Row>
				<Row className="h-25 pl-3">
					<Col sm="auto" className="ml-xl-5 ml-lg-4 ml-md-3 pl-0 mr-md-2 mr-sm-1 pr-0 navbar_items"><NavLink className="flex-100" activeClassName="active_navbar_item" exact to="/ibc/tommorow">BUILDING TOMMOROW’S INDIA TODAY</NavLink></Col>
					<Col sm="auto" className="ml-navbar pl-0 mr-md-2 mr-sm-1 pr-0 navbar_items"><NavLink className="flex-100" activeClassName="active_navbar_item" exact to="/ibc/building">OUR BUILDINGS</NavLink></Col>
					<Col sm="auto" className="ml-navbar pl-0 mr-md-2 mr-sm-1 pr-0 navbar_items"><NavLink className="flex-100" activeClassName="active_navbar_item" exact to="/ibc/future">THE FUTURE IS NOW</NavLink></Col>
					<Col sm="auto" className="ml-navbar pl-0 mr-md-2 mr-sm-1 pr-0 navbar_items"><NavLink className="flex-100" activeClassName="active_navbar_item" exact to="/ibc/foundation">THE SHERIFF FOUNDATION</NavLink></Col>
					<Col sm="auto" className="ml-navbar pl-0 mr-md-2 mr-sm-1 pr-0 navbar_items"><NavLink className="flex-100" activeClassName="active_navbar_item" exact to="/ibc/experience">EXPERIENCE IBC</NavLink></Col>
					<Col sm="auto" className="ml-navbar pl-0 mr-md-2 mr-sm-1 pr-0 navbar_items"><NavLink className="flex-100" activeClassName="active_navbar_item" exact to="/ibc/portfolio">DIVERSED PORTFOLIOS</NavLink></Col>
					<Col sm="auto" className="ml-navbar pl-0 mr-md-2 mr-sm-1 pr-0 navbar_items"><NavLink className="flex-100" activeClassName="active_navbar_item" exact to="/ibc/contact_us">CONTACT US</NavLink></Col>
				</Row>
			</Container>
		</div>
	)
}
}

export default withRouter(Navbar_Desktop);