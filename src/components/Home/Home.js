import React from 'react';
import './Home.css';
import { Card, Col, Container, Row } from 'react-bootstrap';


import filling from '../../Logo/dental-filling.jpg';
import dentures from '../../Logo/dentures.jpg';
import Services from '../Services/Services';
import Banner from '../Banner/Banner';
import Banner2 from '../Banner/Banner2';

const Home = () => {
	return (
		<div className="container">

      {/* Banner................................ */}
      
		<Banner/>
				<br /><br />
				{/* <h1 className="text-success">Premium service</h1> */}

				{/* <Container>
					<Row className="m-5 g-5">
						
						<Col>
							<Card style={{ width: '22rem' }}>
								<Card.Img variant="top" src={filling} />
								<Card.Body>
									<Card.Title>Dental-filling </Card.Title>
									<Card.Text>
										<p>
											</p>
											<h5>Price : $50</h5>
											{/* <button className="btn btn-warning">Check details</button> */}
									{/* </Card.Text>
								</Card.Body>
							</Card>
						</Col>
						<Col>
							<Card style={{ width: '22rem' }}>
								<Card.Img variant="top" src={dentures} />
								<Card.Body>
									<Card.Title>Dentures</Card.Title>
									<Card.Text>
										<p>
										</p>
										<h5>Price : $60</h5>
										<button className="btn btn-warning">Check details</button>
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>
					</Row>
		
					</Container> */} 

					<Container>
						<Services/>
						
						</Container>

				 {/* carousel */}

         <Container>
           {/* <Banner2/> */}
         </Container>
			</div>
		// </div>
	);
};

export default Home;
