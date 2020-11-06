import Carousel2 from './carousel2'
import { Container, Row, Col} from 'react-bootstrap';
import "./../experience/experience.css";
import Videoknowledge from "./../../static/Vedioknowledge.png" 

function Knowledge() {
    const paraFounder1 = "The development spread across 14 acres totalling over 3 million sqft of grade A space, flush with gardens and water features. This colossal architectural marvel has been central to many of the worlds leading technology companies and start-ups - many of whom achieved unicorn status during their time at IBC. The likes of Accenture, IBM, Oracle, Swiggy and Byju's have all come to call IBC Knowledge Park their corporate home." 

	const paraFounder2 = "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

	const paraFounder3 = "The IBC Groups flagship development, an all encompassing project at the southern tip of Bangalore’s Central Business District, on Bannerghatta Road, benefiting from connectivity to MG road, with proximity to the vibrant neighbourhood of Koramangla surrounded by hotels and retail destinations."

	var hr_style = "hr_style"
    return(
        <div className="fz">
            <Carousel2 />
            <Container fluid="sm" className="contain fz mb-5 pb-5">
                    <Row>
                        <Col sm="auto" className="h-100  cl_carousel_topic pb-xl-4 pb-lg-3 pb-md-2 pr-0">VIDEO</Col>
                        <Col sm="1" className="h-100"><hr className='h-100 border_carousel'></hr></Col>
                    </Row>
                    <Row>
                        <Col><img className="w-100" src={Videoknowledge} /></Col>
                    </Row>
            </Container>
        </div>
    )
}

export default Knowledge;