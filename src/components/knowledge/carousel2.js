import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import USA from './../../static/USA.png';
import UAE from './../../static/UAE.png';
import UK from './../../static/UK.png';
import GERMANY from './../../static/GERMANY.png';
import Gallary1 from './../../static/Gallary1.png';
import Gallary2 from './../../static/Gallary2.png';
import Gallary3 from './../../static/Gallary3.png';
import "./knowledge.css"
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
  const CustomRightArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType } 
    } = rest;
    // onMove means if dragging or swiping in progress.
    return (
      <Container className=' w-75 carousel_head ok'>
        <Row className='w-75'>
          <Col sm="auto" className="h-100  cl_carousel_topic pb-xl-4 pb-lg-3 pb-md-2 pr-0">GALLARY</Col>
          <Col sm="1" className="h-100"><hr className='h-100 border_carousel'></hr></Col>
        </Row>
          <div className='left_arrow'><img onClick={() => onClick()}  className='pl-xl-5 arrow left pr-3' src={leftArrow} /></div>
        
      </Container>
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
        <Container fluid="sm" className="contain pt-xl-5 mt-xl-5 pt-md-4 pt-sm-3 fz">
            {/* <Row className ='carousel_head'>
                <Col sm="auto" className="h-100 info_content cl_carousel_topic pb-xl-4 pb-lg-3 pb-md-2 pr-0">FOREIGN HEADQUARTERS</Col>
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
                autoPlay={false}
                autoPlaySpeed={3000}
                keyBoardControl={true}
                customTransition="transform 500ms ease-in-out"
                // transitionDuration={2000}
                containerClass="carousel-container"
                // removeArrowOnDeviceType={["tablet", "mobile", "desktop", "superLargeDesktop"]}
                // deviceType={this.props.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                className ="react-multi-carousel-list-gallary pb-xl-5"
                >
                <div className="h-100 w-100 gallary">
                    <img className="gallary1 pr-xl-5 pr-lg-4 pr-md-3 pr-sm-2 h-100 " src={Gallary1}></img>
                    <div>
                        <img className="gallary2 pb-xl-5 pb-lg-4 pb-md-3 pb-sm-3" src={Gallary2}></img>
                        <img className="gallary3" src={Gallary3}></img>
                    </div>
                </div>
                {/* <Col sm="11" className='text-center h-100'>
                    <Row><img src={UK}
                            className="image"/></Row>
                    <h3 className='text-center head_project pt-xl-5 pt-md-3 pt-sm-2'>UK</h3>
                    <p className='text-center small_content'>Lorem ipsum dolor sit<br></br>amet, consectetur </p>
                </Col>
                <Col sm="11" className='text-center h-100'>
                    <Row><img src={UAE}
                            className="image"/></Row>
                    <h3 className='text-center head_project pt-xl-5 pt-md-3 pt-sm-2'>UAE</h3>
                    <p className='text-center small_content'>Lorem ipsum dolor sit<br></br>amet, consectetur </p>
                </Col>
                <Col sm="11" className='text-center h-100'>
                    <Row><img src={GERMANY}
                            className="image"/></Row>
                    <h3 className='text-center head_project pt-xl-5 pt-md-3 pt-sm-2'>GERMANY</h3>
                    <p className='text-center small_content'>Lorem ipsum dolor sit<br></br>amet, consectetur </p>
                </Col> */}
            </Carousel>
        </Container>
    )
}

export default courousel;