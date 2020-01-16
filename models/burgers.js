var orm = require("../config/orm");


// burger function
var burger = {
    all: function(cb) {
        orm.all("burgers"), function(res) {
            cb(res);
        }
    },
    create: function(cols, vals, cb) {
        orm.create("burgers", cols, vals, function(res) {
            cb(res);
        });
    },
    update: function(columnInput, val, id, cb) {
        orm.update("burgers", columnInput, val, id, function(res) {
            cb(res);
        });
    },
};

module.exports = burger;
