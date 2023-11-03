const express = require("express");
const router = express.Router();

const mainController = require("../controlers/main-controller");


router.get("/", mainController.home);
router.get("/Productos", mainController.listadoProductos);
router.get("/Productos/:id", mainController.producto);


module.exports = router;