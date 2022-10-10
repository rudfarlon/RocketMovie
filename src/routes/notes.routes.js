const { Router } = require("express");

const MovieNotesController = require("../controllers/MovieNotesController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const notesRoutes = Router();

const movieNotesController = new MovieNotesController();

notesRoutes.use(ensureAuthenticated);

notesRoutes.get("/", movieNotesController.index);
notesRoutes.post("/", movieNotesController.create);
notesRoutes.get("/:id", movieNotesController.show);
notesRoutes.delete("/:id", movieNotesController.delete);

module.exports = notesRoutes;