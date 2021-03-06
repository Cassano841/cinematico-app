import React from 'react';
import Table from 'react-bootstrap/Table';
import { Container, Button } from 'react-bootstrap';

export default class UsuarioTabela extends React.Component {

    render() {
        return <div>
            <Container>
                <Table responsive size="md" striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nome</th>
                            <th>Login</th>
                            <th>Senha</th>
                            <th colSpan="2">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.itens.map((usuario) => <tr key={usuario.id}>
                            <td>{usuario.id}</td>
                            <td>{usuario.nome}</td>
                            <td>{usuario.login}</td>
                            <td>{usuario.senha}</td>
                            <td>
                                <Button variant="warning" onClick={() => this.props.onApagar(usuario)}>Apagar</Button>
                                <Button variant="secondary" onClick={() => this.props.onEditar(usuario)}>Editar</Button>
                            </td>
                        </tr>
                        )}
                    </tbody>
                </Table>
            </Container>
        </div>

    }
}