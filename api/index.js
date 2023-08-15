const express = require("express")
const mongoose = require("mongoose")
const app = express()
const authRoute = require('./routes/auth')
const infoRoute = require('./routes/info')
const blogRoute = require('./routes/blog')
var cors = require('cors')

app.use(cors())

const  dbURI = "mongodb://127.0.0.1:27017/app"
app.use(express.json())
app.use('/api/auth', authRoute)
app.use('/api/info', infoRoute)
app.use('/api/blog', blogRoute)

mongoose.connect(dbURI , {useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection

db.on("error", (err)=>{console.error(err)})
db.once("open", () => {console.log("DB started successfully")})

app.listen(2400, () => {console.log("Server started: 2400")})
