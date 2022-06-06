const { Router } = require("express");

const UsersController = require("../controllers/UsersController");

const usersRoutes = Router();


// Criação de um Middleware
// function myMiddleware(request, response, next) {
    
//     if(!request.body.isAdmin) {
//         return response.json({message: "User unauthorized"});
//     }

//     next()
// }

// Desta forma eu uso o middleware para todas as rotas
// usersRoutes(myMiddleware);

const usersController = new UsersController();

usersRoutes.post("/", myMiddleware, usersController.create);

module.exports = usersRoutes;