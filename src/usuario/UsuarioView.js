import React, { Component } from 'react';
import axios from 'axios';
import UsuarioTabela from './UsuarioTabela';
import UsuarioForm from './UsuarioForm';
import 'bootstrap/dist/css/bootstrap.css';

export default class UsuarioView extends Component {

    constructor(){
        super();
        this.state = { carregar:true };
    }

    listar() {
      axios.get("/api/usuarios/").then(
        (retorno) => this.setState({
          carregar: false,
          usuarios: retorno.data})
        );
    }

    apagar(usuario) {
      axios.delete(`/api/usuarios/${usuario.id}`).then(
        () => this.listar()()
      );
    }

    componentWillMount() {
      this.listar();
    }
    
    render() {
        return <div>
          <UsuarioForm /><br />
          {this.state.carregar ? "Carregando..." :
          <UsuarioTabela
            itens = {this.state.usuarios}
            onApagar = {(usuario) => this.apagar(usuario)}
          />}
        </div>
      }
}