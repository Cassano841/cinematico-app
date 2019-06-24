import React from 'react';
import { Form, Col } from 'react-bootstrap';

export default class UsuarioForm extends React.Component {

    constructor(props) {
        super(props);
        if (this.props.editar) {
            this.state = {
                nomeFilme: this.props.editar.nomeFilme,
                duracaoFilme: this.props.editar.duracaoFilme,
                faixaEtaria: this.props.editar.faixaEtaria,
                genero: this.props.editar.genero,
                produtora: this.props.editar.produtora
            }
        } else {
            this.state = {
                nomeFilme:"",
                duracaoFilme:"",
                faixaEtaria:"",
                genero:"",
                produtora:""
            }
        }
    }

    limpar() {
        if (this.props.editar) {
            this.props.onCancelar();
        } else {
            this.setState({
                nomeFilme:"",
                duracaoFilme:"",
                faixaEtaria:"",
                genero:"",
                produtora:""
            });
        }
    }

    confirmar() {
        if (this.props.editar) {
            this.props.onAtualizar({
                nomeFilme: this.state.nomeFilme,
                duracaoFilme: this.state.duracaoFilme,
                faixaEtaria: this.state.faixaEtaria,
                genero: this.state.genero,
                produtora: this.state.produtora

            });
        } else {
            this.props.onCadastrar({
                nomeFilme: this.state.nomeFilme,
                duracaoFilme: this.state.duracaoFilme,
                faixaEtaria: this.state.faixaEtaria,
                genero: this.state.genero,
                produtora: this.state.produtora               
            });
        }
        this.limpar();
    }

    render() {
        return <Form>
        <Form.Group>
            <h1>Cadastro de Filme</h1>
            <Form.Label column sm="2">Nome do Filme:</Form.Label>
            <Col sm={7}>
                <Form.Control type="textarea" placeholder="Digite o nome do filme" 
                    value={this.state.nomeFilme}
                    onChange={(filme) => this.setState({
                        nome: filme.target.value})
                    }/>
            </Col>
            <Form.Label column sm="2">Duração:</Form.Label>
            <Col sm={7}>
                <Form.Control type="number" placeholder="Digite a duração do filme" 
                    value={this.state.duracaoFilme}
                    onChange={(filme) => this.setState({
                        nome: filme.target.value})
                    }/>
            </Col>
            <Form.Label column sm="2">Faixa Etária:</Form.Label>
            <Col sm={7}>
                <Form.Control type="number" placeholder="Digite a faixa etária do filme" 
                    value={this.state.faixaEtaria}
                    onChange={(filme) => this.setState({
                        nome: filme.target.value})
                    }/>
            </Col>
            <Form.Label column sm="2">Gênero:</Form.Label>
            <Col sm={7}>
                <Form.Control type="textarea" placeholder="Digite o gênero do filme" 
                    value={this.state.genero}
                    onChange={(filme) => this.setState({
                        nome: filme.target.value})
                    }/>
            </Col>
            <Form.Label column sm="2">Produtora:</Form.Label>
            <Col sm={7}>
                <Form.Control type="textarea" placeholder="Digite a produtora do filme" 
                    value={this.state.produtora}
                    onChange={(filme) => this.setState({
                        nome: filme.target.value})
                    }/>
            </Col>
                <br />
            <button
                disabled={this.state.nome === ""}
                onClick={() => this.confirmar()}
            >{this.props.editar ? "Confirmar" : "Cadastrar"}</button>

            <button
                onClick={() => this.limpar()}
            >{this.props.editar ? "Cancelar" : "Limpar"}</button>
        </Form.Group>
    </Form>
    }
}