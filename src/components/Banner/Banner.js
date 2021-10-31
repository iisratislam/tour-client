import React from 'react';
import img from '../../Logo/cover 1.jpg';
import img2 from '../../Logo/2.jpg';
import img3 from '../../Logo/cover2.jpg';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <div>
            	<Carousel className="caro">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Traveling fosters a medium to build human connections with one another by learning about culture</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Traveling is very important for human happiness and mental health</h3>
      
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>A travel experience easily makes you happier by getting you away from your daily grind. And, if you can get away from your parents, kids</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
		
            
        </div>
    );
};

export default Banner;