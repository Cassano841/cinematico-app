import React from 'react';
import { Form, Col, Button, Container } from 'react-bootstrap';

export default class GeneroForm extends React.Component {

    constructor(props) {
        super(props);
        if (this.props.editar) {
            this.state = {
                nomeGenero: this.props.editar.nomeGenero,
                descricaoGenero: this.props.editar.descricaoGenero
            }
        } else {
            this.state = {
                nomeGenero: "",
                descricaoGenero: ""
            }
        }
    }

    limpar() {
        if (this.props.editar) {
            this.props.onCancelar();
        } else {
            this.setState({
                nomeGenero: "",
                descricaoGenero: ""
            });
        }
    }

    confirmar() {
        if (this.props.editar) {
            this.props.onAtualizar({
                id: this.props.editar.id,
                nomeGenero: "",
                descricaoGenero: ""
            });
        } else {
            this.props.onCadastrar({
                nomeGenero: "",
                descricaoGenero: ""
            });
        }
        this.limpar();
    }

    render() {
        return <div>
            <Container>
                <Form>
                    <Form.Group>
                        <h1>Cadastro de Gênero</h1>
                        <Form.Label column sm="2">Nome Gênero:</Form.Label>
                        <Col sm={7}>
                            <Form.Control type="textarea" placeholder="Digite o nome do gênero do filme"
                                value={this.state.nomeGenero}
                                onChange={(genero) => this.setState({
                                    nomeGenero: genero.target.value
                                })
                                } />
                        </Col>
                        <Form.Label column sm="2">Descrição do Gênero:</Form.Label>
                        <Col sm={7}>
                            <Form.Control type="textarea" placeholder="Digite a descrição do gênero"
                                value={this.state.descricaoGenero}
                                onChange={(genero) => this.setState({
                                    descricaoGenero: genero.target.value
                                })
                                } />
                        </Col>
                        <br />
                        <div>
                            <Button variant="warning"
                                disabled={this.state.nomeGenero === ""}
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