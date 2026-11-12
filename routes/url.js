const express = require("express"); // 1 e
const {handlegenearateshortid} = require("../controllers/url"); // 4e
const router = express.Router(); // 2 e
const URL = require("../models/url");

router.get("/", async (req, res) => {
    const allurls = await URL.find({ createdby: req.user._id });
    return res.render("home", {
        urls: allurls,
    });
});



router.post("/", handlegenearateshortid); // 4e

module.exports = router; // 3 e
