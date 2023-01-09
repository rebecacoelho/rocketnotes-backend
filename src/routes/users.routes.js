const { Router } = require("express");
const multer = require("multer");
const uploadConfig = require("../configs/upload");

const UsersController = require("../controllers/UsersController")
const UserAvatarController = require("../controllers/UserAvatarController")
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

const usersRoutes = Router();
const upload = multer(uploadConfig.MULTER);

/*
function myMiddleware(request, response, next) {
  console.log("Você passou pelo Middleware")

  if(!request.body.isAdmin) {
    return response.json({ message: "user unauthorized" })
  }

  next()
}
*/

const usersController = new UsersController() // instanciar na memória
const userAvatarController = new UserAvatarController();

/*
app.get("/message/:id/:user", (request, response) => {
  const { id, user } = request.params

  response.send(`Mensagem ID: ${id}. Para o usuário: ${user}.`);
})


app.get("/users", (request, response) => {
  const { page, limit } = request.query;

  response.send(`Página: ${page}. Mostrar: ${limit}.`);
  // localhost:3333/users?page=2&limit=10
})
*/

usersRoutes.post("/", /* myMiddleware */ usersController.create);
usersRoutes.put("/", ensureAuthenticated, usersController.update);
usersRoutes.patch("/avatar", ensureAuthenticated, upload.single("avatar"), userAvatarController.update) // atualizar um campo especifico

module.exports = usersRoutes;