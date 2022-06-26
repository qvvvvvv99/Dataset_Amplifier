module.exports = (req,res,next) =>{
   const {imgfileName, labfileName} = req.body;
   // console.log(req.body)
   if(imgfileName == null || labfileName == null || (imgfileName.replace(".jpg", "") != labfileName.replace(".txt", ""))){
      return res.render('alert', {error:'파일 선택이 잘못되었습니다!!'});
   }
   next()
}