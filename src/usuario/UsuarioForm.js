import React from 'react';
import { Form, Col, Button, Container } from 'react-bootstrap';

export default class UsuarioForm extends React.Component {

    constructor(props) {
        super(props);
        if (this.props.editar) {
            this.state = {
                nome: this.props.editar.nome,
                login: this.props.editar.login,
                senha: this.props.editar.senha
            }
        } else {
            this.state = {
                nome: "",
                login: "",
                senha: ""
            }
        }
    }

    limpar() {
        if (this.props.editar) {
            this.props.onCancelar();
        } else {
            this.setState({
                nome: "",
                login: "",
                senha: ""
            });
        }
    }

    confirmar() {
        if (this.props.editar) {
            this.props.onAtualizar({
                id: this.props.editar.id,
                nome: this.state.nome,
                login: this.state.login,
                senha: this.state.senha
            });
        } else {
            this.props.onCadastrar({
                nome: this.state.nome,
                login: this.state.login,
                senha: this.state.senha
            });
        }
        this.limpar();
    }

    render() {
        return <div>
            <Container>
                <Form>
                    <Form.Group>
                        <h1>Cadastro de Usuário</h1>
                        <Form.Label column sm="2">Nome:</Form.Label>
                        <Col sm={7}>
                            <Form.Control type="textarea" placeholder="Digite o seu nome"
                                value={this.state.nome}
                                onChange={(usuario) => this.setState({
                                    nome: usuario.target.value
                                })
                                } />
                        </Col>
                        <Form.Label column sm="2">Login:</Form.Label>
                        <Col sm={7}>
                            <Form.Control type="textarea" placeholder="Digite o seu login"
                                value={this.state.login}
                                onChange={(usuario) => this.setState({
                                    login: usuario.target.value
                                })
                                } />
                        </Col>
                        <Form.Label column sm="2">Senha:</Form.Label>
                        <Col sm={7}>
                            <Form.Control type="password" placeholder="Digite a sua senha"
                                value={this.state.senha}
                                onChange={(usuario) => this.setState({
                                    senha: usuario.target.value
                                })
                                } />
                        </Col>
                        <br />
                        <div>
                            <Button variant="warning"
                                disabled={this.state.nome === ""}
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