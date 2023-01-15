var fs = require("fs");
const path = require('path');
const zip = require('express-zip')

module.exports = async (req,res)=>{
   imgpath = path.resolve(__dirname, '..', 'public/dataset/images')
   labpath = path.resolve(__dirname, '..', 'public/dataset/labels')

   res.zip([
      {
         path: path.resolve(imgpath, '001.jpg'),
         name: "image1",
      }
   ])
   

   res.redirect('/')
}