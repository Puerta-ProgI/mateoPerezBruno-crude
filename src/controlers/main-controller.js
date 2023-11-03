let productos = require("../data/productos.js");

  
const controller = {
    home:(req, res)=>{
        res.send("<h1>Hello World</h1>")
    },

    listadoProductos: (req, res)=>{
        res.send(productos)   
    },

    producto: (req, res)=>{
        res.send(productos.find((producto)=>{
            return producto.id == req.params.id;
        }))
    }
};

module.exports = controller;