const { Router } = require("express");

const MovieTagsController = require("../controllers/MovieTagsController");

const tagsRoutes = Router();

const movieTagsController = new MovieTagsController();

tagsRoutes.get("/:user_id", movieTagsController.index);

module.exports = tagsRoutes;