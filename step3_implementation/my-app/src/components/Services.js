import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Services = () => {

	return (
		<div>
			<Container>
				<br/>
				<Row className="justify-content-center">
				
				<Col xs={10}>
				<Row>
					<Col xs={1} className="bannerBBG">
					</Col>
					<Col xs={10} className="bannerBG">
					<h4 className="bannerTitle">Services</h4>
					</Col>
					<Col xs={1} className="bannerBBG">
					</Col>
				</Row>
				</Col>
				
				</Row>

			</Container>
		</div>
	);
}

export default Services;