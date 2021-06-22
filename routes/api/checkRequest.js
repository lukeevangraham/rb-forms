const router = require("express").Router()
const checkRequestController = require("../../controllers/checkRequest")

router.post("/", checkRequestController.post)

module.exports = router;