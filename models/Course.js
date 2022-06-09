var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var CourseModel = new Schema({
    nameCourse: {
        type: String
    },
    fullNameTeacher: {
        type: String
    },
    idTeacher: {
        type: Number
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
    collection: "Course"
});

module.exports = mongoose.model("Course",CourseModel)