const jwt = require("jsonwebtoken");
const userModel = require("../models/user");

const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers["x-access-token"];

    if (!token) return res.status(400).json({ message: "no token provided" });

    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    const user = await userModel.findById({_id : decoded.id}, { password: 0 });

    if (!user) return res.status(400).json({ message: "user not found" });

    req.userId = decoded.id;

    next();

  } catch (error) {
    res.status(400).json({ message: "unauthorized" });
  }
};

module.exports = { verifyToken };
