const db = require("../models");

module.exports = {
    post: async (req, res) => {
        try {
            console.log("[checkRequestController]: BODY: ", req.body)
            const dbCheckRequest = await db.CheckRequest.create(req.body);
            res.json({
                message: `Check Request added`
            })
        } catch (e) {
            alert(e)
        }
    }
}