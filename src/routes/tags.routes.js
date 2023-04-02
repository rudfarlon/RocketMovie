const { Router } = require("express");

const MovieTagsController = require("../controllers/MovieTagsController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const tagsRoutes = Router();

const movieTagsController = new MovieTagsController();

tagsRoutes.get("/", ensureAuthenticated, movieTagsController.index);

module.exports = tagsRoutes;