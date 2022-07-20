const router = require("express").Router()

// Login Routes

// creating a variable out of every property out of this object that we are bring from req.body and sending a response.
router
    .route("/login")
    .post(async (req, res) => {
        const { username, password } = req.body
        console.log(username, password)
        res.send("login route hit")
    })

// Register Routes
router
    .route("/register")
    .post(async (req, res) => {
        const { name, email, username, password } = req.body
        console.log(name, email, username, password)
        res.send("register route hit")
    })

    // TODO: put route and delete route for user modification

module.exports = router