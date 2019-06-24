import React from 'react';
import './App.css';
import UsuarioView from './usuario/UsuarioView';
import FilmeView from './filme/FilmeView';
import PaginaInicial from './pagina/PaginaInicial';
import Navegacao from './pagina/Navegacao';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div>
        <Navegacao />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/usuarios" component={Usuario} />
          <Route path="/filmes" component={Filme} />
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


export default App;
