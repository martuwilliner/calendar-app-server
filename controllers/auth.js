const express = require("express");
const { validationResult } = require("express-validator")

const newUser = (req, res = express.response) => {

    const {name, email, password} = req.body;


    // manejo de errores
    const errors = validationResult( req );
    
    if( !errors.isEmpty() ){
        return res.status(400).json({
            ok: false,
            errors: errors.mapped()
        })
    } 

  res.json({
    ok: true,
    message: "Registro",
    /* user: req.body */
    name,
    email,
    password
  });
};

const loginUsuario = (req, res = express.response) => {

    const {email, password} = req.body;

     // manejo de errores
     const errors = validationResult( req );
    
     if( !errors.isEmpty() ){
         return res.status(400).json({
             ok: false,
             errors: errors.mapped()
         })
     } 

  res.json({
    ok: true,
    msg: "login",
    email,
    password
  });
};

const revalidarToken = (req, res = express.response) => {
  res.json({
    ok: true,
    msg: "renew",
  });
};

module.exports = {
  newUser,
  loginUsuario,
  revalidarToken,
};
