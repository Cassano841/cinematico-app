import React, { Component } from 'react';
import axios from 'axios';
import GeneroTabela from './GeneroTabela';
import GeneroForm from './GeneroForm';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Spinner } from 'react-bootstrap';

export default class GeneroView extends Component {

    constructor(){
        super();
        this.state = { 
          carregar:true, 
          generoParaEditar: null
         };
    }

    listar() {
      axios.get("/api/generos/").then(
        (retorno)=>this.setState({
          carregar: false,
          generos: retorno.data})
        );
    }

    cadastrar(genero) {
        axios.post("/api/generos/", genero).then(
          ()=>this.listar()
        );
    }

    atualizar(genero) {
        axios.put("/api/generos/" + genero.id, genero).then(
          ()=>this.listar()
        );
      }

    apagar(genero) {
      axios.delete(`/api/generos/${genero.id}`).then(
        () => this.listar()
      );
    }

    editar(genero) {
      this.setState({
        generoParaEditar:genero
      });
    }

    componentWillMount() {
      this.listar();
    }
    
    render() {
        console.log(this.state);
        return <div>
          <GeneroForm
            key={this.state.generoParaEditar?
                 this.state.generoParaEditar.id:"0"}
            editar      = {this.state.generoParaEditar}
            onCadastrar = {(genero)=>this.cadastrar(genero)}
            onAtualizar = {(genero)=>this.atualizar(genero)}
            onCancelar  = {()=>this.setState({generoParaEditar:null})}
            />
          <br />

          {this.state.carregar ? <div>
            <Container>
              <Spinner animation="border" role="status">
                <span className="sr-only">carregando...</span>
              </Spinner>
            </Container>
          </div> :
          <GeneroTabela
            itens = {this.state.generos}
            onEditar = {(genero) => this.editar(genero)}
            onApagar = {(genero) => this.apagar(genero)}
          />}
        </div>
      }
}