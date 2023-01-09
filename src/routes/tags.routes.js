const { Router } = require("express");

const TagsController = require("../controllers/TagsController")
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

const tagsRoutes = Router();

const tagsController = new TagsController(); // instanciar na memória

tagsRoutes.get("/", ensureAuthenticated, tagsController.index);

module.exports = tagsRoutes;