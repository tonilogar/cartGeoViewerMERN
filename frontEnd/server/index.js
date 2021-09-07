import express from "express"

import indexRoute from "./routes/index.routes"

const app = express()

app.set('port', /* process.env.PORT || */ 4000)

app.use(indexRoute)

app.listen(app.get("port"))

console.log("Server on port 4000")