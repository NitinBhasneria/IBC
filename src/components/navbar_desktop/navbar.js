import { Container, Row, Col } from 'react-bootstrap';
import './navbar.css';
import ibcIcon from './../../static/IBCicon.png';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    withRouter
} from "react-router-dom";


function Navbar_Desktop() {
	return (
		<div className="navbar_desktop fz mb-xl-5 mb-md-5 mb-sm-4">
			<Container fluid className="h-100">
				<Row className="h-75">
					<Col lg="7" md="6" sm="5" className="h-100 flex-row-vc"><img className="pl-xl-5 pl-lg-4 pl-md-3 w-icon" src={ibcIcon} /></Col>
					<Col lg="5" md="6" sm="7" className="h-100 flex-row-hc-vc"><div className="w-25 h-50 mr-xl-5 mr-lg-4 mr-md-3 get_in_touch">GET IN TOUCH</div></Col>
				</Row>
				<Row className="h-25 pl-3">
					<Col sm="auto" className="ml-xl-5 ml-lg-4 ml-md-3 pl-0 mr-md-2 mr-sm-1 pr-0 navbar_items"><NavLink className="flex-100" exact to="">BUILDING TOMMOROW’S INDIA TODAY</NavLink></Col>
					<Col sm="auto" className="ml-navbar pl-0 mr-md-2 mr-sm-1 pr-0 navbar_items"><NavLink className="flex-100" activeClassName="active_navbar_item" exact to="/ibc/building">OUR BUILDINGS</NavLink></Col>
					<Col sm="auto" className="ml-navbar pl-0 mr-md-2 mr-sm-1 pr-0 navbar_items"><NavLink className="flex-100" activeClassName="active_navbar_item" exact to="/ibc/future">THE FUTURE IS NOW</NavLink></Col>
					<Col sm="auto" className="ml-navbar pl-0 mr-md-2 mr-sm-1 pr-0 navbar_items"><NavLink className="flex-100" activeClassName="active_navbar_item" exact to="">THE SHERIFF FOUNDATION</NavLink></Col>
					<Col sm="auto" className="ml-navbar pl-0 mr-md-2 mr-sm-1 pr-0 navbar_items"><NavLink className="flex-100" activeClassName="active_navbar_item" exact to="">EXPERIENCE IBC</NavLink></Col>
					<Col sm="auto" className="ml-navbar pl-0 mr-md-2 mr-sm-1 pr-0 navbar_items"><NavLink className="flex-100" activeClassName="active_navbar_item" exact to="">DIVERSED PORTFOLIOS</NavLink></Col>
					<Col sm="auto" className="ml-navbar pl-0 mr-md-2 mr-sm-1 pr-0 navbar_items"><NavLink className="flex-100" activeClassName="active_navbar_item" exact to="/ibc/contact_us">CONTACT US</NavLink></Col>
				</Row>
			</Container>
		</div>
	)
}

export default Navbar_Desktop;