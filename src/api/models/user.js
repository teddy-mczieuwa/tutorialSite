const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {type:String},
    email: {type:String, unique:true, lowercase:true},
    picture: {type: String},
    password: {type:String},
    courseTeaching: [{
        course: {type: Schema.Types.ObjectId, ref: 'Course'}
    }],
    courseLearning: [{
        course: {type: Schema.Types.ObjectId, ref: 'Course'}
    }]
})

module.exports = mongoose.model('User', userSchema)