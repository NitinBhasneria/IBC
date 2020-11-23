import Carousel1 from './carousel_buidling_1.js';
import Carousel2 from './carousel2';
import Carousel3 from './carousel3';
import Carousel4 from './carousel4';
import Carousel5 from './carousel5';

function building() {
	return(
		<div className="fz">
			<Carousel1 />
			{/* <Carousel2 /> */}
			<Carousel3 />
			<Carousel4 />
			<Carousel5 />
		</div>
	)
}

export default building;