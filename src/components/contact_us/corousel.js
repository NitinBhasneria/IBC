import { Col, Container, Row } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import USA from './../../static/USA.png';
import UAE from './../../static/UAE.png';
import UK from './../../static/UK.png';
import GERMANY from './../../static/GERMANY.png';

function courousel() {
    return (
        <Container fluid="sm" className="contain pt-lg-5 F_H mt-lg-5 pt-md-4 pt-sm-3 mt-sm-4 fz">
            <Row className ='carousel_head'>
                <Col sm="auto" className="h-100 info_content cl_carousel_topic pb-xl-4 pb-lg-3 pb-md-2 pr-0">FOREIGN HEADQUARTERS</Col>
                <Col sm="1" className="h-100"><hr className='h-100 border_carousel'></hr></Col>
                <Col sm="6" className="h-100 mr-5"></Col>
            </Row>
            <Row className="pl_15px">
                <Col sm="3" className='text-center h-100'>
                    <Row><img src={USA}
                            className="pr_15px image"/></Row>
                    <h3 className='text-center head_project pt-md-3 pt-sm-2'>USA</h3>
                    <p className='text-center small_content'>Lorem ipsum dolor sit<br></br>amet, consectetur </p>
                </Col>
                <Col sm="3" className='text-center h-100'>
                    <Row><img src={UK}
                            className="pr_15px image"/></Row>
                    <h3 className='text-center head_project pt-md-3 pt-sm-2'>UK</h3>
                    <p className='text-center small_content'>Lorem ipsum dolor sit<br></br>amet, consectetur </p>
                </Col>
                <Col sm="3" className='text-center h-100'>
                    <Row ><img src={UAE}
                            className="pr_15px image"/></Row>
                    <h3 className='text-center head_project pt-md-3 pt-sm-2'>UAE</h3>
                    <p className='text-center small_content'>Lorem ipsum dolor sit<br></br>amet, consectetur </p>
                </Col>
                <Col sm="3" className='text-center h-100'>
                    <Row><img src={GERMANY}
                            className="pr_15px image"/></Row>
                    <h3 className='text-center head_project pt-md-3 pt-sm-2'>GERMANY</h3>
                    <p className='text-center small_content'>Lorem ipsum dolor sit<br></br>amet, consectetur </p>
                </Col>
              </Row>
        </Container>
    )
}

export default courousel;