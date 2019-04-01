var mongoose = require("mongoose");
var userSchema = mongoose.Schema(
    {
        "name" : String,
        "email" : String,
        "password": String
    }
);

mongoose.model("users", userSchema);