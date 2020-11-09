const mongoose = require ('mongoose')
const bycript = require('bcrypt')

const userSchema = mongoose.Schema({
    username : {type: String, required: true, unique: true},
    email : {type: String, required: true, unique: true},
    password: {type: String, required: true},
    isAdmin: {type: Boolean, default: false},
    todos: {type: Array, default: []}
},{
    timestamps: true
})

userSchema.statics.encryptPassword = async (password) =>{
    const salt = await bycript.genSalt(10)
    return await bycript.hash(password, salt)
}

userSchema.statics.comparePassword = async (password,recivedPassword) =>{
    return await bycript.compare(password,recivedPassword)
}

module.exports = mongoose.model('User', userSchema)