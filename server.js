const express = require('express')
var bodyParser = require('body-parser')
const app = express()
require('./config/config');


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))


app.get('/usuario', function(req, res) {
    res.json('getusuario')
})
app.post('/usuario', function(req, res) {
    let body = req.body;
    if (body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            mensaje: "el nombre es necesario"
        });
    } else {
        res.json({
            persona: body
        });
    }
});


app.put('/usuario/:id', function(req, res) {
    let id = req.params.id;
    res.json({
        id
    })
})
app.listen(process.env.PORT, () => {
    console.log('escuchando puertos' + process.env.PORT)
});