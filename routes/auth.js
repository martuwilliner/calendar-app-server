/* 
    Rutas usuarios / auth 
    host + /api/auth
*/

const express = require('express');

const router = express.Router();
const { check } = require('express-validator');

const {newUser, loginUsuario,revalidarToken} = require('../controllers/auth')



router.post('/new',
[//middleware
    check('name','El nombre es obligatorio').notEmpty(),
    check('email','Debe ser un mail valido').isEmail(),
    check('password','El password debe de ser de 6 caracteres o más').isLength({min:6}),
]
,newUser)

router.post('/', [//middleware
    check('email','Debe ser un mail valido').isEmail(),
    check('password','El password debe de ser de 6 caracteres o más').isLength({min:6}),
],loginUsuario)

router.get('/revalidarToken', revalidarToken)

module.exports = router;