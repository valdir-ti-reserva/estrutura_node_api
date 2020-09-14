const express = require('express');
const routes  = require('./routes');

class App {
  constructor(){
    this.server = express();
    this.middlewares();
    this.routes();
  }

  //Cadastrando os middlewares da aplicação
  middlewares(){
    this.server.use(express.json());
  }
  
  //Chamando as rotas da aplicação
  routes(){
    this.server.use(routes);
  }

}

module.exports = new App().server;