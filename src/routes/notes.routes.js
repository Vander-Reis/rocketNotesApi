const { Router } = require("express");

const NotesController = require("../controllers/NotesController");

const noutesRoutes = Router();

const notesController = new NotesController();

noutesRoutes.post("/:user_id", notesController.create);

module.exports = noutesRoutes;