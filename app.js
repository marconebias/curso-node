const express = require("express");

const app = express();
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const Post = require('./models/Post')

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


//Rotas

app.get('/', function(req, res){
    res.render('home')
})
app.get('/cad', function(req, res){
    res.render('formulario')
})

app.post('/add', function(req, res){    
    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    }).then(function(){
        res.redirect('/')
    }).catch(function(erro){
        res.send("Houve um erro: "+ erro)
    })
})


app.listen(8080, function(){
    console.log("Servidor Funcionando muito bem !!! url http//localhost:8080")
})