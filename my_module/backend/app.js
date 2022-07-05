const express = require("express")
const app = express()
const cors = require("cors")

const { port } = require("./config")

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true}))

require("./app/utils/mongooseConnect.utils")
// localhost:5000/info/
app.use("/info",require("./app/routes/studentinfo.route"))
app.use("/fees",require("./app/routes/studentfees.route"))
app.use("/history",require("./app/routes/studenthistory.route"));


app.listen(`${port}`, () => console.log(`Server is running on http://127.0.0.1:${port}`))

// ? Aryan Meena
// © 2022 GitHub, Inc.
// Terms
// Privacy
// Security
// Status
// Docs
// Contact 
// Sneh jaiswal