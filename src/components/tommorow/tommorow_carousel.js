import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import USA from './../../static/USA.png';
import UAE from './../../static/UAE.png';
import UK from './../../static/UK.png';
import GERMANY from './../../static/GERMANY.png';
// import Line from './../static/line.png';
// import { Row } from 'react-bootstrap';
import leftArrow from './../../static/leftArrow.png';
import rightArrow from './../../static/rightArrow.png';
import Founder from './../../static/founder.png';
import Founder2 from './../../static/founder2.png';
import Founder3 from './../../static/founder3.png';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 992 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 992, min: 568 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 568, min: 0 },
    items: 1
  }
};
function courousel() {
  const CustomRightArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType } 
    } = rest;
    // onMove means if dragging or swiping in progress.
    return (
      <div>
      <Container className=' w-75 carousel_head ok'>
        <Row className='w-75'>
          <Col sm="auto" className="h-100  cl_carousel_topic pb-xl-4 pb-lg-3 pb-md-2 pr-0">OUR EXPERIENCE</Col>
          <Col sm="1" className="h-100"><hr className='h-100 border_carousel'></hr></Col>
        </Row>
          
        
      </Container>
      <div className='left_arrow'><img onClick={() => onClick()}  className='pl-xl-5 arrow left pr-3' src={leftArrow} /></div>
      </div>
    )
  };
  const CustomLeftArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType } 
    } = rest; 
    // onMove means if dragging or swiping in progress.
    return <div className='ok2'  ><img onClick={() => onClick()} className='arrow' src={rightArrow} /></div>;
  };
    return (
        <Container fluid="sm" className="contain pt-xl-5 mt-xl-5 pt-md-4 fz">
            {/* <Row className ='carousel_head'>
                <Col sm="auto" className="h-100 info_content cl_carousel_topic pb-xl-4 pb-lg-3 pb-md-2 pr-0">OUR EXPERIENCE</Col>
                <Col sm="1" className="h-100"><hr className='h-100 border_carousel'></hr></Col>
                <Col sm="6" className="h-100 mr-5"></Col>
                <Col className="arrowpad"><div className='Arrows'><img className='pl-xl-5 arrow left pr-3' src={leftArrow} /><img className='arrow' src={rightArrow} /></div></Col>
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
                className =""
                >
                <Col sm="11" className='text-center h-100'>
                    <Row><img src={Founder}
                            className="image"/></Row>
                    <h3 className='position_title t-l title pt-sm-2'>Mr. Sheriff</h3>
                    <p className='position_title t-l title_content'>DIRECTOR</p>
                </Col>
                <Col sm="11" className='text-center h-100'>
                    <Row><img src={Founder2}
                            className="image"/></Row>
                    <h3 className='position_title t-l title pt-sm-2'>Mr. Sheriff</h3>
                    <p className='position_title t-l title_content'>CEO</p>
                </Col>
                <Col sm="11" className='text-center h-100'>
                    <Row><img src={Founder3}
                            className="image"/></Row>
                    <h3 className='position_title t-l title pt-sm-2'>Mr. Sheriff</h3>
                    <p className='position_title t-l title_content'>CEO</p>
                </Col>
                <Col sm="11" className='text-center h-100'>
                    <Row><img src={Founder}
                            className="image"/></Row>
                    <h3 className='position_title t-l title pt-sm-2'>Mr. Sheriff</h3>
                    <p className='position_title t-l title_content'>CEO</p>
                </Col>
            </Carousel>
        </Container>
    )
}

export default courousel;