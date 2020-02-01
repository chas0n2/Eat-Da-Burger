//express dependencies
var express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();


app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//handlebar setup
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// import routes for server access
var routes = require("./controllers/burgers_controller");

//routes
app.use(routes);

app.listen(PORT, function() {
    console.log("APP is listening on PORT: " + PORT);
});