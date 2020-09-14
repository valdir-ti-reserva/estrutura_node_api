import express from 'express';
import routes  from './routes';

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

export default new App().server;