const express=require("express")
// const logger=require("./middleware/logger")
// instance d'express
const app=express()


// middleware
app.use(express.json())



 app.get("/" ,(req,res)=>{
    
    res.sendFile(__dirname +"/public/homepage.html")
     // C:\Users\maison info\Desktop\ws-expresss\public\index
 })

 app.get("/ouservice",(req,res)=>{
   res.sendFile(__dirname +"/public/ourservice.html")
})
app.get("/contact",(req,res)=>{
   res.sendFile(__dirname +"/public/contact.html")
})





// port
const port=5000
app.listen(port,err=>{
    err?console.log(err) : console.log(`server is running on port ${port}`) 
})