var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AnswerModel = new Schema({
    Account: {
        type: Schema.Types.ObjectId,
        ref: 'Account'
    },
    Exercise: {
        type: Schema.Types.ObjectId,
        ref: 'Exercise'
    },
    Course: {
        type: Schema.Types.ObjectId,
        ref: 'Course'
    },
    fullname: {
        type: String
    },
    descriptionAnswer: {
        type: String
    },
    fileUpload: {
        type: String
    },
    isTextPoint: {
        type: String
    },
    studyPoint: {
        type: String
    },
    feedBackFromTeacher: {
        type: String
    },
    feedBackFromTeacherByImage: {
        type: String
    },
    createDate: {
        type: Object,
        default: formatDate(Date.now()),
    },
    updateDate: {
        type: Object,
        default: formatDate(Date.now()),
    }
},{
    collection: "Answer"
});

module.exports = mongoose.model("Answer", AnswerModel)