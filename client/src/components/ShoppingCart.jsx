import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Payment from "./Payment";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

class ShoppingCart extends Component {
  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        bg="dark"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Shopping Cart
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="col-md-12 order-md-2 mb-12">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-muted">Food Items</span>
              <span className="badge badge-success badge-pill">
                {this.props.shoppingCartCounter}
              </span>
            </h4>
            <ul className="list-group mb-3">
              {this.props.shoppingCartFoodItems.map((foodItem) => (
                <li className="list-group-item d-flex justify-content-between">
                  <div>
                    <span>
                      <img
                        alt="Shopping Cart"
                        src={require("../photos/" + foodItem.name + ".jpg")}
                        width="40"
                        height="40"
                        className="d-inline-block align-top m-2"
                        style={{ borderRadius: "7px", float: "left" }}
                      />
                    </span>
                    <span className="m-2" style={{ float: "left" }}>
                      <h6 className="my-0">
                        {foodItem.name}{" "}
                        <span className="badge badge-success badge-pill">
                          {foodItem.counter}
                        </span>
                      </h6>
                      <small className="text-success">
                        Total Serving: {foodItem.counter * foodItem.serving}{" "}
                        people
                        <br></br>
                        Price Per Serving: Rs. {foodItem.price}
                      </small>
                    </span>
                  </div>
                  <span className="text-muted">
                    Rs. {foodItem.price * foodItem.counter}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-danger" onClick={this.props.onHide}>
            <Link
              to={"/"}
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              Close
            </Link>
          </Button>
          <Button variant="outline-success" onClick={this.props.onHide}>
            <Link
              to={<Payment />}
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              Order Rs. {this.props.billAmount}
            </Link>
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default ShoppingCart;
