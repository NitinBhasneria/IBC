import {Container, Row, Col} from 'react-bootstrap';
import './footer.css';

function  Footer() {
    return (
        <div>
            <Container fluid className="footer fz">
                <Container fluid="sm" className="contain pt-7">
                    <Row className="row_footer pr-2">
                        <Col sm="7" className="w-100 h-100"><p className="info_content mt-0_8">Sign up to receive exclusive news and offers about the latest launches</p></Col>
                        <Col sm="3" className="h-100 pr-0 w-100">
                            <div className="h-100 w-100"><input type='text' placeholder='Enter Email' className="enter_email pl-3 w-100 h-100"/></div>
                        </Col>
                        <Col sm="2" className="pl-0 h-100"><div className="h-100 signup_footer">SIGN UP</div></Col>
                    </Row>
                    <Row className="w-100 mr-5 pt-xl-5 pt-lg-4 pt-sm-3 ml-0 pr-2"><div className="w-100 hr_footer"></div></Row>
                    <Row>
                        <Col lg={{ span: 2, offset: 10 }} md={{ span: 3, offset: 9 }} sm={{ span: 4, offset: 8 }} className="who_are_we pt-lg-4 pt-md-3 pt-sm-3">WE ARE THE FUTURE</Col>
                        <Col lg={{ span: 2, offset: 10 }} md={{ span: 3, offset: 9 }} sm={{ span: 4, offset: 8 }} className="info_content_18 pt-lg-4 pt-md-3 pt-sm-3">WHO ARE WE</Col>
                        <Col lg={{ span: 2, offset: 10 }} md={{ span: 3, offset: 9 }} sm={{ span: 4, offset: 8 }} className="info_content_18 pt-lg-4 pt-md-3 pt-sm-3">LEADERSHIP TEAM</Col>
                        <Col lg={{ span: 2, offset: 10 }} md={{ span: 3, offset: 9 }} sm={{ span: 4, offset: 8 }} className="info_content_18 pt-lg-4 pt-md-3 pt-sm-3">INVESTOR RELATION</Col>
                        <Col lg={{ span: 2, offset: 10 }} md={{ span: 3, offset: 9 }} sm={{ span: 4, offset: 8 }} className="info_content_18 pt-lg-4 pt-md-3 pt-sm-3">THE THIRD SPACE</Col>
                        <Col lg={{ span: 2, offset: 10 }} md={{ span: 3, offset: 9 }} sm={{ span: 4, offset: 8 }} className="info_content_18 pt-lg-4 pt-md-3 pt-sm-3">CARRERS</Col>
                        <Col lg={{ span: 2, offset: 10 }} md={{ span: 3, offset: 9 }} sm={{ span: 4, offset: 8 }} className="info_content_18 pt-lg-4 pt-md-3 pt-sm-3">MEDIA CENTER</Col>
                        <Col lg={{ span: 2, offset: 10 }} md={{ span: 3, offset: 9 }} sm={{ span: 4, offset: 8 }} className="info_content_18 pt-lg-4 pt-md-3 pt-sm-3">SUSTAINABILITY</Col>
                        <Col lg={{ span: 2, offset: 10 }} md={{ span: 3, offset: 9 }} sm={{ span: 4, offset: 8 }} className="info_content_18 pt-lg-4 pt-md-3 pt-sm-3">CONTACT US</Col>
                    </Row>
                </Container>
            </Container>
            <Container className="footer_foot fz pl-0 pr-0" fluid >
                <Row className="h-88 pt-3">
                    <Col sm="6" className='w-100 h-100 pr-0 pl-0 pr-5 privacy'><p className="pr-5"></p>PRIVACY POLICY</Col>
                    <Col sm="6" className='w-100 h-100 pr-0 pl-5 terms'>TERMS AND CONDITIONS</Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer;