const taskModel = require("../models/task");
const userModel = require("../models/user");
const mongoose = require("mongoose");

class Task {
  async getAllTasks(req, res) {
    const tasks = await taskModel.find({ userId: req.userId });
    res.json(tasks);
  }

  async createTask(req, res) {
    try {
      const { task } = req.body;

      if (!task) res.status(404).json("no task provided");

      const newTask = new taskModel({ task, userId: req.userId });
      await newTask.save();
      await userModel.findByIdAndUpdate(
        { _id: req.userId },
        { $push: { todos: newTask._id } }
      );

      res.status(201).json(newTask);
    } catch (error) {
      console.error(error);
    }
  }

  async updateTask(req, res) {
    try {
      await taskModel.findByIdAndUpdate({ _id: req.params.taskId }, req.body);
      res.json({ message: "task updated successfully" });
    } catch (error) {
      console.error(error);
    }
  }

  async deleteTask(req, res) {
    try {
      await taskModel.findByIdAndDelete({ _id: req.params.taskId });
      await userModel.updateOne(
        { _id: req.userId },
        { $pull: { todos: mongoose.Types.ObjectId(req.userId) } }
      );
      res.status(200).json({ message: "task delete successfully" });
    } catch (error) {
      console.log(error);
    }
  }

  async toggleComplete(req, res) {
    try {
      const response = await taskModel.findOneAndUpdate(req.params.taskId, {
        isComplete: !req.body.isComplete,
      });
      console.log(response)
      res.status(200).json({ message: "toggle task updated successfully" });
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = new Task();
