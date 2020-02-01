
var express = require("express");
var burger = require("../models/burgers");
var router = express.Router();


//router

router.get("/", function(req, res) {
    burger.all(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });


});


router.post("/burgers", function(req, res) {
    res.json({
        id: result.insertId
    });
});

router.put("/burgers/:id", function(req, res) {
    console.log('req.body: ', req.body)
    burger.update("devoured", [req.body.devour], [req,params.id], function(result) {
        if(result.changedRows === 0) {
            return res.status(404).end();
        }
        return res.sendStatus(200)
    })

})

module.exports = router;