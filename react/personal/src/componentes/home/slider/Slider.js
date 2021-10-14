import React from 'react';
import Carousel  from 'react-bootstrap/Carousel';

class Slider extends React.Component {

  render() {

  	return (

		<div >
		<Carousel>
			<Carousel.Item>
				<img
				className="d-block w-100"
				src="https://steemitimages.com/640x0/https://cdn.steemitimages.com/DQmPB2bMY9tfHLpDeAoYTdN8gH7rpmzbFfgX3nvZayUG95e/Konstant%20Third%20party%20Banners.png"
				alt="First slide"
				/>
				<Carousel.Caption>
				<h3>Primer slide </h3>
				<p>Breve resumen de la imagen</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
				className="d-block w-100"
				src="https://www.biz4solutions.com/blog/wp-content/uploads/2020/09/banner_3_Sep_20.jpg"
				alt="Second slide"
				/>

				<Carousel.Caption>
				<h3>Second slide label</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
				className="d-block w-100"
				src="https://cdn-media-1.freecodecamp.org/images/1*I9VVnu-qsD51IkCrK5Wa5A.png"
				alt="Third slide"
				/>

				<Carousel.Caption>
				<h3>Third slide label</h3>
				<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	  </div>
		

  	)
    
  }

}

export default Slider;