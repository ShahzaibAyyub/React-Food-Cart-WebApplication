import React, { Component } from "react";

import Carousel from "react-bootstrap/Carousel";

class RenderCarousal extends Component {
  render() {
    return (
      <Carousel interval="3000">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("../photos/Carousal1.jpg")}
            alt="First slide"
          />
          <Carousel.Caption>
            <h1 style={{ color: "white" }}>Welcome to Home Cook!</h1>
            <p>
              Order delicious homemade food from local chefs in Islamabad.
              Scroll down to see todays menu.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("../photos/Carousal2.jpg")}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h1>Delivery at your Doorstep!</h1>
            <p>Enjoy exceptional taste with delivery time around 5 hours.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default RenderCarousal;
