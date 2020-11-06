import Carousel1 from './carousel1'
import Carousel2 from './carousel2'
import { Container, Row, Col} from 'react-bootstrap';
import Founder from './../../static/ContactImage.png'
import "./../experience/experience.css";
import Highlight1 from "./../../static/highlight1.png";
import Highlight2 from "./../../static/highlight2.png";
import Highlight3 from "./../../static/highlight3.png";
import Highlight4 from "./../../static/highlight4.png";
import Highlight5 from "./../../static/highlight5.png";
import Highlight6 from "./../../static/highlight6.png";
import Highlight7 from "./../../static/highlight7.png";
import Highlight8 from "./../../static/highlight8.png";
import Videoknowledge from "./../../static/Vedioknowledge.png" 

function Knowledge() {
    const paraFounder1 = "The development spread across 14 acres totalling over 3 million sqft of grade A space, flush with gardens and water features. This colossal architectural marvel has been central to many of the worlds leading technology companies and start-ups - many of whom achieved unicorn status during their time at IBC. The likes of Accenture, IBM, Oracle, Swiggy and Byju's have all come to call IBC Knowledge Park their corporate home." 

	const paraFounder2 = "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

	const paraFounder3 = "The IBC Groups flagship development, an all encompassing project at the southern tip of Bangalore’s Central Business District, on Bannerghatta Road, benefiting from connectivity to MG road, with proximity to the vibrant neighbourhood of Koramangla surrounded by hotels and retail destinations."

	var hr_style = "hr_style"
    return(
        <div className="fz">
            <Carousel1 />
            <div className="contact_experience pb-5 mb-xl-5 mb-md-4 mb-sm-3 fz">
                <Container fluid="sm" className="contain">
                    <Row>
                        <Col sm="auto" className="h-100  cl_carousel_topic pb-xl-4 pb-lg-3 pb-md-2 pr-0">OVERVIEW</Col>
                        <Col sm="1" className="h-100"><hr className='h-100 border_carousel'></hr></Col>
                    </Row>
                </Container>
                <Container fluid="sm" className = "contain h-100">
                    <Row className = "h-100 w-100">
                        <Col sm={4} className = "h-100 pr-0" >
                            <img src={Founder}
                                class="image_knowledge"/></Col>
                        <Col sm className="h-100 info pr-0">
                            <Row className="px-xl-5 bg_white pt-0 h-100 px-lg-4 px-md-4 px-sm-4 pb-xl-5 pb-lg-4 pb-md-3 info">
                            	<Col className="px-3 py-0"><p className="paras_knowledge pl-0">{paraFounder3}<br></br><br></br>{paraFounder2}<br></br><br></br>{paraFounder1}</p></Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container fluid="sm" className="contain pt-5 fz">
                    <Row>
                        <Col sm="auto" className="h-100  cl_carousel_topic pb-xl-4 pb-lg-3 pb-md-2 pr-0">LOCATION</Col>
                        <Col sm="1" className="h-100"><hr className='h-100 border_carousel'></hr></Col>
                    </Row>
                    <Row className="knowledge_map">
                        <div className='h-100 w-100'></div>
                    </Row>
            </Container>
            <Container fluid="sm" className="contain fz location_container mb-xl-5 mb-lg-4">
                <Row className="location_row my-xl-5 my-lg-4 my-sm-3">
                        <Col sm="auto" className="border_location location_text pl-xl-5 pr-xl-5 px-lg-4_5 px-md-3 px-sm-2">LOCATION<br></br>FEATURES</Col>
                        <Col sm="auto" className="border_location location_text text1 px-xll-4_5 px-lg-4_5"><p className="mb-0">BUS STOP<br></br>38 KM</p></Col>
                        <Col sm="auto" className="border_location location_text text1 px-xll-4_5 px-lg-4_5"><p className="mb-0">HOSPITAL<br></br>38 KM</p></Col>
                        <Col sm="auto" className="border_location location_text text1 px-xll-4_5 px-lg-4_5"><p className="mb-0">MALLS<br></br>38 KM</p></Col>
                        <Col sm="auto" className="border_location location_text text1 px-xll-4_5 px-lg-4_5"><p className="mb-0">HOTELS<br></br>38 KM</p></Col>
                        <Col sm="auto" className="border_location location_text text1 px-xll-4_5 px-lg-4_5"><p className="mb-0">COLLEGE<br></br>38 KM</p></Col>
                        <Col sm="auto" className="location_text text1 px-xll-4_5 px-lg-4_5"><p className="mb-0">RAILWAY STATION <br></br>38 KM</p></Col>
                    </Row>
            </Container>
            <Container fluid="sm" className="contain pt-5 pb-5 fz">
                <Container fluid="sm" className="contain h-75 pr-0 pl-0">
                    <Row>
                        <Col sm="auto" className="h-100  cl_carousel_topic pb-xl-4 pb-lg-3 pb-md-2 pr-0">KEY HIGHLIGHTS</Col>
                        <Col sm="1" className="h-100"><hr className='h-100 border_carousel'></hr></Col>
                    </Row>
                    <Row>
                        <Col>
                            <p className="info_content_knowledge">Envisioned by the legendary architect Hafeez Contractor, IBC Knowledge Park was designed to provide 21st century working conditions for India’s Silicon Valley. State of the art constructionThe planned 10 year trajectory will make the IBC group India’s largest single ownership real estate company with zero debt and will be in a position to consistently beat the performance of the Inidan reality sector with added flexibility to do projects most developers.... design and materials - 360 degree glass cladding for the first time in South India, efficiency centric floor plans, high-tech fire safety and security systems, technologically advanced HVAC, power transmission and backup, elevator systems, fabulous food courts and generous break out spaces. All the more, Bangalore’s first civilian helipad for rapid transfer to and from the Airport and across the city. The parks vast green spaces filled with landscaped gardens, water bodies, fountains, and rock features stimulate the senses for an “out of world experience”.</p>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Container fluid="sm" className="contain">
                <Row>
                    <Col sm="3" className="flex-coloumn-vc">
                        <img src={Highlight1} />
                        <p className="highlight_text pt-xl-4 pt-lg-3 pt-md-2 pt-sm-1">30,000+<br></br>Member Community</p>
                    </Col>
                    <Col sm="3" className="flex-coloumn-vc">
                        <img src={Highlight2} />
                        <p className="highlight_text  pt-xl-4 pt-lg-3 pt-md-2 pt-sm-1">100% owned by IBC</p>
                    </Col>
                    <Col sm="3" className="flex-coloumn-vc">
                        <img src={Highlight3} />
                        <p className="highlight_text pt-xl-4 pt-lg-3 pt-md-2 pt-sm-1">Occupancy Certificate<br></br>Recieved</p>
                    </Col>
                    <Col sm="3" className="flex-coloumn-vc">
                        <img src={Highlight4} />
                        <p className="highlight_text pt-xl-4 pt-lg-3 pt-md-2 pt-sm-1">Largest Floor Plates<br></br>in the CBD</p>
                    </Col>
                    <Col sm="3" className="flex-coloumn-vc pt-xl-5 pt-lg-4 pt-md-3 pt-sm-2">
                        <img src={Highlight5} />
                        <p className="highlight_text pt-xl-4 pt-lg-3 pt-md-2 pt-sm-1">Largest Floor Plates<br></br>in the CBD</p>
                    </Col>
                    <Col sm="3" className="flex-coloumn-vc pt-xl-5 pt-lg-4 pt-md-3 pt-sm-2">
                        <img src={Highlight6} />
                        <p className="highlight_text  pt-xl-4 pt-lg-3 pt-md-2 pt-sm-1">World Class<br></br>Facitity Management</p>
                    </Col>
                    <Col sm="3" className="flex-coloumn-vc pt-xl-5 pt-lg-4 pt-md-3 pt-sm-2">
                        <img src={Highlight7} />
                        <p className="highlight_text pt-xl-4 pt-lg-3 pt-md-2 pt-sm-1">Excellent Client<br></br>Profile</p>
                    </Col>
                    <Col sm="3" className="flex-coloumn-vc pt-xl-5 pt-lg-4 pt-md-3 pt-sm-2">
                        <img src={Highlight8} />
                        <p className="highlight_text pt-xl-4 pt-lg-3 pt-md-2 pt-sm-1">Over 5000 Parking<br></br>Spaces</p>
                    </Col>
                </Row>
            </Container>
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