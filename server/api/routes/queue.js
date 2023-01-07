const express = require("express");
const router = express.Router();

const {
    getQueue,
    setQueue
} = require("../controllers/Queue/QueueController");

//

router.get("/", getQueue);
router.post("/", setQueue);

//


module.exports = router;