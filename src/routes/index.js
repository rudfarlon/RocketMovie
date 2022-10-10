const { Router } = require("express");

const usersRouter = require("./users.routes");
const notesRouter = require("./notes.routes");
const tagsRouter =require("./tgas.routes");
const sessionsRouter =require("./sessions.routes");

const routes = Router();
routes.use("/users", usersRouter);
routes.use("/sessions", sessionsRouter);
routes.use("/movie_notes", notesRouter);
routes.use("/movie_tags", tagsRouter);

module.exports = routes;