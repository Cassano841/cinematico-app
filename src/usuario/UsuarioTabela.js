import React from 'react';
import Table from 'react-bootstrap/Table';

export default class UsuarioTabela extends React.Component {

    render() {
        return <Table responsive size="md" striped bordered hover variant="dark">
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
                    <button onClick={() => this.props.onApagar(usuario)}>Apagar</button>
                    <button onClick={() => this.props.onEditar(usuario)}>Editar</button>
                </td>
            </tr>
            )}
            </tbody>
        </Table>
        
        }
}