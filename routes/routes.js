const express = require('express');
const router = express.Router();
const controllers = require("../controllers/controller");
router.get('/', controllers.fetchMainPage);
router.get('/users', controllers.fetchUsers);
router.get('/users/:id', controllers.fetchUser);
module.exports= router; 