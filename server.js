const express = require('express'); // importando o express
const nunjucks = require('nunjucks'); // importando o nojunks
const routes = require('./routes'); // importando as rotas 
const server = express(); //importando o express para o servidor


server.use(express.static('public')); //fazendo com que o projeto use o css
server.use(routes); //fazendo com que o projeto use as rotas

//configuração da view engine

server.set("view engine", "njk");

nunjucks.configure("views", {
  express: server,
  autoescape: false,
  noCache: true,
});
//--

// Colocando o servidor online
server.listen(5000, function() {
  console.log("Servidor Ativo");
});