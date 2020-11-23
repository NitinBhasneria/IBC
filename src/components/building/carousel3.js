import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import USA from './../../static/USA.png';
import UAE from './../../static/UAE.png';
import UK from './../../static/UK.png';
import projectBuild from './../../static/projectBuild.png'
import GERMANY from './../../static/GERMANY.png';
// import Line from './../static/line.png';
// import { Row } from 'react-bootstrap';
import leftArrow from './../../static/leftArrow.png';
import rightArrow from './../../static/rightArrow.png';

function courousel() {
  var build_style ="project_build_info_4 my-sm-0";
    var hr_style = "w-25 my-xl-2_5 my-lg-2 my-md-1 my-sm-0";
  
    return ( 
      <div>
        <Container fluid="sm" className="contain fz">
            <Row className ='carousel_head'>
                <Col sm="auto" className="h-100 info_content cl_carousel_topic pb-xl-4 pb-lg-3 pb-md-2 pr-0">FOREIGN HEADQUARTERS</Col>
                <Col sm="1" className="h-100"><hr className='h-100 border_carousel'></hr></Col>
                <Col sm="6" className="h-100 mr-5"></Col>
            </Row>
            </Container>
        <Container fluid="sm" className="contain project_forthree">
          <Row className="h-100">
            <Col><img className="w-max-100" src={projectBuild} />
              <p className="project_build_head_4 mb-sm-0 mt-xl-3 mt-lg-2 mt-md-1 mt-sm-0">Golf View Homes</p>
            </Col>
            <Col><img className="w-max-100" src={projectBuild} />
              <p className="project_build_head_4 mb-sm-0 mt-xl-3 mt-lg-2 mt-md-1 mt-sm-0">Wisdom World</p></Col>
          </Row>
        </Container>
        <Container fluid="sm" className="contain project_forthree">
          <Row className="h-100">
            <Col><img className="w-max-100" src={projectBuild} />
              <p className="project_build_head_4 mb-sm-0 mt-xl-3 mt-lg-2 mt-md-1 mt-sm-0">Diamond District - Residential</p>
            </Col>
            <Col><img className="w-max-100" src={projectBuild} />
              <p className="project_build_head_4 mb-sm-0 mt-xl-3 mt-lg-2 mt-md-1 mt-sm-0">Platinum City-Residential</p></Col>
          </Row>
        </Container>
        <Container fluid="sm" className="contain project_forthree">
          <Row className="h-100">
            <Col><img className="w-max-100" src={projectBuild} />
              <p className="project_build_head_4 mb-sm-0 mt-xl-3 mt-lg-2 mt-md-1 mt-sm-0">Platinum City-Commercial</p>
            </Col>
            <Col><img className="w-max-100" src={projectBuild} />
              <p className="project_build_head_4 mb-sm-0 mt-xl-3 mt-lg-2 mt-md-1 mt-sm-0">Manesar - Gurugram</p></Col>
          </Row>
        </Container>
      </div>
    )
}

export default courousel;