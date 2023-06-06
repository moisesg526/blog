const express = require("express")
const router = express()

router.get("/", (req, res) => {
    res.render("articles/new")
})

router.post("/", (req, res) => {
    
})

module.exports = router;