//let mongoose = require('mongoose'),
let express = require("express");
let router = express.Router();
var moment = require("moment");

let Monday = [
  {
    _id: 3,
    name: "Fish in Hot Szechuan sauce",
    description: "This is a restaurant grade fried fish in Hot Szechuan sauce.",
    price: 1600,
    serving: 6,
    counter: 0,
  },
  {
    _id: 4,
    name: "Baked stuffed chicken breast",
    description:
      "Stuffed chicken breast is an awesome main dish that can be served with spinach, coleslaw and your favorite sauce.",
    price: 870,
    serving: 4,
    counter: 0,
  },
  {
    _id: 5,
    name: "Kabuli Afghani Pulao",
    description:
      "Afghani Pulao as its name suggest an Afghan dish but very famous in Pakistan and all over the world.",
    price: 450,
    serving: 8,
    counter: 0,
  },
  {
    _id: 6,
    name: "Pizza Fries",
    description:
      "These pizza fries are like loaded fries that are loaded with chicken cheese and vegetables.",
    price: 560,
    serving: 6,
    counter: 0,
  },
  {
    _id: 7,
    name: "Chicken and Mushroom Quiche",
    description:
      "If you have’t tried quiche before and like creamy cheesy things you must try this chicken and mushroom quiche.",
    price: 450,
    serving: 4,
    counter: 0,
  },
  {
    _id: 8,
    name: "Chicken Enchiladas",
    description:
      "This juicy chicken dish is a must have if you want to serve something new.",
    price: 880,
    serving: 6,
    counter: 0,
  },
  {
    _id: 9,
    name: "Irani Chelo Kabab with Grilled Vegetables",
    description:
      "If you like Arabic Kebabs you will love these Irani Chelow Kabab.",
    price: 1100,
    serving: 4,
    counter: 0,
  },
  {
    _id: 10,
    name: "Chicken and Cheese Quesadillas",
    description:
      "Chicken Quesadillas is a one of a very famous Mexican dish commonly made in Mexican household.",
    price: 710,
    serving: 6,
    counter: 0,
  },
  {
    _id: 11,
    name: "Pakistani Stuffed Chicken Patties",
    description:
      "You will love these stuffed chicken patties as an appetizer or any party.",
    price: 400,
    serving: 5,
    counter: 0,
  },
  {
    _id: 12,
    name: "Plain Vanilla Sponge Cake",
    description:
      "This is a plain easy to make vanilla sponge cake that which is very fluffy and light. Best enjoyed with tea or with icing.",
    price: 800,
    serving: 10,
    counter: 0,
  },
  {
    _id: 13,
    name: "Garlic Tawa Naan",
    description:
      "No Tandoor no problem? No oven no problem? These no-bake Tawa garlic Naan will do the trick.",
    price: 70,
    serving: 2,
    counter: 0,
  },
];

let Tuesday = [
  {
    _id: 4,
    name: "Baked stuffed chicken breast",
    description:
      "Stuffed chicken breast is an awesome main dish that can be served with spinach, coleslaw and your favorite sauce.",
    price: 870,
    serving: 4,
    counter: 0,
  },
  {
    _id: 5,
    name: "Kabuli Afghani Pulao",
    description:
      "Afghani Pulao as its name suggest an Afghan dish but very famous in Pakistan and all over the world.",
    price: 450,
    serving: 8,
    counter: 0,
  },
  {
    _id: 6,
    name: "Pizza Fries",
    description:
      "These pizza fries are like loaded fries that are loaded with chicken cheese and vegetables.",
    price: 560,
    serving: 6,
    counter: 0,
  },
  {
    _id: 7,
    name: "Chicken and Mushroom Quiche",
    description:
      "If you have’t tried quiche before and like creamy cheesy things you must try this chicken and mushroom quiche.",
    price: 450,
    serving: 4,
    counter: 0,
  },
  {
    _id: 8,
    name: "Chicken Enchiladas",
    description:
      "This juicy chicken dish is a must have if you want to serve something new.",
    price: 880,
    serving: 6,
    counter: 0,
  },
  {
    _id: 9,
    name: "Irani Chelo Kabab with Grilled Vegetables",
    description:
      "If you like Arabic Kebabs you will love these Irani Chelow Kabab.",
    price: 1100,
    serving: 4,
    counter: 0,
  },
  {
    _id: 10,
    name: "Chicken and Cheese Quesadillas",
    description:
      "Chicken Quesadillas is a one of a very famous Mexican dish commonly made in Mexican household.",
    price: 710,
    serving: 6,
    counter: 0,
  },
  {
    _id: 11,
    name: "Pakistani Stuffed Chicken Patties",
    description:
      "You will love these stuffed chicken patties as an appetizer or any party.",
    price: 400,
    serving: 5,
    counter: 0,
  },
  {
    _id: 12,
    name: "Plain Vanilla Sponge Cake",
    description:
      "This is a plain easy to make vanilla sponge cake that which is very fluffy and light. Best enjoyed with tea or with icing.",
    price: 800,
    serving: 10,
    counter: 0,
  },
  {
    _id: 13,
    name: "Garlic Tawa Naan",
    description:
      "No Tandoor no problem? No oven no problem? These no-bake Tawa garlic Naan will do the trick.",
    price: 70,
    serving: 2,
    counter: 0,
  },
];

let Wednesday = [
  {
    _id: 1,
    name: "Chicken Steak with Mushroom Sauce",
    description:
      "This chicken steak with mushroom sauce is scrumptious and full of flavor. A must Try!",
    price: 755,
    serving: 3,
    counter: 0,
  },
  {
    _id: 2,
    name: "Banoffee Pie",
    description:
      "You can’t stop eating this scrumptious dessert. Everyone who takes a bite of it fell in love with it and asks for the recipe.",
    price: 2200,
    serving: 12,
    counter: 0,
  },
  {
    _id: 3,
    name: "Fish in Hot Szechuan sauce",
    description: "This is a restaurant grade fried fish in Hot Szechuan sauce.",
    price: 1600,
    serving: 6,
    counter: 0,
  },
  {
    _id: 4,
    name: "Baked stuffed chicken breast",
    description:
      "Stuffed chicken breast is an awesome main dish that can be served with spinach, coleslaw and your favorite sauce.",
    price: 870,
    serving: 4,
    counter: 0,
  },
  {
    _id: 5,
    name: "Kabuli Afghani Pulao",
    description:
      "Afghani Pulao as its name suggest an Afghan dish but very famous in Pakistan and all over the world.",
    price: 450,
    serving: 8,
    counter: 0,
  },
  {
    _id: 6,
    name: "Pizza Fries",
    description:
      "These pizza fries are like loaded fries that are loaded with chicken cheese and vegetables.",
    price: 560,
    serving: 6,
    counter: 0,
  },
  {
    _id: 7,
    name: "Chicken and Mushroom Quiche",
    description:
      "If you have’t tried quiche before and like creamy cheesy things you must try this chicken and mushroom quiche.",
    price: 450,
    serving: 4,
    counter: 0,
  },
  {
    _id: 8,
    name: "Chicken Enchiladas",
    description:
      "This juicy chicken dish is a must have if you want to serve something new.",
    price: 880,
    serving: 6,
    counter: 0,
  },
  {
    _id: 9,
    name: "Irani Chelo Kabab with Grilled Vegetables",
    description:
      "If you like Arabic Kebabs you will love these Irani Chelow Kabab.",
    price: 1100,
    serving: 4,
    counter: 0,
  },
  {
    _id: 10,
    name: "Chicken and Cheese Quesadillas",
    description:
      "Chicken Quesadillas is a one of a very famous Mexican dish commonly made in Mexican household.",
    price: 710,
    serving: 6,
    counter: 0,
  },
  {
    _id: 11,
    name: "Pakistani Stuffed Chicken Patties",
    description:
      "You will love these stuffed chicken patties as an appetizer or any party.",
    price: 400,
    serving: 5,
    counter: 0,
  },
  {
    _id: 12,
    name: "Plain Vanilla Sponge Cake",
    description:
      "This is a plain easy to make vanilla sponge cake that which is very fluffy and light. Best enjoyed with tea or with icing.",
    price: 800,
    serving: 10,
    counter: 0,
  },
  {
    _id: 13,
    name: "Garlic Tawa Naan",
    description:
      "No Tandoor no problem? No oven no problem? These no-bake Tawa garlic Naan will do the trick.",
    price: 70,
    serving: 2,
    counter: 0,
  },
];

let Thursday = [
  {
    _id: 2,
    name: "Banoffee Pie",
    description:
      "You can’t stop eating this scrumptious dessert. Everyone who takes a bite of it fell in love with it and asks for the recipe.",
    price: 2200,
    serving: 12,
    counter: 0,
  },
  {
    _id: 3,
    name: "Fish in Hot Szechuan sauce",
    description: "This is a restaurant grade fried fish in Hot Szechuan sauce.",
    price: 1600,
    serving: 6,
    counter: 0,
  },
  {
    _id: 4,
    name: "Baked stuffed chicken breast",
    description:
      "Stuffed chicken breast is an awesome main dish that can be served with spinach, coleslaw and your favorite sauce.",
    price: 870,
    serving: 4,
    counter: 0,
  },
  {
    _id: 5,
    name: "Kabuli Afghani Pulao",
    description:
      "Afghani Pulao as its name suggest an Afghan dish but very famous in Pakistan and all over the world.",
    price: 450,
    serving: 8,
    counter: 0,
  },
  {
    _id: 6,
    name: "Pizza Fries",
    description:
      "These pizza fries are like loaded fries that are loaded with chicken cheese and vegetables.",
    price: 560,
    serving: 6,
    counter: 0,
  },

  {
    _id: 9,
    name: "Irani Chelo Kabab with Grilled Vegetables",
    description:
      "If you like Arabic Kebabs you will love these Irani Chelow Kabab.",
    price: 1100,
    serving: 4,
    counter: 0,
  },
  {
    _id: 10,
    name: "Chicken and Cheese Quesadillas",
    description:
      "Chicken Quesadillas is a one of a very famous Mexican dish commonly made in Mexican household.",
    price: 710,
    serving: 6,
    counter: 0,
  },
  {
    _id: 11,
    name: "Pakistani Stuffed Chicken Patties",
    description:
      "You will love these stuffed chicken patties as an appetizer or any party.",
    price: 400,
    serving: 5,
    counter: 0,
  },
  {
    _id: 12,
    name: "Plain Vanilla Sponge Cake",
    description:
      "This is a plain easy to make vanilla sponge cake that which is very fluffy and light. Best enjoyed with tea or with icing.",
    price: 800,
    serving: 10,
    counter: 0,
  },
  {
    _id: 13,
    name: "Garlic Tawa Naan",
    description:
      "No Tandoor no problem? No oven no problem? These no-bake Tawa garlic Naan will do the trick.",
    price: 70,
    serving: 2,
    counter: 0,
  },
];

let Friday = [
  {
    _id: 5,
    name: "Kabuli Afghani Pulao",
    description:
      "Afghani Pulao as its name suggest an Afghan dish but very famous in Pakistan and all over the world.",
    price: 450,
    serving: 8,
    counter: 0,
  },
  {
    _id: 3,
    name: "Fish in Hot Szechuan sauce",
    description: "This is a restaurant grade fried fish in Hot Szechuan sauce.",
    price: 1600,
    serving: 6,
    counter: 0,
  },
  {
    _id: 4,
    name: "Baked stuffed chicken breast",
    description:
      "Stuffed chicken breast is an awesome main dish that can be served with spinach, coleslaw and your favorite sauce.",
    price: 870,
    serving: 4,
    counter: 0,
  },

  {
    _id: 6,
    name: "Pizza Fries",
    description:
      "These pizza fries are like loaded fries that are loaded with chicken cheese and vegetables.",
    price: 560,
    serving: 6,
    counter: 0,
  },
  {
    _id: 7,
    name: "Chicken and Mushroom Quiche",
    description:
      "If you have’t tried quiche before and like creamy cheesy things you must try this chicken and mushroom quiche.",
    price: 450,
    serving: 4,
    counter: 0,
  },
  {
    _id: 8,
    name: "Chicken Enchiladas",
    description:
      "This juicy chicken dish is a must have if you want to serve something new.",
    price: 880,
    serving: 6,
    counter: 0,
  },
  {
    _id: 9,
    name: "Irani Chelo Kabab with Grilled Vegetables",
    description:
      "If you like Arabic Kebabs you will love these Irani Chelow Kabab.",
    price: 1100,
    serving: 4,
    counter: 0,
  },
  {
    _id: 10,
    name: "Chicken and Cheese Quesadillas",
    description:
      "Chicken Quesadillas is a one of a very famous Mexican dish commonly made in Mexican household.",
    price: 710,
    serving: 6,
    counter: 0,
  },
  {
    _id: 11,
    name: "Pakistani Stuffed Chicken Patties",
    description:
      "You will love these stuffed chicken patties as an appetizer or any party.",
    price: 400,
    serving: 5,
    counter: 0,
  },
  {
    _id: 12,
    name: "Plain Vanilla Sponge Cake",
    description:
      "This is a plain easy to make vanilla sponge cake that which is very fluffy and light. Best enjoyed with tea or with icing.",
    price: 800,
    serving: 10,
    counter: 0,
  },
];

let Saturday = [
  {
    _id: 6,
    name: "Pizza Fries",
    description:
      "These pizza fries are like loaded fries that are loaded with chicken cheese and vegetables.",
    price: 560,
    serving: 6,
    counter: 0,
  },
  {
    _id: 7,
    name: "Chicken and Mushroom Quiche",
    description:
      "If you have’t tried quiche before and like creamy cheesy things you must try this chicken and mushroom quiche.",
    price: 450,
    serving: 4,
    counter: 0,
  },
  {
    _id: 8,
    name: "Chicken Enchiladas",
    description:
      "This juicy chicken dish is a must have if you want to serve something new.",
    price: 880,
    serving: 6,
    counter: 0,
  },
  {
    _id: 9,
    name: "Irani Chelo Kabab with Grilled Vegetables",
    description:
      "If you like Arabic Kebabs you will love these Irani Chelow Kabab.",
    price: 1100,
    serving: 4,
    counter: 0,
  },
  {
    _id: 10,
    name: "Chicken and Cheese Quesadillas",
    description:
      "Chicken Quesadillas is a one of a very famous Mexican dish commonly made in Mexican household.",
    price: 710,
    serving: 6,
    counter: 0,
  },
  {
    _id: 11,
    name: "Pakistani Stuffed Chicken Patties",
    description:
      "You will love these stuffed chicken patties as an appetizer or any party.",
    price: 400,
    serving: 5,
    counter: 0,
  },
  {
    _id: 12,
    name: "Plain Vanilla Sponge Cake",
    description:
      "This is a plain easy to make vanilla sponge cake that which is very fluffy and light. Best enjoyed with tea or with icing.",
    price: 800,
    serving: 10,
    counter: 0,
  },
  {
    _id: 13,
    name: "Garlic Tawa Naan",
    description:
      "No Tandoor no problem? No oven no problem? These no-bake Tawa garlic Naan will do the trick.",
    price: 70,
    serving: 2,
    counter: 0,
  },
];

let Sunday = [
  {
    _id: 10,
    name: "Chicken and Cheese Quesadillas",
    description:
      "Chicken Quesadillas is a one of a very famous Mexican dish commonly made in Mexican household.",
    price: 710,
    serving: 6,
    counter: 0,
  },
  {
    _id: 11,
    name: "Pakistani Stuffed Chicken Patties",
    description:
      "You will love these stuffed chicken patties as an appetizer or any party.",
    price: 400,
    serving: 5,
    counter: 0,
  },
  {
    _id: 12,
    name: "Plain Vanilla Sponge Cake",
    description:
      "This is a plain easy to make vanilla sponge cake that which is very fluffy and light. Best enjoyed with tea or with icing.",
    price: 800,
    serving: 10,
    counter: 0,
  },
  {
    _id: 3,
    name: "Fish in Hot Szechuan sauce",
    description: "This is a restaurant grade fried fish in Hot Szechuan sauce.",
    price: 1600,
    serving: 6,
    counter: 0,
  },
  {
    _id: 4,
    name: "Baked stuffed chicken breast",
    description:
      "Stuffed chicken breast is an awesome main dish that can be served with spinach, coleslaw and your favorite sauce.",
    price: 870,
    serving: 4,
    counter: 0,
  },
  {
    _id: 5,
    name: "Kabuli Afghani Pulao",
    description:
      "Afghani Pulao as its name suggest an Afghan dish but very famous in Pakistan and all over the world.",
    price: 450,
    serving: 8,
    counter: 0,
  },
  {
    _id: 6,
    name: "Pizza Fries",
    description:
      "These pizza fries are like loaded fries that are loaded with chicken cheese and vegetables.",
    price: 560,
    serving: 6,
    counter: 0,
  },

  {
    _id: 9,
    name: "Irani Chelo Kabab with Grilled Vegetables",
    description:
      "If you like Arabic Kebabs you will love these Irani Chelow Kabab.",
    price: 1100,
    serving: 4,
    counter: 0,
  },

  {
    _id: 13,
    name: "Garlic Tawa Naan",
    description:
      "No Tandoor no problem? No oven no problem? These no-bake Tawa garlic Naan will do the trick.",
    price: 70,
    serving: 2,
    counter: 0,
  },
];

router.route("/").get((req, res) => {
  if (moment().format("dddd") == "Monday") res.json(Monday);
  if (moment().format("dddd") == "Tuesday") res.json(Tuesday);
  if (moment().format("dddd") == "Wednesday") res.json(Wednesday);
  if (moment().format("dddd") == "Thursday") res.json(Thursday);
  if (moment().format("dddd") == "Friday") res.json(Friday);
  if (moment().format("dddd") == "Saturday") res.json(Saturday);
  if (moment().format("dddd") == "Sunday") res.json(Sunday);
});

module.exports = router;
