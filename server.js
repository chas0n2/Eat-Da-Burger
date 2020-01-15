//express dependencies
var express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();
var db = require("./models/burgers");

var connection = require("./config/connection");


app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//handlebar setup
varexphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: main }));
app.set("view engine", "handlebars");

// import routes for server access
var routes = require("./controllers/burger_controller.js");

//routes
app.use(routes);

app.listen(PORT, function() {
    console.log("APP is listening on PORT: " + PORT);
});