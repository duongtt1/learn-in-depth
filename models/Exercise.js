var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ExerciseModel = new Schema({
    Course: {
        type: Schema.Types.ObjectId,
        ref: 'Course'
    },
    nameCourse: {
        type: String
    },
    titleExercise: {
        type: String
    },
    isTextPoint: {
        type: Number
    },
    descriptionExercise: {
        type: String
    },
    allowSubmission: {
        type: Date
    },
    submissionDeadline: {
        type: Date
    },
    fileUpload: {
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
    collection: "Exercise"
});

module.exports = mongoose.model("Exercise", AnswerModel)
