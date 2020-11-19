import { Container, Row, Col} from 'react-bootstrap';
import "./future.css"
import projectBuild from './../../static/projectBuild.png'

function Future() {
    var build_style ="project_build_info my-xl-2_5 my-lg-2 my-md-1 my-sm-1";
    var hr_style = "w-25 my-xl-2_5 my-lg-2 my-md-1 my-sm-0";
    return(
        <div>
            <Container fluid="sm" className="contain future_head fz">
                <Container fluid="sm" className="contain h-75 pr-0 pl-0">
                    <Row>
                        <Col sm="auto" className="h-100  cl_carousel_topic pb-xl-4 pb-lg-3 pb-md-2 pr-0">TRAJECTORY</Col>
                        <Col sm="1" className="h-100"><hr className='h-100 border_carousel'></hr></Col>
                    </Row>
                    <Row>
                        <Col>
                            <p className="info_content">The planned 10-year trajectory for the group reiterates our focus on commercial real estate making IBC India’s largest single ownership debt free real estate company. The group’s strategic position in the market allows us to consistently beat the performance of the Indian Reality Sector with the added flexibility to do projects others deem unreliable.</p>
                        </Col>
                    </Row>
                    <Row className="mt-lg-4 mb-lg-4 mt-md-3 mb-md-3 mt-sm-2 mb-sm-2">
                        <Col className="year">2020</Col>
                    </Row>
                    <Row className="counts_golden">
                        <Col sm='2'><p className='number_golden mb-0'>15</p><p className="text_count">million sq ft.</p></Col>
                        <Col sm='auto' className="border_golden px-lg-5 px-md-4 px-sm-3"><p className='number_golden mb-0'>$18 Billion</p><p className="text_count">in assets</p></Col>
                        <Col sm='auto' className="pl-4"><p className='number_golden mb-0'>100,000+</p><p className="text_count">member community</p></Col>
                    </Row>
                </Container>
            </Container>
            <Container fluid="sm" className="contain future_mid mt-xl-5 mt-lg-4 mt-md-3 mt-sm-2 fz">
                <Container fluid="sm" className="contain h-75 pr-0 pl-0">
                    <Row>
                        <Col sm="auto" className="h-100  cl_carousel_topic pb-xl-4 pb-lg-3 pb-md-2 pr-0">PROJECTS</Col>
                        <Col sm="1" className="h-100"><hr className='h-100 border_carousel'></hr></Col>
                    </Row>
                    <Row>
                        <Col>
                            <p className="info_content">IBC currently has 11 million sq ft under various stages of construction each of which sets benchmark for Grade A commercial space. The group consistently pushes the market beyond its boundaries to new standers of quality, facilities and technology.</p>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Container fluid="sm" className="contain project fz mb-5">
                <Container fluid="sm" className="contain h-75">
                    <Row className="h-100">
                        <Col sm="6">
                            <p className="project_build_head mb-sm-0">KNOWLEDGE PARK</p>
                            <p className={build_style}>7,50,000 sq ft</p>
                            <hr className={hr_style}></hr>
                            <p className={build_style}>Platim CEED</p>
                            <hr className={hr_style}></hr>
                            <p className={build_style}>CBD</p>
                            <hr className={hr_style}></hr>
                            <p className={build_style}>Metro at its door</p>
                            <hr className={hr_style}></hr>
                        </Col>
                        <Col sm="6" className="h-100 w-100"><img className="h-100 w-max-100" src={projectBuild}></img></Col>
                    </Row>
                </Container>
            </Container>
            <Container fluid="sm" className="contain project fz mb-5">
                <Container fluid="sm" className="contain h-75">
                    <Row className="h-100">
                        <Col sm="6" className="h-100 w-100"><img className="h-100 w-max-100" src={projectBuild}></img></Col>
                        <Col sm="6">
                            <p className="project_build_head mb-sm-0">WISDOM WORLD</p>
                            <p className={build_style}>20 acre</p>
                            <hr className={hr_style}></hr>
                            <p className={build_style}>5.5 million sq feet</p>
                            <hr className={hr_style}></hr>
                            <p className={build_style}>ORR</p>
                            <hr className={hr_style}></hr>
                            <p className={build_style}>Metro at its door</p>
                            <hr className={hr_style}></hr>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Container fluid="sm" className="contain project fz mb-5">
                <Container fluid="sm" className="contain h-75">
                    <Row className="h-100">
                        <Col sm="6">
                            <p className="project_build_head mb-sm-0">PLATINUM CITY</p>
                            <p className={build_style}>16 acre</p>
                            <hr className={hr_style}></hr>
                            <p className={build_style}>4.4 million sq feet</p>
                            <hr className={hr_style}></hr>
                            <p className={build_style}>Yashvantpur</p>
                            <hr className={hr_style}></hr>
                            <p className={build_style}>Metro at its door</p>
                            <hr className={hr_style}></hr>
                        </Col>
                        <Col sm="6" className="h-100 w-100"><img className="h-100 w-max-100" src={projectBuild}></img></Col>
                    </Row>
                </Container>
            </Container>
            <Container fluid="sm" className="contain project fz mb-5">
                <Container fluid="sm" className="contain h-75">
                    <Row className="h-100">
                        <Col sm="6" className="h-100 w-100"><img className="h-100 w-max-100" src={projectBuild}></img></Col>
                        <Col sm="6">
                            <p className="project_build_head mb-sm-0">THE CAPITOL</p>
                            <p className={build_style}>10 acre</p>
                            <hr className={hr_style}></hr>
                            <p className={build_style}>2.4 million sq feet</p>
                            <hr className={hr_style}></hr>
                            <p className={build_style}>Manesar</p>
                            <hr className={hr_style}></hr>
                            <p className={build_style}>Metro at its door</p>
                            <hr className={hr_style}></hr>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Container fluid="sm" className="contain project fz mb-5">
                <Container fluid="sm" className="contain h-75">
                    <Row className="h-100">
                        <Col sm="6">
                            <p className="project_build_head mb-sm-0">GRADED</p>
                            <p className={build_style}>DEVANAHALLI</p>
                            <hr className={hr_style}></hr>
                        </Col>
                        <Col sm="6" className="h-100 w-100"><img className="h-100 w-max-100" src={projectBuild}></img></Col>
                    </Row>
                </Container>
            </Container>
        </div>
    )
}

export default Future;