const { Router } = require("express");

const NotesController = require("../controllers/NotesController");

const noutesRoutes = Router();

const notesController = new NotesController();

noutesRoutes.get("/", notesController.index);
noutesRoutes.post("/:user_id", notesController.create);
noutesRoutes.get("/:id", notesController.show);
noutesRoutes.delete("/:id", notesController.delete);

module.exports = noutesRoutes;