import React from 'react';
import './App.css';
import UsuarioView from './usuario/UsuarioView';
import FilmeView from './filme/FilmeView';
import PaginaInicial from './pagina/PaginaInicial';
import Navegacao from './pagina/Navegacao';
import GeneroView from './genero/GeneroView';
import ProdutoraView from './produtora/ProdutoraView';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div>
        <Navegacao />
        <Switch>
          <Route exact path = "/" component = { Home } />
          <Route path = "/usuarios" component = { Usuario } />
          <Route path = "/filmes" component = { Filme } />
          <Route path = "/generos" component = { Genero } />
          <Route path = "/produtoras" component = { Produtora } />
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <PaginaInicial />
    </div>
  );
}
function Usuario() {
  return (
    <div>
      <UsuarioView />
    </div>
  );
}

function Filme() {
  return (
    <div>
      <FilmeView />
    </div>
  );
}

function Genero() {
  return (
    <div>
      <GeneroView />
    </div>
  )
}

function Produtora() {
  return (
    <div>
      <ProdutoraView />
    </div>
  )
}


export default App;
