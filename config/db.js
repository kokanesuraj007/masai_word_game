const mongoose = require("mongoose")

require("dotenv").config()

const connection = mongoose.connect(process.env.URL)
strictQuery= false
module.exports={connection}