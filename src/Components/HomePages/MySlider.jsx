import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
const MySlider = () => {
    return (
        <div>
            <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100 im"
                src="https://c1.wallpaperflare.com/preview/427/745/192/notebook-natural-laptop-macbook.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 im"
                src="https://c1.wallpaperflare.com/preview/830/150/561/sackcloth-sackcloth-textured-laptop-ipad.jpg"
                alt="Second slide"
              />
      
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 im"
                src="https://c1.wallpaperflare.com/preview/232/268/52/office-work-business-workspace.jpg"
                alt="Third slide"
              />
      
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
    );
}

export default MySlider;
