const taskModel = require("../models/task");
const userModel = require("../models/user");
const mongoose = require('mongoose')

class Task {
  async getAllTasks(req, res) {
    const { userId } = req.params.userId;
    const tasks = await taskModel.find({ userId });
    res.json(tasks);
  }

  async createTask(req, res) {
    try {
      const { task, userId } = req.body;

      if (!task) res.status(404).json("no task provided");

      const newTask = new taskModel({ task });
      await newTask.save();
      await userModel.findByIdAndUpdate(
        { _id: userId },
        { $push: { todos: newTask._id } }
      );

      res.status(200).json(newTask);
    } catch (error) {
      console.error(error);
    }
  }

  async updateTask(req, res) {
    try {
      await taskModel.findByIdAndUpdate({ _id: req.params.id }, req.body);
      res.json({ message: "task updated successfully" });
    } catch (error) {
      console.error(error);
    }
  }

  async toggleComplete(req, res) {
    try {
      await taskModel.findByIdAndUpdate(req.params.id, {
        isComplete: !req.body,
      });
      res.status(200).json({ message: "toggle task updated successfully" });
    } catch (error) {
      console.error(error);
    }
  }

  async deleteTask(req, res) {
    try {
      //await taskModel.findByIdAndDelete(req.params.id)
      console.log(req.params.userId);
      console.log(req.params.id);
      await userModel.updateOne(
        { _id: req.params.userId },
        { $pull: { todos: mongoose.Types.ObjectId(req.params.id) } },
        (err, val) => {
          if(err){
            console.error(err)
          }
          console.log(val);
        }
      );
      res.status(200).json({ message: "task delete successfully" });
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new Task();
