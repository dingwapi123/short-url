import URLRecord from "../models/urlRecordModel.js"

export async function getOriginURL(req, res) {
  const { urlCode } = req.params

  if (!urlCode) {
    return res.status(400).json({
      message: "urlCode is required",
    })
  }
  const urlRecord = await URLRecord.findOne({
    where: {
      urlCode,
    },
  })

  if (!urlRecord) {
    return res.status(404).json({
      message: "urlCode not found",
    })
  }

  // Increment visit count
  await urlRecord.increment("visitCount")

  return res.status(200).json({
    message: "success",
    data: urlRecord.originalUrl,
  })
}
