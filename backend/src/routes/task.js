const express = require("express");

const taskController = require("../controller/task");
const { verifyToken } = require("../middleware/authorizationJWT");

const router = express.Router();

router.get("/", verifyToken, taskController.getAllTasks);
router.post("/", verifyToken, taskController.createTask);
router.put("/:taskId", verifyToken, taskController.updateTask);
router.put("/:taskId/toggleComplete", verifyToken, taskController.toggleComplete);
router.delete("/:taskId", verifyToken, taskController.deleteTask);

module.exports = router;
