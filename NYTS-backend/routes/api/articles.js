const router = require("express").Router();
const articlesController = require("../../controllers/articlesController");

//Matches with api/articles



//matches with api/articles/:id
router
.route("id")
.get(articlesController.findById)
