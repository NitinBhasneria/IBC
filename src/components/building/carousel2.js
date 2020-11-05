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

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 992 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 992, min: 568 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 568, min: 0 },
    items: 1
  }
};
function courousel() {
  var build_style ="project_build_info my-xl-2_5 my-lg-2 my-md-1 my-sm-1";
    var hr_style = "w-25 my-xl-2_5 my-lg-2 my-md-1 my-sm-0";
  const CustomRightArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType } 
    } = rest;
    // onMove means if dragging or swiping in progress.
    return (
      <Container className=' w-75 carousel_head ok'>
        <Row className='w-75'>
          <Col sm="auto" className="h-100  cl_carousel_topic pb-xl-4 pb-lg-3 pb-md-2 pr-0">DIAMOND DISTRICT</Col>
          <Col sm="1" className="h-100"><hr className='h-100 border_carousel'></hr></Col>
        </Row>
          <div className='left_arrow_forone'><img onClick={() => onClick()}  className='pl-xl-5 arrow left pr-3' src={leftArrow} /></div>
        
      </Container>
    )
  };
  const CustomLeftArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType } 
    } = rest;
    // onMove means if dragging or swiping in progress.
    return <div className='ok2_forone '  ><img onClick={() => onClick()} className='arrow' src={rightArrow} /></div>;
  };
    return ( 
        <Container fluid="sm" className="contain pt-xl-5 mt-xl-5 pt-md-4 fz">
            {/* <Row className ='carousel_head'>
                <Col sm="auto" className="h-100 info_content cl_carousel_topic pb-xl-4 pb-lg-3 pb-md-2 pr-0">FOREIGN HEADQUARTERS</Col>
                <Col sm="1" className="h-100"><hr className='h-100 border_carousel'></hr></Col>
                <Col sm="6" className="h-100 mr-5"></Col>
                <Col className="arrowpad" ><div className='Arrows'><img className='pl-xl-5 arrow left pr-3' src={leftArrow} /><img className='arrow' src={rightArrow} /></div></Col>
            </Row> */}
            <Carousel customLeftArrow={<CustomRightArrow />} customRightArrow={<CustomLeftArrow />}
                swipeable={false}
                draggable={false}
                showDots={false}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                keyBoardControl={true}
                customTransition="transform 500ms ease-in-out"
                // transitionDuration={2000}
                containerClass="carousel-container"
                // removeArrowOnDeviceType={["tablet", "mobile", "desktop", "superLargeDesktop"]}
                // deviceType={this.props.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                className =" pb-xl-5 react_multi_carousel_list_forone"
                >
                <Container fluid="sm" className="contain project_forone fz mb-5">
                  <Container fluid="sm" className="contain h-75">
                      <Row className="h-100">
                        <Col sm="6" className="h-100 w-100"><img className="h-100 w-max-100" src={projectBuild}></img></Col>
                          <Col sm="6" className="px-xl-5 px-lg-4 px-md-3 px-sm-2 flex-coloumn-vc">
                              <p className="project_build_head mb-sm-0">LOREM IPSUM</p>
                              <p className={build_style}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                              <div className="explore_button">EXPLORE</div>
                          </Col>
                      </Row>
                  </Container>
              </Container>
            </Carousel>
        </Container>
    )
}

export default courousel;