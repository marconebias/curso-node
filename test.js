const Sequelize = require("sequelize");
const sequelize = new Sequelize('test','root','123456',{
    host: "localhost",
    dialect: "mysql"
})


const Postagem = sequelize.define('postagens',{
    titulo:{
        type: Sequelize.STRING,        
    },
    conteudo:{
        type: Sequelize.TEXT
    }
})

//Postagem.sync({force:true})

Postagem.create({
    titulo: "Um título qualquer",
    conteudo:"Mussun venia"
})


const Usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome:{
        type:Sequelize.STRING
    },
    idade:{
        type: Sequelize.INTEGER
    },
     email:{
        type:Sequelize.STRING
     }
})

//Usuario.sync({force:true})

Usuario.create({
    nome: "Marco",
    sobrenome:"Nébias",
    idade: 49,
    email:"marconebias@hotmail.com"
})


/*sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso!")
}).catch(function(erro){
    console.log("Falha ao se conectar! erro = "+erro)
})*/