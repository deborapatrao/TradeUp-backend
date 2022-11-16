const router = require("express").Router();
const {AlertTasks,} = require("../middleware/priceAlertMiddleware");

module.exports = function (app) {

    router.get("/alert", [AlertTasks], (req, res, next) => {
        res.json({message: "Jobs started!"});
    });

    app.use('/task', router)
}