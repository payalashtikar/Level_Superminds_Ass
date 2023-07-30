const mysql = require('mysql')
const dotenv = require('dotenv')
dotenv.config()
const connectdb = mysql.createConnection({
    host : process.env.HOST ,
    user :  process.env.USER,
    password :  process.env.PASSWORD,
    database :  process.env.DATABASE
})
connectdb.connect(function (err) {
    if (err) {
        console.log("Error ::" ,err)
    }
    console.log("Database Connected")
})
module.exports = connectdb;
