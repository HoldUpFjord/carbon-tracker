const express = require("express");
const router = express.Router();


//Main Routes - simplified for now
router.get("/", homeController.getIndex);

module.exports = router;
