import { Container, Row, Col} from 'react-bootstrap';
import Carousel1 from '../knowledge/carousel1';
import './carousel1'
import Carousel2 from './corousel2';

function Home() {
    return (
        <div>
            <Carousel1 />
            <Container fluid="sm" className="contain future_head fz">
                <Container fluid="sm" className="contain h-75 pr-0 pl-0">
                    <Row>
                        <Col sm="auto" className="h-100  cl_carousel_topic pb-xl-4 pb-lg-3 pb-md-2 pr-0">OUR ASSETS</Col>
                        <Col sm="1" className="h-100"><hr className='h-100 border_carousel'></hr></Col>
                    </Row>
                    <Row>
                        <Col>
                            <p className="info_content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        </Col>
                    </Row>
                    <Row className="counts_golden mt-xl-5 mt-lg-4 mt-md-3 mt-sm-2">
                        <Col sm='2'><p className='number_golden mb-0'>15</p><p className="text_count">million sq ft.</p></Col>
                        <Col sm='auto' className="border_golden px-lg-5 px-md-4 px-sm-3"><p className='number_golden mb-0'>$18 Billion</p><p className="text_count">in assets</p></Col>
                        <Col sm='auto' className="pl-4"><p className='number_golden mb-0'>100,000+</p><p className="text_count">member community</p></Col>
                    </Row>
                </Container>
            </Container>
            <Carousel2 />
        </div>
    )
}

export default Home;