import { Carousel, Col, Container, Row } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import USA from './../../static/USA.png';
import UAE from './../../static/UAE.png';
import UK from './../../static/UK.png';
import GERMANY from './../../static/GERMANY.png';

function courousel() {
    return (
        <Container fluid="sm" className="contain pt-lg-5 pt-md-4 pt-sm-3 fz">
            <Row className ='carousel_head'>
                <Col sm="auto" className="h-100 info_content cl_carousel_topic pb-xl-4 pb-lg-3 pb-md-2 pr-0">FOREIGN VENTURES</Col>
                <Col sm="1" className="h-100"><hr className='h-100 border_carousel'></hr></Col>
                <Col sm="6" className="h-100 mr-5"></Col>
            </Row>
              <Row className="pl_15px">
                <Col sm="3" className='text-center h-100'>
                      <Row><img src={USA}
                              className="pr_15px image"/></Row>
                      <h3 className='text-center head_project pt-md-3 pt-sm-2'>Sherrif Centre</h3>
                  </Col>
                  <Col sm="3" className='text-center h-100'>
                      <Row><img src={UK}
                              className="pr_15px image"/></Row>
                      <h3 className='text-center head_project pt-md-3 pt-sm-2'>Estate</h3>
                  </Col>
                  <Col sm="3" className='text-center h-100'>
                      <Row><img src={UAE}
                              className="pr_15px image"/></Row>
                      <h3 className='text-center head_project pt-md-3 pt-sm-2 mb-0'>Senate</h3>
                      <p className='text-center small_content'>BLOCK G</p>
                  </Col>
                  <Col sm="3" className='text-center h-100'>
                      <Row><img src={GERMANY}
                              className="pr_15px image"/></Row>
                      <h3 className='text-center head_project pt-md-3 pt-sm-2'>Golden Towers</h3>
                  </Col>
                </Row>
                <Row className="pl_15px">
                  <Col sm="3" className='text-center h-100'>
                        <Row><img src={USA}
                                className="pr_15px image"/></Row>
                        <h3 className='text-center head_project pt-md-3 pt-sm-2 mb-0'>Golden Enclave</h3>
                        <p className='text-center small_content'>-Residential</p>
                    </Col>
                    <Col sm="3" className='text-center h-100'>
                        <Row><img src={UK}
                                className="pr_15px image"/></Row>
                        <h3 className='text-center head_project pt-md-3 pt-sm-2'>The Presidency</h3>
                    </Col>
                    <Col sm="3" className='text-center h-100'>
                        <Row><img src={UAE}
                                className="pr_15px image"/></Row>
                        <h3 className='text-center head_project pt-md-3 pt-sm-2 mb-0'>Rich Homes</h3>
                        <p className='text-center small_content'>BLOCK G</p>
                    </Col>
                    <Col sm="3" className='text-center h-100'>
                        <Row><img src={GERMANY}
                                className="pr_15px image"/></Row>
                        <h3 className='text-center head_project pt-md-3 pt-sm-2'>Summit</h3>
                    </Col>
                </Row>
                <Row className="pl_15px"  className="mb-xl-5 mb-lg-4 mb-md-3 mb-sm-2">
                  <Col sm="3" className='text-center h-100'>
                        <Row><img src={USA}
                                className="pr_15px image"/></Row>
                        <h3 className='text-center head_project pt-md-3 pt-sm-2 mb-0'>Sherrif House</h3>
                    </Col>
                    <Col sm="3" className='text-center h-100'>
                        <Row><img src={UK}
                                className="pr_15px image"/></Row>
                        <h3 className='text-center head_project pt-md-3 pt-sm-2'>Binny Cresent Apartment</h3>
                    </Col>
                    <Col sm="3" className='text-center h-100'>
                        <Row><img src={UAE}
                                className="pr_15px image"/></Row>
                        <h3 className='text-center head_project pt-md-3 pt-sm-2 mb-0'>169 MG Road</h3>
                        <p className='text-center small_content'>BLOCK G</p>
                    </Col>
                    <Col sm="3" className='text-center h-100'>
                        <Row><img src={GERMANY}
                                className="pr_15px image"/></Row>
                        <h3 className='text-center head_project pt-md-3 pt-sm-2 mb-0'>Golden Enclave</h3>
                        <p className='text-center small_content'>-Commercial</p>
                    </Col>
                </Row>
        </Container>
    )
}

export default courousel;
                {/* <Col sm="11" className='text-center h-100'>
                    <Row><img src={USA}
                            className="image"/></Row>
                    <h3 className='text-center head_project pt-xl-5 pt-md-3 pt-sm-2'>RIAH Towers</h3>
                    <p className='text-center small_content'>-Dubai</p>
                </Col>
                <Col sm="11" className='text-center h-100'>
                    <Row><img src={UK}
                            className="image"/></Row>
                    <h3 className='text-center head_project pt-xl-5 pt-md-3 pt-sm-2'>Q Tower</h3>
                    <p className='text-center small_content'>-Cyprus</p>
                </Col>
                <Col sm="11" className='text-center h-100'>
                    <Row><img src={UAE}
                            className="image"/></Row>
                    <h3 className='text-center head_project pt-xl-5 pt-md-3 pt-sm-2'>AL Manera Towers</h3>
                    <p className='text-center small_content'>-Dubai</p>
                </Col>
                <Col sm="11" className='text-center h-100'>
                    <Row><img src={GERMANY}
                            className="image"/></Row>
                    <h3 className='text-center head_project pt-xl-5 pt-md-3 pt-sm-2'>Golden Towers</h3>
                    <p className='text-center small_content'>-amet, consectetur </p>
                </Col>
                <Col sm="11" className='text-center h-100'>
                    <Row><img src={USA}
                            className="image"/></Row>
                    <h3 className='text-center head_project pt-xl-5 pt-md-3 pt-sm-2'>xxx</h3>
                    <p className='text-center small_content'>-USA</p>
                </Col>
                <Col sm="11" className='text-center h-100'>
                    <Row><img src={UK}
                            className="image"/></Row>
                    <h3 className='text-center head_project pt-xl-5 pt-md-3 pt-sm-2'>xxx</h3>
                    <p className='text-center small_content'>-USA</p>
                </Col>
                <Col sm="11" className='text-center h-100'>
                    <Row><img src={UAE}
                            className="image"/></Row>
                    <h3 className='text-center head_project pt-xl-5 pt-md-3 pt-sm-2'>Blue Sky</h3>
                    <p className='text-center small_content'>-Cyprus</p>
                </Col>
                <Col sm="11" className='text-center h-100'>
                    <Row><img src={GERMANY}
                            className="image"/></Row>
                    <h3 className='text-center head_project pt-xl-5 pt-md-3 pt-sm-2'>Q McKenney</h3>
                    <p className='text-center small_content'>-Cyprus</p>
                </Col>
                <Col sm="11" className='text-center h-100'>
                    <Row><img src={USA}
                            className="image"/></Row>
                    <h3 className='text-center head_project pt-xl-5 pt-md-3 pt-sm-2'>The Habitat</h3>
                    <p className='text-center small_content'>-Dubai</p>
                </Col>
                <Col sm="11" className='text-center h-100'>
                    <Row><img src={UK}
                            className="image"/></Row>
                    <h3 className='text-center head_project pt-xl-5 pt-md-3 pt-sm-2'>Q Poseidion</h3>
                    <p className='text-center small_content'>-Cyprus</p>
                </Col>
                <Col sm="11" className='text-center h-100'>
                    <Row><img src={UAE}
                            className="image"/></Row>
                    <h3 className='text-center head_project pt-xl-5 pt-md-3 pt-sm-2'>IBC Greece</h3>
                    <p className='text-center small_content'>-Cyprus</p>
                </Col>
                <Col sm="11" className='text-center h-100'>
                    <Row><img src={GERMANY}
                            className="image"/></Row>
                    <h3 className='text-center head_project pt-xl-5 pt-md-3 pt-sm-2'>The Uz Hotel</h3>
                    <p className='text-center small_content'>-Uzbekistan</p>
                </Col>
                <Col sm="11" className='text-center h-100'>
                    <Row><img src={USA}
                            className="image"/></Row>
                    <h3 className='text-center head_project pt-xl-5 pt-md-3 pt-sm-2'>The West Centre</h3>
                    <p className='text-center small_content'>-Germany</p>
                </Col>
                <Col sm="11" className='text-center h-100'>
                    <Row><img src={UK}
                            className="image"/></Row>
                    <h3 className='text-center head_project pt-xl-5 pt-md-3 pt-sm-2'>Princess Z Boutique Hotel</h3>
                    <p className='text-center small_content'>-Cyprus</p>
                </Col>
                <Col sm="11" className='text-center h-100'>
                    <Row><img src={UAE}
                            className="image"/></Row>
                    <h3 className='text-center head_project pt-xl-5 pt-md-3 pt-sm-2'>Q Lifestyle</h3>
                    <p className='text-center small_content'>-Cyprus</p>
                </Col>
                <Col sm="11" className='text-center h-100'>
                    <Row><img src={GERMANY}
                            className="image"/></Row>
                    <h3 className='text-center head_project pt-xl-5 pt-md-3 pt-sm-2'>The Q</h3>
                    <p className='text-center small_content'>-Cyprus</p>
                </Col>
                <Col sm="11" className='text-center h-100'>
                    <Row><img src={USA}
                            className="image"/></Row>
                    <h3 className='text-center head_project pt-xl-5 pt-md-3 pt-sm-2'>IBC Carnaca</h3>
                    <p className='text-center small_content'>-Cyprus</p>
                </Col>
                <Col sm="11" className='text-center h-100'>
                    <Row><img src={UK}
                            className="image"/></Row>
                    <h3 className='text-center head_project pt-xl-5 pt-md-3 pt-sm-2'>IBC PLYA</h3>
                    <p className='text-center small_content'>-Cyprus</p>
                </Col>
            </Carousel>
        </Container>
    )
}

export default courousel; */}