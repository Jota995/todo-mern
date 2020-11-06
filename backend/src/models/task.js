const mongoose = require('mongoose')

const taskSchema = mongoose.Schema({
    task: {type: String, required: true},
    userId : {type: mongoose.Types.ObjectId, ref:'User'},
    isComplete : {type: Boolean, default: false}
},{
    timestamps: true
})

module.exports = mongoose.model('Task', taskSchema)