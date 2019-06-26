import React, { Component } from 'react';
import axios from 'axios';
import UsuarioTabela from './UsuarioTabela';
import UsuarioForm from './UsuarioForm';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Spinner } from 'react-bootstrap';

export default class UsuarioView extends Component {

    constructor(){
        super();
        this.state = { 
          carregar:true, 
          usuarioParaEditar: null
         };
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
        () => this.listar()
      );
    }

    cadastrar(usuario) {
      axios.post("/api/usuarios/", usuario).then(
        ()=>this.listar()
      )
    }

    atualizar(usuario) {
      axios.put("/api/usuarios/" + usuario.id, usuario).then(
        ()=>this.listar()
      )
    }

    editar(usuario) {
      this.setState({
        usuarioParaEditar:usuario
      });
    }

    componentWillMount() {
      this.listar();
    }
    
    render() {
        return <div>
          <UsuarioForm
            key={this.state.usuarioParaEditar?
                 this.state.usuarioParaEditar.id:"0"}
            editar={this.state.usuarioParaEditar}
            onCadastrar = {(usuario)=>this.cadastrar(usuario)}
            onAtualizar = {(usuario)=>this.atualizar(usuario)}
            onCancelar  = {()=>this.setState({usuarioParaEditar:null})}
            />
          <br />

          {this.state.carregar ? <div>
            <Container>
              <Spinner animation="border" role="status">
                <span className="sr-only">carregando...</span>
              </Spinner>
            </Container>
          </div> :
          <UsuarioTabela
            itens = {this.state.usuarios}
            onEditar = {(usuario) => this.editar(usuario)}
            onApagar = {(usuario) => this.apagar(usuario)}
          />}
        </div>
      }
}