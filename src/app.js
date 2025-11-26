import express from "express"

import cors from "cors"

import urlRecordRouter from "./routes/urlRecordRoute.js"
import urlRedirectRouter from "./routes/urlRedirectRoute.js"

const app = express()

app.use(express.json())
app.use(cors())

app.use("/v1", urlRecordRouter)
app.use("/v1", urlRedirectRouter)

export default app
