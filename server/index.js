const express=require('express')
const cors=require('cors')
var mysql = require('mysql');
const app=express()
app.use(express.json())
app.use(cors())
var db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "LoginSystem"
  });
  
  db.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });
  app.post('/register', (req, res)=>{
      const username = req.body.username
      const password = req.body.password
        db.query("INSERT INTO users(username,password) VALUES (?,?)",[username,password],(err,result)=>{
            console.log("err",err);
        });
        res.status(200).send("User Registered successfully")
  })
app.listen(3001,()=>{
    console.log('listening on port 3001')
})