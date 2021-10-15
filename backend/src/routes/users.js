const { Router } = require('express')
const router = Router()

const { singup, signin, logout } = require("../controllers/users.controller")

/* router.route("/")
.get((req, res) => res.send('Users routes')); */

router.post("/users/signup", singup);

router.post("/users/signin", signin);

router.get("/users/logout", logout);

module.exports = router