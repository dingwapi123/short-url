import { URLRecord } from "./URLRecord.js"

type ErrorResponse = {
  message: string
}

type SuccessResponse = {
  message: string
  data: string | URLRecord
}

export type URLRecordResponse = ErrorResponse | SuccessResponse
