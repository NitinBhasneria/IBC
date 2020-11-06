import { Container, Row, Col} from 'react-bootstrap';
import Founder from './../../static/founder.png'
import Carousel from './tommorow_carousel.js'

function Tommorow() {
	const paraFounder1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." 

	const paraFounder2 = "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

	const paraFounder3 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."

	const paraFounder4 = "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." 
	var hr_style = "hr_style"
	return (
		<div>
			<div className="fz tommorow">
				<Container fluid="sm" className="contain h-75 pr-0 pl-0">
		            <Row>
		            	<Col sm="auto" className="h-100  cl_carousel_topic pb-xl-4 pb-lg-3 pb-md-2 pr-0">WHO WE ARE</Col>
		                <Col sm="1" className="h-100"><hr className='h-100 border_carousel'></hr></Col>
		            </Row>
		            <Row>
		                <Col>
		            		<p className="info_tommorow">At IBC, we take pride in being 100 percent family owned and operated which in turn helps us provide and maintain the highest quality of service to our clients. </p>
		            	</Col>
					</Row>
					<Row>
						<Col sm="auto"><hr className={hr_style}></hr></Col>
						<Col sm="auto" className="pl-0"><p className="info_content">It all started 55 years ago with a dream to build distinctive landmarks.</p></Col>
					</Row>
					<Row>
						<Col sm="auto"><hr className={hr_style}></hr></Col>
						<Col sm="auto" className="pl-0"><p className="info_content">Today, we have over $1.8 billion in assets with 82 completed projects in 9 countries.</p></Col>
					</Row>
					<Row>
						<Col sm="auto"><hr className={hr_style}></hr></Col>
						<Col sm="11" className="pl-0"><p className="info_content">Being 100 percent family owned has benifitted us with being decisive due to which at any given point in time today, we boast over 500+ happy families and 80,000+ member corporative community.</p></Col>
					</Row>
				</Container>
			</div>
			<Container fluid="sm" className="founders contain fz">
				<Row className="width_founder h-100">
					<Col sm="4" className="meet h-75"><p className="para_meet mb-0">MEET OUR FOUNDER</p></Col>
					<Col sm="4" className="meet h-75 meet_border"><p className="para_meet mb-0">MEET OUR OWNER</p></Col>
					<Col sm="4" className="meet h-75"><p className="para_meet mb-0">MEET OUR CHAIRMAN</p></Col>
				</Row>
			</Container>
			<div className="contact_tommorow pt-xl-5 pt-lg-4 pt-md-3 pt-sm-3 mb-xl-5 mb-md-4 mb-sm-3 fz">
                <Container fluid="sm" className = "contain h-100">
                    <Row className = "h-100 w-100">
                        <Col sm={4} className = "h-100 pr-0" >
                            <img src={Founder}
                                class="image"/></Col>
                        <Col sm className="h-100 info pr-0">
                            <Row className="founder_head_topic pb-xl-3 pb-md-2 pt-xl-5 pt-lg-4 pt-md-3 pl-sm-2 pl-xl-5 pl-lg-4 pl-md-3 pl-sm-2 info">Lorem ipsum</Row>
                            <Row className="px-xl-5 px-lg-4 px-md-3 px-sm-2 pb-xl-5 pb-lg-4 pb-md-3 info">
                            	<Col className="pl-0"><p className="paras pl-0">{paraFounder1}<br></br><br></br>{paraFounder2}<br></br><br></br>{paraFounder3}<br></br><br></br>{paraFounder4}</p></Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Carousel />
		</div>
	)
}

export default Tommorow;