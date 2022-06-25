const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DataSetSchema = new Schema({
    title: String,
    image: String,
    label: String
});

const Dataset = mongoose.model('DataSet', DataSetSchema);

module.exports = Dataset;