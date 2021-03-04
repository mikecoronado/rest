const { response ,request} = require('express');

const usuariosGet = (req = request, res = response) =>{

    const {q, nombre = "no name", apikey, page= 1,limit} = req.query;

    res.json({
        msg:'get api - controlador',
        q,
        nombre,
        apikey,
        page,
        limit
    });
} 

const usuariosPost = (req, res = response) =>{

    const {nombre, edad, apellido} = req.body;

    res.json({
        msg:'post api - controlador POST',
       
    });
} 

const usuariosPut = (req, res = response) =>{

    const id = req.params.id;

    res.json({
        msg:'put api - controlador PUT',
        id
    });
} 

const usuariosPatch = (req, res = response) =>{

    res.json({
        msg:'patch api - controlador PATCH'
    });
} 

const usuariosDelete = (req, res = response) =>{

    res.json({
        msg:'delete api - controlador DELETE'
    });
} 



module.exports = {
    usuariosGet,
    usuariosDelete,
    usuariosPatch,
    usuariosPost,
    usuariosPut
}