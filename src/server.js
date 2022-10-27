// importamos app desde ./app

const app = require("./app"); // no es necesario poner el .js

const PORT = 8000;

app.listen(PORT, () => {
  console.log("Servidor corriendo");
});


// tarea moral 
// tu api de usuarios que hiciste ayer tendrás que cambiar la estructiura a esta nueva 
