const userModel = require("../models/user");

class User {
  async getAllUsers(req, res) {
    try {
      const users = await userModel.find();
      res.json(users);
    } catch (error) {
      console.error(error);
    }
  }

  async getUser(req, res) {
    try {
      const user = await userModel.findOne(req.params.id);
      res.json(user);
    } catch (error) {
      console.error(error);
    }
  }

  async createUser(req, res) {
    try {
      const { username, email, password } = req.body;
      const newUser = new userModel({ username, email, password });
      newUser.save();
      res.json({message : 'user created successfully', data: newUser});
    } catch (error) {
      console.error;
    }
  }

  async updateUser(req, res) {
    try {
      await userModel.findByIdAndUpdate({ _id: req.params.id }, req.body);
      res.json({ message: "user updated successfully" });
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = new User();
