const router = require("express").Router();
const checkRequestRoutes = require("./checkRequest");

router.use("/checkRequest", checkRequestRoutes);

module.exports = router;