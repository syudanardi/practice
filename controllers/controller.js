const db = require("../models/db.js");
var users = db.users;

module.exports.fetchMainPage =
    function(req,res){ 
        res.send("kyaaa")
    };