import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

export default class UsuarioTabela extends React.Component {

    render() {
        return <table border="1"> 
            <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Login</th>
                <th>Email</th>
            </tr>
            {this.props.itens.map((usuario) => <tr key={usuario.id}>
                <td>{usuario.id}</td>
                <td>{usuario.nome}</td>
                <td>{usuario.login}</td>
                <td>{usuario.email}</td>
                <td>oi</td>
                <td>
                    <button onClick={() => this.props.onApagar(usuario)}>Apagar</button>
                    <button>Editar</button>
                </td>
            </tr>
            )}
        </table>
        }
}