const express = require('express');
const router = express.Router();
const controllers = require("../controllers/controller");
router.get('/', controllers.fetchMainPage);
module.exports= router; 