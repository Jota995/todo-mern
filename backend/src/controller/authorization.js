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
      expiresIn: 60*5,
    });
    
    const {username, isAdmin} = userFound
    
    res.json({token, username, isAdmin});
  }

  async signOut(req,res){
    try {
      jwt.destroy
    } catch (error) {
      res.status(404).json({message : 'something wrong'})
    }
  }

  
}

module.exports = new authorization();
