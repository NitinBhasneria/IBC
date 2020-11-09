import Carousel2 from './../knowledge/carousel2'
import { Container, Row, Col} from 'react-bootstrap';
import Videoknowledge from "./../../static/Vedioknowledge.png" 

function GallaryVideo() {
    return(
        <div>
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

export default GallaryVideo;