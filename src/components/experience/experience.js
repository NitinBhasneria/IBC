import { Container, Row, Col} from 'react-bootstrap';
import Founder from './../../static/founder.png'
import Carousel from './../tommorow/tommorow_carousel.js'
import "./experience.css";

function experience() {
	const paraFounder1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." 

	const paraFounder2 = "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

	const paraFounder3 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."

	const paraFounder4 = "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." 
	var hr_style = "hr_style"
	return (
		<div className="fz experience mb-5">
			<Container fluid="sm" className="contain pt-5">
		        <Row>
		        	<Col sm="auto" className="h-100  cl_carousel_topic pb-xl-4 pb-lg-3 pb-md-2 pr-0">WHO WE ARE</Col>
		            <Col sm="1" className="h-100"><hr className='h-100 border_carousel'></hr></Col>
		    	</Row>
			</Container>
			<div className="contact_experience pb-5 mb-xl-5 mb-md-4 mb-sm-3 fz">
                <Container fluid="sm" className = "contain h-100">
                    <Row className = "h-100 w-100">
                        <Col sm={4} className = "h-100 pr-0 pl-0" >
                            <img src={Founder}
                                class="image"/></Col>
                        <Col sm className="h-100 info pr-0">
                            <Row className="px-xl-5 pt-xl-5 pt-lg-4 pt-md-3 pt-sm-2 h-50 px-lg-4 px-md-4 px-sm-4 pb-xl-5 pb-lg-4 pb-md-3 info">
                            	<Col className="pl-0"><p className="paras pl-0">{paraFounder1}<br></br><br></br>{paraFounder2}</p></Col>
                            </Row>
                            <Row className="px-xl-5 h-50 px-lg-4 px-md-3 px-sm-2 pb-xl-5 pb-lg-4 pb-md-3 info title_info">
                            	<Col lg="5" md="6" sm="7" className='h-50'><p className="mb-1 mt-xl-5 mt-lg-4 mt-md-3 mt-sm-2 titleName">Mr. Rahul Jaimini<br></br></p><p className="titleTitle">CEO, SWIGGY</p></Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="contact_experience pb-5 mb-xl-5 mb-md-4 mb-sm-3 fz">
                <Container fluid="sm" className = "contain h-100">
                    <Row className = "h-100 w-100">
                        <Col sm className="h-100 info pr-0">
                            <Row className="px-xl-5 pt-xl-5 pt-lg-4 pt-md-3 pt-sm-2 h-50 px-lg-4 px-md-4 px-sm-4 pb-xl-5 pb-lg-4 pb-md-3 info">
                            	<Col className="pl-0"><p className="paras pl-0">{paraFounder1}<br></br><br></br>{paraFounder2}</p></Col>
                            </Row>
                            <Row className="px-xl-5 h-50 px-lg-4 px-md-3 px-sm-2 pb-xl-5 pb-lg-4 pb-md-3 info title_info_right">
                            	<Col lg="5" md="6" sm="7" className='h-50'><p className="mb-1 mt-xl-5 mt-lg-4 mt-md-3 mt-sm-2 titleName">Mr. Rahul Jaimini<br></br></p><p className="titleTitle">CEO, SWIGGY</p></Col>
                            </Row>
                        </Col>
                        <Col sm={4} className = "h-100 pr-0" >
                            <img src={Founder}
                                class="image"/></Col>
                    </Row>
                </Container>
            </div>
		</div>
	)
}

export default experience;