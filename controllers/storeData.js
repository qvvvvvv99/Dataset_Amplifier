const DataSet = require('../models/DataSet.js')
const path = require('path')

module.exports = async (req,res)=>{
   let image = req.files.chooseImgFile;
   let label = req.files.chooseLabFile;
   let DSname = req.body.DSname;

   global.imagePath = path.resolve(__dirname, '..', 'public/dataset/images', image.name);
   global.labelPath = path.resolve(__dirname, '..', 'public/dataset/labels', label.name);

   await DataSet.create({
      title: DSname,
      image: '/img/'+ image.name,
      label: '/lab/'+ label.name
   })

   image.mv(path.resolve(__dirname, '..', 'public/dataset/images', image.name));
   label.mv(path.resolve(__dirname, '..', 'public/dataset/labels', label.name));

   res.redirect('/data/amplify')
}