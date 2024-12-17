import fs from 'fs';
import multer from 'multer';
import path from 'path'
import mysql from 'mysql'
//const fetch=require('node-fetch')
import express from 'express'
import cors from 'cors'
const app=express()
app.use(express.static('public'))

app.use(cors())

const connection = mysql.createConnection({ host: 'localhost',
port:3306, user: 'root', password: 'Kumar@123', database: 'school_management' });

var data1;
// connection.connect((err)=>{
//     if(err)
//         console.log(err)
//     else console.log("connected successfully");
// })

const sql="select * from schools";
    connection.query(sql,(err,data)=>{
if(err) {
    console.log(err);
  }
  else
  data1=data;

})

app.get("/schools",(req,res)=>{
    const sql="select * from schools";
    connection  .query(sql,(err,data)=>{
if(err) {
    console.log(err);
  }
  data1=data

return res.json(data)
    })
})



const storage=multer.diskStorage({
        destination:(req,file,cb)=>{
                cb(null,'public/images')},
        filename:(req,file,cb)=>{
cb(null,file.fieldname+JSON.parse(JSON.stringify(data1)).length+""+path.extname(file.originalname))
}})



const upload=multer({
    storage:storage})

       
app.post('/upload',upload.single('image'),(req,res)=>{
    console.log((JSON.parse(req.body.text)).name);
    console.log(req.file);
    const data=JSON.parse(req.body.text);
    let name=data.name;
    let address=data.address;
    let city=data.city;
    let state=data.state;
    let contact=data.contact;
    let email_id=data.email_id;
    let file=req.file;
    try {
      
    var base64String= fs.readFileSync(file.path, 'base64');
    var str=base64String.toString('base64')
    } catch (error) {
     console.log(error);
    }
    
//const val=[name,address,city,state,contact,image,email_id];
 const sql="insert into schools values(?)";
 connection.query(sql,[[JSON.parse(JSON.stringify(data1)).length+1,name, address,city,state, contact,str,email_id]],(err,res)=>{
 if(err) console.log(err);
 else
     console.log("successfuly updated");
 })
 })
 
console.log('successs')


app.listen(5000,console.log("server is runnning"));