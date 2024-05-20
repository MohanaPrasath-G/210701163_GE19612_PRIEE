const express=require('express')
const multer = require('multer')
const route=express.Router()
const Gallery=require('../models/gallery')
const authenticateToken = require('../middleware/auth');


const Storage = multer.diskStorage({
    destination:"galleryPics",
    filename:(req, file, cb)=>{
        cb(null, file.originalname)
    },
})

const gallery_upload = multer({
    storage:Storage
}).single('galleryImage')

route.post('/gallery_upload',authenticateToken,(req,res)=>{
    // console.log("hello from upload endpoint")
    gallery_upload(req,res,(err)=>{
        if(err){
            console.log(err)
        }
        else{
            const newGalleryImage=new Gallery({
                title:req.body.title,
                image:req.file.filename,
                postBy:req.user.name
            })
            newGalleryImage.save().then(()=>{return res.status(200).send("Image successfully uploaded...")})
        }
    })
})

route.get('/gallery',authenticateToken, async (req, res) => {
    try {
      const galleryImages = await Gallery.find();
      const galleryDetails = galleryImages.map(img => ({
        id:img._id,
        title: img.title,
        imageUrl: `${req.protocol}://${req.get('host')}/galleryPics/${img.image}`
      }));
      res.json(galleryDetails);
    } catch (err) {
      res.status(500).send("Error retrieving posts.");
    }
  });

module.exports=route