"use strict "


const { connect, connection } = require("mongoose")
const { dburi, dbname } = require("../../config")

connect(dburi, (error) => {
	if (error) {
		console.log(error)
		return
	}
	connection.useDb(dbname)
	console.log("Connected to MongoDB")
})
