const path = require('path')
const sharp = require('sharp')
const fs = require('fs')

module.exports = async (req,res)=>{
   sharp(imagePath).rotate(180).toFile(imagePath.replace('.jpg', '_rot180.jpg'));  // 90도 회전
   sharp(imagePath).flip().toFile(imagePath.replace('.jpg', '_revUD.jpg'));  // 상하 뒤집기
   sharp(imagePath).flop().toFile(imagePath.replace('.jpg', '_revLR.jpg'));  // 좌우 뒤집기
   sharp(imagePath).greyscale().toFile(imagePath.replace('.jpg', '_greyscale.jpg')); // 흑백

   var data = fs.readFileSync(labelPath, 'utf-8');
   console.log(data);
   fs.writeFileSync(labelPath.replace('.txt', '_greyscale.txt'), data, err => {
      if (err) {
         console.error(err)
         return
      }
   });
   // 180도 회전
   var result = ''
   var words = data.split(' ');
   result += words[0]+" "+(1-words[1])+" "+(1-words[2])+" "+words[3]+" "+words[4];
   fs.writeFileSync(labelPath.replace('.txt', '_rot180.txt'), result, err => {
      if (err) {
         console.error(err)
         return
      }
   })
   fs.writeFileSync(labelPath.replace('.txt', '_greyscale_rot180.txt'), result, err => {
      if (err) {
         console.error(err)
         return
      }
   })
   // 상하 반전
   result = '';
   words = data.split(' ');
   result += words[0]+" "+words[1]+" "+(1-words[2])+" "+words[3]+" "+words[4];
   fs.writeFileSync(labelPath.replace('.txt', '_revUD.txt'), result, err => {
      if (err) {
         console.error(err)
         return
      }
   })
   fs.writeFileSync(labelPath.replace('.txt', '_greyscale_revUD.txt'), result, err => {
      if (err) {
         console.error(err)
         return
      }
   })
   // 좌우 반전
   result = '';
   words = data.split(' ');
   result += words[0]+" "+(1-words[1])+" "+words[2]+" "+words[3]+" "+words[4];
   fs.writeFileSync(labelPath.replace('.txt', '_revLR.txt'), result, err => {
      if (err) {
         console.error(err)
         return
      }
   })
   fs.writeFileSync(labelPath.replace('.txt', '_greyscale_revLR.txt'), result, err => {
      if (err) {
         console.error(err)
         return
      }
   })

   res.redirect('/')
}