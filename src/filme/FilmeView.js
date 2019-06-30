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

    listarGeneros() {
      axios.get("/api/generos/").then(
        (retorno)=>this.setState({
          generos:retorno.data})  
      );
    }

    listarProdutoras() {
      axios.get("/api/produtoras/").then(
        (retorno)=>this.setState({
          produtoras:retorno.data})
      );
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

    componentDidMount() {
      this.listar();
      this.listarGeneros();
      this.listarProdutoras();
    }

    editar(filme) {
      this.setState({
        filmeParaEditar:filme
      });
    }
    
    render() {
        return <div>
          <FilmeForm
            key={this.state.filmeParaEditar?
                 this.state.filmeParaEditar.id:"0"}
            editar      = {this.state.filmeParaEditar}
            generos     = {this.state.generos}
            produtoras  = {this.state.produtoras}
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