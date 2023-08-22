const express = require("express");
const { Sequelize } = require("sequelize");
const app = express();
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')

//Configurações
    //Template Engine
        app.engine('handlebars', handlebars.engine({
            defaultLayout: 'main'
        }))
        app.set('view engine', 'handlebars')

//Body-Parser Configure
        app.use(bodyParser.urlencoded({extended: false}))
        app.use(bodyParser.json())


//Conexão com O MySql
const sequelize = new Sequelize('test', 'root', '123456', {
    host: "localhost",
    dialect: 'mysql'
})

//Rotas
app.get('/cad', function(req, res){
    res.render('formulario')
})

app.post('/add', function(req, res){
    
    res.send('Texto: '+req.body.titulo+" Conteúdo: "+req.body.conteudo)
})


app.listen(8080, function(){
    console.log("Servidor Funcionando muito bem !!! url http//localhost:8080")
})