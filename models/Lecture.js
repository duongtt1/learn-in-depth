var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LectureModel = new Schema({
    nameLecture: {
        type: String
    },
    descriptionLecture: {
        type: String
    },
    Course: {
        type: Schema.Types.ObjectId,
        ref: 'Course'
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
    collection: "Lecture"
});

module.exports = mongoose.model("Lecture", LectureModel)
