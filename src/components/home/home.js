import { Container, Row, Col} from 'react-bootstrap';
import Carousel1 from './carousel1'
import Carousel2 from './corousel2';
import Presence from './../../static/presence.png';
import Founder from './../../static/founder.png';
import Founder2 from './../../static/pic2.png';

function Home() {
    return (
        <div>
            <Carousel1 />
            <Container fluid="sm" className="contain homeIBCgroup fz">
                <Container fluid="sm" className="contain h-75 pr-0 pl-0">
                    <Row>
                        <Col sm="auto" className="h-100  cl_carousel_topic pb-xl-4 pb-lg-3 pb-md-2 pr-0">THE IBC GROUP</Col>
                        <Col sm="1" className="h-100"><hr className='h-100 border_carousel'></hr></Col>
                    </Row>
                    <Row>
                        <Col>
                            <p className="info_content">IBC is the largest 100% family owned and operated real estate firm in India. Established over 55 years ago, we have successfully developed projects across the globe. We are renowned for our specialization in property development for consistently raising benchmarks and pushing the markets beyond its bounds.</p>
                        </Col>
                    </Row>
                    <Row className="counts_golden mt-xl-5 mt-lg-4 mt-md-3 mt-sm-2">
                        <Col sm='2'><p className='number_golden mb-0'>15</p><p className="text_count">million sq ft.</p></Col>
                        <Col sm='auto' className="border_golden px-lg-5 px-md-4 px-sm-3"><p className='number_golden mb-0'>$1.8 Billion</p><p className="text_count">in assets</p></Col>
                        <Col sm='auto' className="pl-4"><p className='number_golden mb-0'>100,000+</p><p className="text_count">member community</p></Col>
                    </Row>
                </Container>
            </Container>
            <Carousel2 />
            <Container fluid="sm" className="contain presence fz mb-xl-5 mb-lg-4 mb-md-3 mb-sm-2">
                <Container fluid="sm" className="contain h-75 pr-0 pl-0">
                    <Row>
                        <Col sm="auto" className="h-100  cl_carousel_topic pb-xl-4 pb-lg-3 pb-md-2 pr-0">OUR PRESENCE</Col>
                        <Col sm="1" className="h-100"><hr className='h-100 border_carousel'></hr></Col>
                    </Row>
                    <Row>
                        <Col><img className="w-100" src={Presence} /></Col>
                    </Row>
                    <Row className="my-xl-5 my-lg-4 my-md-3 my-sm-2">
                        <Col className="grey_box w-100">
                            <p className="presence_places">India, Germany, United States of America, United Kingdom, United Arab Emirates, Saudi Arabia, Cyprus, Greece, Uzbekistan, Romania. </p>
                        </Col></Row>
                </Container>
            </Container>
            <Container fluid="sm" className="contain founder_head fz pb-xl-4">
                <Container fluid="sm" className="contain h-75 pr-0 pl-0">
                    <Row>
                        <Col sm="auto" className="h-100  cl_carousel_topic pb-xl-4 pb-lg-3 pb-md-2 pr-0">FOUNDERS</Col>
                        <Col sm="1" className="h-100"><hr className='h-100 border_carousel'></hr></Col>
                    </Row>
                    <Row>
                        <Col className="flex_founder_head h-75"><p className="founder_heading">FROM FATHER TO FATHER</p><p className="founder_para">Our values of integrity, excellence and passion have been passed on from generation to generation<br></br>Our Core Values include:<br></br>1. Customer satisfaction<br></br>2.Optimum utilization of each sq ft<br></br>3. Focused on vuilding long term relationships<br></br>4. Hire and develop the best<br></br> 5. Earn trust</p></Col>
                        <Col ><img className="w-96 h-93" src={Founder} /><p className="mt-lg-3 mt-md-2 mt-sm-1 founder_title">Lorem ipsum dolor sit. </p></Col>
                        <Col ><Row><img className="w-92" src={Founder2} /></Row><Row><p className="mt-md-2 mt-sm-1 founder_title" >Lorem ipsum dolor sit. </p></Row>
                            <Row><img className="w-92 mt-sm-1" src={Founder2} /></Row><Row><p className="mt-md-2 mt-sm-1 founder_title">Lorem ipsum dolor sit. </p></Row>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </div>
    )
}

export default Home;