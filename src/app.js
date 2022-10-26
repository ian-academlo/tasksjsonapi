// importar express
const express = require("express");
const tasksRoutes = require("./routes/tasks.routes");

const app = express();

app.use(express.json());

// Router es un middleware
app.use("/api/v1", tasksRoutes);

module.exports = app;
