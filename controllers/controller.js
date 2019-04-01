const db = require("../models/db.js");
var users = db.users;

module.exports.fetchMainPage =
    function(req,res){ 
        res.send("kyaaa")
    };

module.exports.fetchUsers =
    function(req,res){
        res.send(users)
    };

module.exports.fetchUser =
    function(req,res){
        const user = users[req.params.id];
        res.send(user);
    }