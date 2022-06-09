var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ClassModel = new Schema({
    nameClass: {
        type: String
    },
    lv: {
        type: Number
    },
    Account: [{
        type: Schema.Types.ObjectId,
        ref: 'Account'
    }],
    Course: [{
        type: Schema.Types.ObjectId,
        ref: 'Course'
    }]
},
{
  collection: "Class",
});

module.exports = mongoose.model("Class", ClassModel)