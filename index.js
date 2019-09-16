const express = require("express");
require("dotenv").config();
const app = express();
const database = require("./database");
const cors = require("cors");
app.use(
  cors({
    credentials: true
  })
);

const bodyParser = require("body-parser");
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

app.post("/places", require("./controllers/postPlaces"));
app.get("/", require("./controllers/root"));

app.get("/places", require("./controllers/getPlaces"));
app.get("/places/:id", require("./controllers/getPlace"));
app.patch("/places/:id", require("./controllers/patchPlace"));
app.delete("/places/:id", require("./controllers/deletePlace"));

app.post("/types", require("./controllers/postType"));
app.get("/types", require("./controllers/getTypes"));

app.post("/users", require("./controllers/postUser"));

app.post("/amenities", require("./controllers/postAmenity"));
app.get("/amenities", require("./controllers/getAmenity"));

app.post("/reviews", require("./controllers/postReviews"));
app.get("/reviews/:id", require("./controllers/getReview"));

app.post("/signup", require("./controllers/postSignup"));

//Middleware

app.listen(process.env.PORT, () => {
  console.log(`Ready on port ${process.env.PORT}`);
});
