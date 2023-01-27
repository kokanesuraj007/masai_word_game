const express = require("express")
const cors = require("cors")
const {connection} = require("./config/db")
require("dotenv").config()

const app = express();
const PORT=process.env.PORT || 8000
app.use(cors())

app.use(express.json())


app.get("/", (req, res) => {
    res.send("Hello")
})


const { pointRouter } = require("./routes/point.route");
app.use("/",pointRouter)


app.listen(PORT, async () => {
    try{
        await connection
        console.log("Connection to DB successfully")
    }
    catch(err){
        console.log(err)
        console.log("Error connecting to DB")
    }
    console.log(`Listening on PORT ${PORT}`)
})

