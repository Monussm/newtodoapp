const express=require("express");
const app=express();
const path=require("path");
const hbs=require("hbs")
const port=process.env.process || 3000;
const mypublic=path.join(__dirname,"../public");
const partials=path.join(__dirname,"../partials");
app.use(express.urlencoded({extended:false}));
app.use(express.static(mypublic))
app.set("view engine","hbs")
hbs.registerPartials(partials);
// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://monug1513:monu1234@cluster10.7s4raqs.mongodb.net/');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
const userSchema = new mongoose.Schema({
    firstname: String,
    lastname:String,
    emailid:String,
    mobilenumber:String,
    password:String,
    confirmpassword:String
    
  });
  const User = mongoose.model('User',userSchema);
app.get("/",async(req,res)=>{

res.render("index")


})

app.get("/signup",async(req,res)=>{
res.render("signup")
  
})
app.post("/signup",async(req,res)=>{
const user=new User({

firstname:req.body.firstname,
lastname:req.body.lastname,
emailid:req.body.emailid,
mobilenumber:req.body.mobilenumber,
password:req.body.password,



})
console.log(user)
res.render("signup")



})

app.listen(port,(req,res)=>{

console.log("App Running on port 3000")

})