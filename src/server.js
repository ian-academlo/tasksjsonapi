// importamos app desde ./app

const app = require("./app"); // no es necesario poner el .js

const PORT = 8000;

app.listen(PORT, () => {
  console.log("Servidor corriendo");
});
