import React, { Component } from 'react';
import axios from 'axios';
import FilmeTabela from './FilmeTabela';
import FilmeForm from './FilmeForm';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Spinner } from 'react-bootstrap';

export default class FilmeView extends Component {

    constructor(){
        super();
        this.state = { 
          carregar:true, 
          filmeParaEditar: null
         };
    }

    listar() {
      axios.get("/api/filmes/").then(
        (retorno) => this.setState({
          carregar: false,
          filmes: retorno.data})
        );
    }

    cadastrar(filme) {
      axios.post("/api/filmes/", filme).then(
        ()=>this.listar()
      )
    }

    atualizar(filme) {
      axios.put("/api/filmes/"+filme.id, filme).then(
        ()=>this.listar()
      )
    }

    apagar(filme) {
      axios.delete(`/api/filmes/${filme.id}`).then(
        () => this.listar()
      );
    }

    editar(filme) {
      this.setState({
        filmeParaEditar:filme
      });
    }

    componentWillMount() {
      this.listar();
    }
    
    render() {
        return <div>
          <FilmeForm
            key={this.state.filmeParaEditar?
                 this.state.filmeParaEditar.id:"0"}
            editar={this.state.filmeParaEditar}
            onCadastrar = {(filme)=>this.cadastrar(filme)}
            onAtualizar = {(filme)=>this.atualizar(filme)}
            onCancelar  = {()=>this.setState({filmeParaEditar:null})}
            />
          <br />

          {this.state.carregar ? <div>
            <Container>
              <Spinner animation="border" role="status">
                <span className="sr-only">carregando...</span>
              </Spinner>
            </Container>
          </div> :
          <FilmeTabela
            itens = {this.state.filmes}
            onEditar = {(filme) => this.editar(filme)}
            onApagar = {(filme) => this.apagar(filme)}
          />}
        </div>
      }
}