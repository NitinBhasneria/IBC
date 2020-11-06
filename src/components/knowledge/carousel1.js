import Carousel from "react-multi-carousel";
import { Col, Container, Row } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import "./knowledge.css";
import Park_image from "./../../static/Park.jpg"

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};
function Carousel1() {
    return(
        <Carousel className="react-multi-carousel-list_one carousel_one fz"
            arrows={false}
            swipeable={false}
            draggable={false}
            showDots={true}
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
            >
            <div className="h-100 w-100"><img className="w-100vw" src={Park_image} />
                <p className="knowledge_park_title">KNOWLEDGE PARK</p>
            </div>
        </Carousel>
    )
}

export default Carousel1;