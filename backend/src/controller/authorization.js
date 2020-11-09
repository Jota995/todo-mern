const jwt = require("jsonwebtoken");
const userModel = require('../models/user')

class authorization {
  async signIn(req, res) {
    const { email, password } = req.body;

    const userFound = await userModel.findOne({email})

    if(!userFound) return res.status(400).json({token : '', message : 'user not found'})

    const matchPassword = await userModel.comparePassword(password, userFound.password)
    
    if(!matchPassword) return res.status(401).json({token : '', message : 'Invalid Password'})

    const token = jwt.sign({ id : userFound._id }, process.env.SECRET_KEY, {
      expiresIn: 86400,
    });

    res.json({token});
  }
}

module.exports = new authorization();
