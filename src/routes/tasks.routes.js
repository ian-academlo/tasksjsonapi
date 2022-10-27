// express.Router();

// middleware trabajar como intermediario entre las peticiones
// que se realicen con las rutas a las que responde

const express = require("express");
const {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
} = require("../controllers/tasks.controllers");

const router = express.Router();

router.get("/tasks", getAllTasks); // controladores

router.post("/tasks", createTask);

router.put("/tasks/:id", updateTask);

router.delete("/tasks/:id", deleteTask);

module.exports = router;
