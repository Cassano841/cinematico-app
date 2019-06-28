import React from 'react';
import { Form, Col, Button, Container } from 'react-bootstrap';

export default class ProdutoraForm extends React.Component {

    constructor(props) {
        super(props);
        if (this.props.editar) {
            this.state = {
                nomeProdutora: this.props.editar.nomeProdutora,
                localProdutora: this.props.editar.localProdutora
            }
        } else {
            this.state = {
                nomeProdutora: "",
                localProdutora: ""
            }
        }
    }

    limpar() {
        if (this.props.editar) {
            this.props.onCancelar();
        } else {
            this.setState({
                nomeProdutora: "",
                localProdutora: ""
            });
        }
    }

    confirmar() {
        if (this.props.editar) {
            this.props.onAtualizar({
                id: this.props.editar.id,
                nomeProdutora: this.state.nomeProdutora,
                localProdutora: this.state.localProdutora
            });
        } else {
            this.props.onCadastrar({
                nomeProdutora: this.state.nomeProdutora,
                localProdutora: this.state.localProdutora
            });
        }
        this.limpar();
    }

    render() {
        return <div>
            <Container>
                <Form>
                    <Form.Group>
                        <h1>Cadastro de Produtora</h1>
                        <Form.Label column sm="2">Nome Produtora:</Form.Label>
                        <Col sm={7}>
                            <Form.Control type="textarea" placeholder="Digite o nome da produtora do filme"
                                value={this.state.nomeProdutora}
                                onChange={(produtora) => this.setState({
                                    nomeProdutora: produtora.target.value
                                })
                                } />
                        </Col>
                        <Form.Label column sm="2">Local da Produtora:</Form.Label>
                        <Col sm={7}>
                            <Form.Control type="textarea" placeholder="Digite o local da produtora"
                                value={this.state.localProdutora}
                                onChange={(produtora) => this.setState({
                                    localProdutora: produtora.target.value
                                })
                                } />
                        </Col>
                        <br />
                        <div>
                            <Button variant="warning"
                                disabled={this.state.nomeProdutora === ""}
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