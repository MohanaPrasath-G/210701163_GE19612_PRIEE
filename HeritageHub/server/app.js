const express=require('express')
const cors=require('cors')
const mongoose = require('mongoose')

const port=90;

const app = express()
app.use(cors())

app.use('/uploads', express.static('uploads'));
app.use('/galleryPics', express.static('galleryPics'));

const user=require('./routes/user')
const post=require('./routes/post')
const gallery=require('./routes/gallery')

app.use(express.json())
app.use(user)
app.use(post)
app.use(gallery)

app.get('/',(req,res)=>{
    res.send("Welcome Captain...")
})
// app.get('/login',(req,res)=>{
//     res.send("Login to our website...")
// })

mongoose.connect("mongodb://localhost:27017/HeritageHub")
.then(()=>{
    console.log("Connected to DB...")
    app.listen(port,()=>console.log("listening to port",port))
})