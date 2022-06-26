const DataSet = require('../models/DataSet.js')
const path = require('path')

module.exports = async (req,res)=>{
   let image = req.files.chooseImgFile;
   let label = req.files.chooseLabFile;
   let share = req.body.DSname;

   console.log(share);
   if(share == null){ // 공유 안함
      console.log(image);
      console.log(label);
   }else{   // 공유
      console.log(req.body);
   }
   // image.mv(path.resolve(__dirname, '..', 'public/img', image.name),
   //  async(error)=>{
   //    await DataSet.create({
   //       ...req.body,
   //       image: '/img/'+ image.name
   //    })
   // })
   // label.mv(path.resolve(__dirname, '..', 'public/lab', label.name),
   //  async(error)=>{
   //    await DataSet.create({
   //       ...req.body,
   //       label: '/lab/'+ label.name
   //    })
   // })
   res.redirect('/')
}