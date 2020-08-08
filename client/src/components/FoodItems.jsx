import React, { Component } from "react";
import moment from "moment";

import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
import Button from "react-bootstrap/Button";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

class FoodItems extends Component {
  render() {
    return (
      <div className="container col-md-10">
        <div className="py-4 text-center">
          <h2 style={{ color: "white" }}>
            Today's Menu ({moment().format("dddd")})
          </h2>
          <h3>-- Menu Changes {moment().endOf("day").fromNow()} --</h3>
          <p style={{ color: "white" }}>
            Fill up your cart with our tasty treats!
          </p>
        </div>
        <CardColumns>
          {this.props.foodItems.map((foodItem) => (
            <Card border="dark" bg="dark" text="white" width="10px">
              <Card.Img
                variant="top"
                src={require("../photos/" + foodItem.name + ".jpg")}
              />
              <Card.Body>
                <h3>
                  {foodItem.name} {this.props.renderCounter(foodItem)}
                </h3>

                <Card.Text>{foodItem.description} </Card.Text>
                <h5>Price: {foodItem.price}</h5>
                <h6>{foodItem.serving} persons can eat each serving</h6>
                <Button
                  className="m-2"
                  variant="outline-success"
                  onClick={() =>
                    this.props.addCounter(foodItem, this.props.billAmount)
                  }
                >
                  Place Order: Rs. {foodItem.price}
                </Button>
                {this.props.renderCloseButtonOnCart(foodItem)}
              </Card.Body>
              <Card.Footer>
                <small>Delivery time: 5 Hours</small>
                <br></br>
                <small className="text-muted">
                  Menu Changes {moment().endOf("day").fromNow()}
                </small>
              </Card.Footer>
            </Card>
          ))}
        </CardColumns>
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={this.props.deviceType !== "mobile" ? true : false}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={1000}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          deviceType={this.props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          <div>
            <img src={require("../photos/Chicken Enchiladas.jpg")}></img>
          </div>
          <div>
            <img
              src={require("../photos/Pakistani Stuffed Chicken Patties.jpg")}
            ></img>
          </div>
          <div>
            <img
              src={require("../photos/Chicken and Cheese Quesadillas.jpg")}
            ></img>
          </div>
          <div>
            <img src={require("../photos/Pizza Fries.jpg")}></img>
          </div>
        </Carousel>
      </div>
    );
  }
}

export default FoodItems;
