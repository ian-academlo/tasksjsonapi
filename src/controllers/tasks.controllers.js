// gestiona la petición --- le pide al modelo los datos
// y entrega los datos a la vista

// un controlador para solicitar todos las tareas
const TasksServices = require("../services/tasks.services");

const getAllTasks = async (req, res) => {
  try {
    const tasks = await TasksServices.getAll(); // devolver un archivo json
    res.send(tasks); // --> envia directamente la respuesta
  } catch (error) {
    console.log(error);
  }
};

const createTask = async (req, res) => {
  try {
    const newTask = req.body;
    const task = await TasksServices.create(newTask); // no envia las tareas ni la nueva
    res.json(task);
  } catch (error) {
    console.log(error);
  }
};

// controlador para actulizar una tarea
const updateTask = async (req, res) => {
  try {
    const updatedTask = req.body; // { status: true / false }
    // son un objeto --> haces destructuring de un objeto
    console.log(updatedTask);
    const { id } = req.params;
    const result = await TasksServices.update(updatedTask, Number(id));
    res.send(result);
  } catch (error) {
    console.log(error);
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await TasksServices.delete(id);
    res.json(result);
  } catch (error) {
    console.log(error);
  }
};

// exportar las funciones

module.exports = {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
};
