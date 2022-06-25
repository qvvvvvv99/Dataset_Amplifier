const DataSet = require('../models/DataSet.js')

module.exports = async(req, res) =>{
   const datasets = await DataSet.find({})
   console.log(req.session)
   res.render('index', {
      datasets
   });
}