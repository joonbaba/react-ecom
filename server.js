// import express, { static } from "express"
// import cors from "cors"
// import { json, urlencoded } from "body-parser"
// import { join } from "path"

// if (process.env.NODE_ENV !== "production") require("dotenv").config()

// const app = express()
// const port = process.env.PORT || 5000

// app.use(json())
// app.use(urlencoded({ extended: true }))

// app.use(cors())

// if (process.env.NODE_ENV == "production") {
//   app.use(static(join(__dirname, "client/buld")))

//   app.get("*", function(req, res) {
//     res.sendFile(join(__dirname, "client/build", "index.html"))
//   })
// }

// app.listen(port, error => {
//   if (error) throw error
//   console.log("Server running on port " + port)
// })
