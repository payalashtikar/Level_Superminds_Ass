const mysql = require('mysql')
const express = require('express')
const mysqlDB = require('../db/connectdb')

const bcrypt = require('bcrypt');
// const Rounds = 12; // Number of salt rounds for hashing
const router = express.Router()
// const jwt = require('jsonwebtoken');
// const secretKey = process.env.jwtSecret


router.post('/register',(req,res)=>{
    const sql = "INSERT INTO user_table (username , email, password) VALUES (?)";
    const values = [
        req.body.username,
        req.body.email,
        req.body.password,
    ]
    mysqlDB.query(sql, [values], (err,data)=>{
        if(err){
            return res.json({error:"Error"})
        }
        return res.json(data)

    })
})


router.post('/login',(req,res)=>{
    const sql = "SELECT * FROM user_table WHERE email=? AND passward=?";
    const values = [
        req.body.email,
        req.body.password,
    ]
    mysqlDB.query(sql, [values], (err,data)=>{
        if(err){
            return res.json({error:"Error"})
        }
        if(data.length>0){
            return res.json("success:",data)

        }
        else{
            return res.json("failed:")

        }
    })
})

module.exports =router;