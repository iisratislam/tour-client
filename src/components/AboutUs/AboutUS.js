import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import img from '../../Logo/about_us.jpg';

const AboutUS = () => {
	return (
		<div>
			<div>
				<img className="w-50  m-5" src={img} alt="" />
			</div>
			<Container>
				<h1>Your Trusted Travel Parnter</h1>

				<ul>
					<li>
					Corporate, Agency, Services ]




People of all ages and races love to travel to various places to relax, unwind, and seek adventures. Even though traveling to foreign places is fun and memorable, planning for it can be difficult sometimes. So this is where travel agencies and travel companies come in. They are responsible to do all the gritty work of planning and organizing trips.


					</li>
				</ul>


			</Container>
			
		</div>
	);
};

export default AboutUS;
