import { Router } from "express"
import { createUrlRecord } from "../controllers/urlRecordController.js"

const urlRecordRouter = new Router()

urlRecordRouter.route("/urlRecord").post(createUrlRecord)

export default urlRecordRouter
