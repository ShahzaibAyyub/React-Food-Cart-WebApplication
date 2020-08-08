let express = require("express");
let cors = require("cors");
let bodyParser = require("body-parser");

// Express Route
const foodItemsRoute = require("./routes/foodItems.route");

const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());
app.use("/foodItems", foodItemsRoute);

// PORT
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log("Express API running for Home Cook React App!");
  console.log("Connected to port " + port + ".");
});

// 404 Error
app.use((req, res, next) => {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
