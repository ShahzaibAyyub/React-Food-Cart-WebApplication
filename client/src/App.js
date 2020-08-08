import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";

import moment from "moment";

import "bootstrap/dist/css/bootstrap.css";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

import FoodItems from "./components/FoodItems";
import Payment from "./components/Payment";
import RenderCarousel from "./components/Carousel";
import ShoppingCart from "./components/ShoppingCart";
//import MultiCarouselPage from "./components/Multi-Carousal";

import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
} from "mdbreact";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foodItems: [],
      billAmount: 0,
    };
  }

  componentDidMount() {
    axios.get("http://localhost:4000/fooditems/").then((res) => {
      this.setState({
        foodItems: res.data,
        billAmount: 0,
      });
    });
  }

  renderHome = (foodItems, billAmount) => {
    return (
      <div>
        <RenderCarousel />

        <div className="App">
          <FoodItems
            foodItems={this.state.foodItems}
            billAmount={this.state.billAmount}
            minusCounter={this.minusCounter}
            addCounter={this.addCounter}
            shoppingCartCounter={
              this.state.foodItems.filter((foodItem) => foodItem.counter > 0)
                .length
            }
            shoppingCartFoodItems={this.state.foodItems.filter(
              (foodItem) => foodItem.counter > 0
            )}
            renderCounter={this.renderCounter}
            renderCloseButtonOnCart={this.renderCloseButtonOnCart}
          />
        </div>
      </div>
    );
  };

  MultiCarouselPage = () => {
    return (
      <MDBContainer>
        <MDBCarousel
          activeItem={1}
          length={2}
          slide={true}
          showControls={true}
          showIndicators={true}
          multiItem
        >
          <MDBCarouselInner>
            <MDBRow>
              <MDBCarouselItem itemId="1">
                <MDBCol md="4">
                  <MDBCard className="mb-4">
                    <MDBCardImage
                      className="img-fluid"
                      src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg"
                    />
                    <MDBCardBody>
                      <MDBCardTitle>MDBCard title</MDBCardTitle>
                      <MDBCardText>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </MDBCardText>
                      <MDBBtn color="primary">MDBBtn</MDBBtn>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                <MDBCol md="4">
                  <MDBCard className="mb-4">
                    <MDBCardImage
                      className="img-fluid"
                      src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg"
                    />
                    <MDBCardBody>
                      <MDBCardTitle>MDBCard title</MDBCardTitle>
                      <MDBCardText>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </MDBCardText>
                      <MDBBtn color="primary">MDBBtn</MDBBtn>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                <MDBCol md="4">
                  <MDBCard className="mb-4">
                    <MDBCardImage
                      className="img-fluid"
                      src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg"
                    />
                    <MDBCardBody>
                      <MDBCardTitle>MDBCard title</MDBCardTitle>
                      <MDBCardText>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </MDBCardText>
                      <MDBBtn color="primary">MDBBtn</MDBBtn>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="2">
                <MDBCol md="4">
                  <MDBCard className="mb-4">
                    <MDBCardImage
                      className="img-fluid"
                      src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(60).jpg"
                    />
                    <MDBCardBody>
                      <MDBCardTitle>MDBCard title</MDBCardTitle>
                      <MDBCardText>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </MDBCardText>
                      <MDBBtn color="primary">MDBBtn</MDBBtn>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                <MDBCol md="4">
                  <MDBCard className="mb-4">
                    <MDBCardImage
                      className="img-fluid"
                      src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(47).jpg"
                    />
                    <MDBCardBody>
                      <MDBCardTitle>MDBCard title</MDBCardTitle>
                      <MDBCardText>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </MDBCardText>
                      <MDBBtn color="primary">MDBBtn</MDBBtn>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                <MDBCol md="4">
                  <MDBCard className="mb-4">
                    <MDBCardImage
                      className="img-fluid"
                      src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(48).jpg"
                    />
                    <MDBCardBody>
                      <MDBCardTitle>MDBCard title</MDBCardTitle>
                      <MDBCardText>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </MDBCardText>
                      <MDBBtn color="primary">MDBBtn</MDBBtn>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="3">
                <MDBCol md="4">
                  <MDBCard className="mb-4">
                    <MDBCardImage
                      className="img-fluid"
                      src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(53).jpg"
                    />
                    <MDBCardBody>
                      <MDBCardTitle>MDBCard title</MDBCardTitle>
                      <MDBCardText>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </MDBCardText>
                      <MDBBtn color="primary">MDBBtn</MDBBtn>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                <MDBCol md="4">
                  <MDBCard className="mb-4">
                    <MDBCardImage
                      className="img-fluid"
                      src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(45).jpg"
                    />
                    <MDBCardBody>
                      <MDBCardTitle>MDBCard title</MDBCardTitle>
                      <MDBCardText>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </MDBCardText>
                      <MDBBtn color="primary">MDBBtn</MDBBtn>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                <MDBCol md="4">
                  <MDBCard className="mb-4">
                    <MDBCardImage
                      className="img-fluid"
                      src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(41).jpg"
                    />
                    <MDBCardBody>
                      <MDBCardTitle>MDBCard title</MDBCardTitle>
                      <MDBCardText>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </MDBCardText>
                      <MDBBtn color="primary">MDBBtn</MDBBtn>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBCarouselItem>
            </MDBRow>
          </MDBCarouselInner>
        </MDBCarousel>
      </MDBContainer>
    );
  };
  renderShoppingCart = (foodItems, billAmount) => {
    const [modalShow, setModalShow] = React.useState(true);

    return (
      <div className="App">
        <ShoppingCart
          show={modalShow}
          onHide={() => setModalShow(false)}
          foodItems={this.state.foodItems}
          billAmount={this.state.billAmount}
          shoppingCartCounter={
            this.state.foodItems.filter((foodItem) => foodItem.counter > 0)
              .length
          }
          shoppingCartFoodItems={this.state.foodItems.filter(
            (foodItem) => foodItem.counter > 0
          )}
        />
      </div>
    );
  };

  renderPayment = () => {
    return (
      <div>
        <div>{this.renderShoppingCart()}</div>
        <Payment
          foodItems={this.state.foodItems}
          billAmount={this.state.billAmount}
          dateToFormat={this.state.dateToFormat}
          shoppingCartCounter={
            this.state.foodItems.filter((foodItem) => foodItem.counter > 0)
              .length
          }
          shoppingCartFoodItems={this.state.foodItems.filter(
            (foodItem) => foodItem.counter > 0
          )}
        />
      </div>
    );
  };

  addCounter = (foodItem, billAmount) => {
    const foodItems = [...this.state.foodItems];
    const key = foodItems.indexOf(foodItem);
    foodItems[key] = { ...foodItem };
    foodItems[key].counter++;
    billAmount += foodItem.price;
    this.setState({ foodItems: foodItems, billAmount: billAmount });
  };

  minusCounter = (foodItem, billAmount) => {
    if (foodItem.counter === 0) return;
    const foodItems = [...this.state.foodItems];
    const key = foodItems.indexOf(foodItem);
    foodItems[key] = { ...foodItem };
    foodItems[key].counter--;
    billAmount -= foodItem.price;
    this.setState({ foodItems: foodItems, billAmount: billAmount });
  };

  renderCounter = (foodItem) => {
    if (foodItem.counter === 0) return;
    return (
      <span className="badge badge-success badge-pill">{foodItem.counter}</span>
    );
  };

  renderCloseButtonOnCart = (foodItem) => {
    if (foodItem.counter === 0) return;
    return (
      <Button
        variant="outline-danger"
        onClick={() => this.minusCounter(foodItem, this.state.billAmount)}
      >
        X
      </Button>
    );
  };

  renderCounterOnCart = (foodItem) => {
    if (foodItem.filter((c) => c.counter > 0).length === 0) return;
    return (
      <span className="badge badge-success badge-pill">
        {foodItem.filter((c) => c.counter > 0).length}
      </span>
    );
  };

  render() {
    return (
      <Router>
        <Navbar bg="dark" variant="dark" fixed="top">
          <Navbar.Brand href="#home">
            <Link
              to={"/"}
              className="nav-link"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <img
                alt="Home Cook Logo"
                src={require("./photos/favicon.ico")}
                width="30"
                height="30"
                className="d-inline-block align-top"
                style={{ borderRadius: "50px" }}
              />
              {"  "}
              Home Cook
            </Link>
          </Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            <Link
              style={{
                color: "white",
                textDecoration: "inherit",
              }}
            >
              Today's ({moment().format("dddd")}) Menu will change{" "}
              {moment().endOf("day").fromNow()}
            </Link>

            <Link
              to={"/Payment"}
              className="nav-link"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              {this.renderCounterOnCart(this.state.foodItems)}

              <img
                alt="Shopping Cart"
                src={require("./photos/Shopping Cart.jpg")}
                width="40"
                height="40"
                className="d-inline-block align-top"
                style={{ borderRadius: "50px" }}
              />
            </Link>
          </Navbar.Collapse>
        </Navbar>

        <Switch>
          <Route exact path="/" component={this.renderHome} />
          <Route path="/Payment" component={this.renderPayment} />
        </Switch>
      </Router>
    );
  }
}

export default App;
