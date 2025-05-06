const express = require("express")
const aiRoutes = require('./routes/ai.routes')
const cors =  require('cors')
const app = express()

app.get("/", (req, res)=>{
    res.send("Hello World, Chando")
})



app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

app.use('/ai', aiRoutes);
app.use('/api/auth', require('../src/routes/auth.js'))


module.exports = app