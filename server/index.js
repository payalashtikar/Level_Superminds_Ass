const express = require('express')
const app = express();
const mysqlDB = require('./db/connectdb')
const cors = require('cors')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
dotenv.config()
port = process.env.PORT

app.use(cors())
app.use(bodyParser.json())

app.use(require('./routes/user'))
app.use(require('./routes/blog'))


// app.get("/" , (req,res)=>{
//     res.send("Hello World")
// })

app.listen(port  , (error)=>{
    if(error){console.log("Error ::",error)}
    else{console.log(`Server running on port ${port}`)}
})

