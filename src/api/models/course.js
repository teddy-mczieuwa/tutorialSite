const mongoose = require('mongoose')
const Schema = mongoose.Schema

const courseSchema = new Schema({
    title: {type: String},
    desc: {type: String},
    wistiaId: {type: String},
    price: {type: Number},

    ownedByTeacher: {type: Schema.Types.ObjectId, ref:'User'},
    ownedByStudents: [{
        user: {type: Schema.Types.ObjectId, ref: 'User'}
    }],

    totalStudents: {type: Number}
})

module.exports = mongoose.model('Course', courseSchema)