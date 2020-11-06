import { Container, Row, Col} from 'react-bootstrap';
import "./foundation.css";
import Sherrif from './../../static/sheriff.png';

function Foundation() {
	return (
		<div className="fz foundation pt-2">
			<Container fluid="sm" className="contain pt-xl-5 pt-lg-4 pt-md-3 pt-sm-2">
				<Row>
					<Col className="flex_center">
						<img src={Sherrif} />
					</Col>
				</Row>
			</Container>
			<Container>
				<Row className="pt-xl-4 pt-lg-3 pt-md-2 pt-sm-1 mb-0">
					<Col><p className="comming_soon">COMING SOON !!</p></Col>
				</Row>
				<Row><Col><p className="comming_soon_para">Our team is currently working hard on building this page</p></Col>
				</Row>
			</Container>
		</div>
	)
}

export default Foundation;