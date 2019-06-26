import React from 'react';
import { Form, Col, Button, Container } from 'react-bootstrap';

export default class UsuarioForm extends React.Component {

    constructor(props) {
        super(props);
        if (this.props.editar) {
            this.state = {
                nomeFilme: this.props.editar.nomeFilme,
                duracaoFilme: this.props.editar.duracaoFilme,
                faixaEtaria: this.props.editar.faixaEtaria,
                avaliacao: this.props.editar.avaliacao,
                generoId: this.props.editar.genero ? 
                          this.props.editar.genero.id : ""
                //produtora: this.props.editar.produtora ? this.props.editar.produtora.id : ""
            }
        } else {
            this.state = {
                nomeFilme: "",
                duracaoFilme: "",
                faixaEtaria: "",
                avaliacao: "",
                generoId: ""
                //produtora: ""
            }
        }
    }

    limpar() {
        if (this.props.editar) {
            this.props.onCancelar();
        } else {
            this.setState({
                nomeFilme: "",
                duracaoFilme: "",
                faixaEtaria: "",
                avaliacao: "",
                generoId: ""
                //produtora: ""
            });
        }
    }

    confirmar() {
        /*
        let genero = this.props.generos.find(
            (genero) => genero.id === this.state.generoId
        );
        
        let produtora = this.props.produtoras.find(
            (produtora) => produtora.id === this.state.produtora
        )
        */
        if (this.props.editar) {
            this.props.onAtualizar({
                id: this.props.editar.id,
                nomeFilme: this.state.nomeFilme,
                duracaoFilme: this.state.duracaoFilme,
                faixaEtaria: this.state.faixaEtaria,
                avaliacao: this.state.avaliacao,
                genero: this.props.editar.genero ? 
                        this.props.editar.genero.id : ""
                //produtora: produtora
            });
        } else {
            this.props.onCadastrar({
                nomeFilme: this.state.nomeFilme,
                duracaoFilme: this.state.duracaoFilme,
                faixaEtaria: this.state.faixaEtaria,
                avaliacao: this.state.avaliacao,
                genero: this.props.editar.genero ? 
                    this.props.editar.genero.id : ""
                //produtora: produtora
            });
        }
        this.limpar();
    }

    render() {
        return <div>
            <Container>
            <Form>
                <Form.Group>
                    <h1>Cadastro de Filme</h1>
                    <Form.Label column sm="2">Nome do Filme:</Form.Label>
                    <Col sm={7}>
                        <Form.Control type="textarea" placeholder="Digite o nome do filme"
                            value={this.state.nomeFilme}
                            onChange={(filme) => this.setState({
                                nomeFilme: filme.target.value
                            })
                            } />
                    </Col>
                    <Form.Label column sm="2">Duração:</Form.Label>
                    <Col sm={7}>
                        <Form.Control type="number" placeholder="Digite a duração do filme"
                            value={this.state.duracaoFilme}
                            onChange={(filme) => this.setState({
                                duracaoFilme: filme.target.value
                            })
                            } />
                    </Col>
                    <Form.Label column sm="2">Faixa Etária:</Form.Label>
                    <Col sm={7}>
                        <Form.Control type="number" placeholder="Digite a faixa etária do filme"
                            value={this.state.faixaEtaria}
                            onChange={(filme) => this.setState({
                                faixaEtaria: filme.target.value
                            })
                            } />
                    </Col>
                    <Form.Label column sm="2">Avaliação:</Form.Label>
                    <Col sm={7}>
                        <Form.Control type="number" placeholder="Digite a avaliação do filme"
                            value={this.state.avaliacao}
                            onChange={(filme) => this.setState({
                                avaliacao: filme.target.value
                            })
                            } />
                    </Col>
                    <Form.Label column sm="2">Gênero:</Form.Label>
                    <Col sm={7}>
                        <Form.Control as="select"
                            value={this.state.generoId}
                            onChange = {(filme) => this.setState({
                                generoId: filme.target.value
                                })
                            }>
                            <option value="">None</option>
                            {
                                this.props.generos && this.props.generos.map(
                                    (genero) => 
                                    <option key={genero.id} value={genero.id}>{genero.nomeGenero}</option>
                            )}
                        </Form.Control>
                    </Col>
                    
                    <br />
                    <div>
                    <Button variant="warning"
                        disabled={this.state.nomeFilme === ""}
                        onClick={() => this.confirmar()}
                    >{this.props.editar ? "Confirmar" : "Cadastrar"}
                    </Button>
                    <Button variant="secondary"
                        onClick={() => this.limpar()}
                    >{this.props.editar ? "Cancelar" : "Limpar"}
                    </Button>
                    </div>
                </Form.Group>
            </Form>
            </Container>
        </div>
    }
}