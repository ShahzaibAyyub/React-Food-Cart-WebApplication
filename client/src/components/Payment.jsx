import React, { Component } from "react";

import moment from "moment";

class Payment extends Component {
  render() {
    return (
      <main class="page">
        <section class="payment-form dark">
          <div class="container">
            <div class="block-heading">
              <br></br>
              <br></br>

              <h2>Payment Details</h2>
              <hr></hr>
              <p>
                Your Order will be delivered around:{" "}
                <b>{moment().add(5, "hours").format("LT")}</b>
              </p>
              <p>(5 hours Delivery Time)</p>
              <hr></hr>
              <p>
                Kindly confirm your selected food items and fill out the
                following payment form to place your order!
              </p>
            </div>

            <form>
              <div class="products">
                <h3 class="title">Payment</h3>
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

                <div class="total">
                  Grand Total
                  <span class="price">Rs. {this.props.billAmount}</span>
                </div>
              </div>

              <div class="card-details">
                <h3 class="title">Personal Details</h3>
                <div class="row">
                  <div class="form-group col-sm-6">
                    <label for="firstname">First Name</label>
                    <input
                      id="firstname"
                      type="text"
                      class="form-control"
                      placeholder="First Name"
                      aria-label="Card Holder"
                      aria-describedby="basic-addon1"
                      required
                      text
                    ></input>
                  </div>
                  <div class="form-group col-sm-6">
                    <label for="lastname">Last Name</label>
                    <input
                      id="lastname"
                      type="text"
                      class="form-control"
                      placeholder="Last Name"
                      aria-label="Card Holder"
                      aria-describedby="basic-addon1"
                      required
                      text
                    ></input>
                  </div>
                  <div class="form-group col-sm-12">
                    <label for="email">Email</label>
                    <input
                      id="email"
                      type="email"
                      class="form-control"
                      placeholder="Email"
                      aria-label="Card Holder"
                      aria-describedby="basic-addon1"
                      required
                      email
                    ></input>
                  </div>
                  <div class="form-group col-sm-12">
                    <label for="number">Phone Number</label>
                    <input
                      id="number"
                      type="number"
                      class="form-control"
                      placeholder="Phone Number"
                      aria-label="Card Holder"
                      aria-describedby="basic-addon1"
                      required
                      number
                    ></input>
                  </div>
                  <div class="form-group col-sm-12">
                    <label for="Address">Address</label>
                    <input
                      id="Address"
                      type="Address"
                      class="form-control"
                      placeholder="Home Address"
                      aria-label="Card Holder"
                      aria-describedby="basic-addon1"
                      required
                    ></input>
                  </div>
                  <div class="form-group col-sm-6">
                    <label for="Province">Province</label>
                    <input
                      id="Province"
                      type="Province"
                      class="form-control"
                      placeholder="Province"
                      aria-label="Card Holder"
                      aria-describedby="basic-addon1"
                      required
                    ></input>
                  </div>
                  <div class="form-group col-sm-6">
                    <label for="City">City</label>
                    <input
                      id="City"
                      type="City"
                      class="form-control"
                      placeholder="City"
                      aria-label="Card Holder"
                      aria-describedby="basic-addon1"
                      required
                    ></input>
                  </div>
                  <div class="form-group col-sm-8">
                    <label for="Country">Country</label>
                    <input
                      id="Country"
                      type="Country"
                      class="form-control"
                      placeholder="Country"
                      aria-label="Card Holder"
                      aria-describedby="basic-addon1"
                      required
                    ></input>
                  </div>
                  <div class="form-group col-sm-4">
                    <label for="ZIP">ZIP</label>
                    <input
                      id="ZIP"
                      type="ZIP"
                      class="form-control"
                      placeholder="ZIP"
                      aria-label="Card Holder"
                      aria-describedby="basic-addon1"
                      required
                      number
                    ></input>
                  </div>
                </div>
              </div>

              <div class="card-details">
                <h3 class="title">Credit Card Details</h3>
                <div class="row">
                  <div class="form-group col-sm-7">
                    <label for="card-holder">Card Holder Name</label>
                    <input
                      id="card-holder"
                      type="text"
                      class="form-control"
                      placeholder="Card Holder Name"
                      aria-label="Card Holder"
                      aria-describedby="basic-addon1"
                      text
                      required
                    ></input>
                  </div>
                  <div class="form-group col-sm-5">
                    <label for="">Expiration Date</label>
                    <div class="input-group expiration-date">
                      <input
                        type="number"
                        class="form-control"
                        placeholder="MM"
                        aria-label="MM"
                        aria-describedby="basic-addon1"
                        number
                        required
                      ></input>
                      <span class="date-separator">/</span>
                      <input
                        type="number"
                        class="form-control"
                        placeholder="YY"
                        aria-label="YY"
                        aria-describedby="basic-addon1"
                        number
                        required
                      ></input>
                    </div>
                  </div>
                  <div class="form-group col-sm-8">
                    <label for="card-number">Card Number</label>
                    <input
                      id="card-number"
                      type="number"
                      class="form-control"
                      placeholder="Card Number"
                      aria-label="Card Holder"
                      aria-describedby="basic-addon1"
                      number
                      required
                    ></input>
                  </div>
                  <div class="form-group col-sm-4">
                    <label for="cvc">CVC</label>
                    <input
                      id="cvc"
                      type="number"
                      class="form-control"
                      placeholder="CVC"
                      aria-label="Card Holder"
                      aria-describedby="basic-addon1"
                      number
                      required
                    ></input>
                  </div>

                  <div class="form-group col-sm-12">
                    <button
                      type="submit"
                      class="btn btn-outline-success btn-block"
                    >
                      Proceed to Place an order of Rs. {this.props.billAmount}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </section>
        <footer>
          <p>Home Cook © 2020 All Rights Reserved</p>
          <p>Shahzaib Ayyub | 17I-0251</p>
        </footer>
      </main>
    );
  }
}

export default Payment;
