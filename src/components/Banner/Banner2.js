import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import cr from '../../Logo/Certificate 1.jpg';
import dr from '../../Logo/Certificate 2 .jpg';
import fr from '../../Logo/Certificate 3.jpg';

const Banner2 = () => {
    return (
        
					<Container >
                        <br /><br />
                        <h1>For what!! You take our services</h1>
					<div className= "row p-5 panda-bg-info bg-gradient d-flex align-items-center" >

						<div className="col-lg-7">

						<Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={cr}
      alt="First slide"
    />
    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={dr}
      alt="Second slide"
    />

    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={fr}
      alt="Third slide"
    />

    <Carousel.Caption>
     
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

                        </div>

                         <div className="col-lg-5">

    <section className="container p-5" id="BEST REVIEW">
      <div className="text">
        <h1>Tips for Good Dental Health</h1>
      </div>

      <div className="row d-flex p-5">
        <div className="col-lg-6 ">
		<iframe width="300" height="315" src="https://www.youtube.com/embed/7k3wjTOhYwY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


        </div>
        <div className="col-lg-6">
		 </div>
      </div>
    </section>
        </div>
					</div>
					</Container>
        
    );
};

export default Banner2;