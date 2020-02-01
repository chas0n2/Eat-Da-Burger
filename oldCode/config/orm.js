var connection = require("./connection.js");

var orm = {
    all: function(tableInput) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableInput], function(err, result) {
            if (err) {
                throw err;
            }
            return result
        });
    },
    create: function(tableInput, columnInput, val) {
        var queryString = "INSERT INTO ?? (??) VALUES (?)";

        console.log("queryString: ", queryString)
        
        connection.query(queryString, [tableInput, columnInput, val], function(err, result) {
            if (err) {
                throw err;
            }
            return result
        });
    },
    update: function(tableInput, columnInput, val, id) {
        console.log('val: ', val)
        id = parseInt(id)
        val = parseInt(val)
        var queryString = "UPDATE ?? SET ?? = ? WHERE ID = ?";

        connection.query(queryString, [tableInput, columnInput, val, id], function (err, result) {
            if (err) {
                console.log('this.sql: ', this.sql)
                throw err;
            }
            return result
        });
    }
};

module.exports = orm