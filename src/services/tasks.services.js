const path = require("path");
const fs = require("fs/promises");

const jsonPath = path.resolve("./src/data.json");

const getLastId = (dataArray) => {
  const lastElementIndex = dataArray.length - 1;
  return dataArray[lastElementIndex].id + 1;
};

class TasksServices {
  static async getAll() {
    // vamos la logica para recuperar el archivo y devolverlo
    // leer el data.json
    try {
      const jsonFile = await fs.readFile(jsonPath, "utf8");
      return jsonFile;
    } catch (error) {
      throw error;
    }
  }

  static async create(newTask) {
    try {
      const tasksArray = JSON.parse(await fs.readFile(jsonPath, "utf8"));
      tasksArray.push({ ...newTask, id: getLastId(tasksArray) });
      await fs.writeFile(jsonPath, JSON.stringify(tasksArray));
      return [];
    } catch (error) {
      throw error;
    }
  }

  static async update(updatedTask, id) {
    try {
      const { status } = updatedTask;
      const tasksArray = JSON.parse(await fs.readFile(jsonPath, "utf8"));
      const taskIndex = tasksArray.findIndex((task) => task.id === id);
      tasksArray[taskIndex].status = status;
      await fs.writeFile(jsonPath, JSON.stringify(tasksArray));
      return [];
    } catch (error) {
      throw error;
    }
  }

  static async delete(id) {
    try {
      const tasksArray = JSON.parse(await fs.readFile(jsonPath, "utf8"));
      const taskIndex = tasksArray.findIndex((task) => task.id === id);
      tasksArray.splice(taskIndex, 1);
      await fs.writeFile(jsonPath, JSON.stringify(tasksArray));
      return [];
    } catch (error) {
      throw error;
    }
  }
}

module.exports = TasksServices;
