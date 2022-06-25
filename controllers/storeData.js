const DataSet = require('../models/DataSet.js')
const path = require('path')

module.exports = async (req,res)=>{
   // let image = req.files.image;
   // image.mv(path.resolve(__dirname, '..', 'public/img', image.name),
   //  async(error)=>{
   //    await DataSet.create({
   //       ...req.body,
   //       image: '/images/'+ image.name
   //    })
   //    res.redirect('/')
   // })
   res.redirect('/')
}