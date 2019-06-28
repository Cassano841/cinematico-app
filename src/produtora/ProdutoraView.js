import React, { Component } from 'react';
import axios from 'axios';
import ProdutoraTabela from './ProdutoraTabela';
import ProdutoraForm from './ProdutoraForm';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Spinner } from 'react-bootstrap';

export default class ProdutoraView extends Component {

    constructor(){
        super();
        this.state = { 
          carregar:true, 
          produtoraParaEditar: null
         };
    }

    listar() {
      axios.get("/api/produtoras/").then(
        (retorno) => this.setState({
          carregar: false,
          produtoras: retorno.data})
        );
    }

    cadastrar(produtora) {
        axios.post("/api/produtoras/", produtora).then(
          ()=>this.listar()
        );
    }

    atualizar(produtora) {
        axios.put("/api/produtoras/" + produtora.id, produtora).then(
          ()=>this.listar()
        );
      }

    apagar(produtora) {
      axios.delete(`/api/produtoras/${produtora.id}`).then(
        () => this.listar()
      );
    }

    editar(produtora) {
      this.setState({
        produtoraParaEditar:produtora
      });
    }

    componentWillMount() {
      this.listar();
    }
    
    render() {
        console.log(this.state);
        return <div>
          <ProdutoraForm
            key={this.state.produtoraParaEditar?
                 this.state.produtoraParaEditar.id:"0"}
            editar      = {this.state.produtoraParaEditar}
            onCadastrar = {(produtora)=>this.cadastrar(produtora)}
            onAtualizar = {(produtora)=>this.atualizar(produtora)}
            onCancelar  = {()=>this.setState({produtoraParaEditar:null})}
            />
          <br />

          {this.state.carregar ? <div>
            <Container>
              <Spinner animation="border" role="status">
                <span className="sr-only">carregando...</span>
              </Spinner>
            </Container>
          </div> :
          <ProdutoraTabela
            itens = {this.state.produtoras}
            onEditar = {(produtora) => this.editar(produtora)}
            onApagar = {(produtora) => this.apagar(produtora)}
          />}
        </div>
      }
}