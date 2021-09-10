import { Router } from "express"
const router = Router()

router.get("/", (req, res) => {
  return res.send({
    msg: "Welcome to api v0.1"
  })
})

export default router