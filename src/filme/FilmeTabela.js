import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';


export default class FilmeTabela extends React.Component {

    render() {
        return <table border="1">
            <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Duração</th>
                <th>Faixa Etária</th>
            </tr>
            {this.props.itens.map((filme) => <tr key={filme.id}>
                <td>{filme.id}</td>
                <td>{filme.nomeFilme}</td>
                <td>{filme.duracaoFilme} min</td>
                <td>{filme.faixaEtaria} anos</td>
                <td>
                    <button onClick={() => this.props.onApagar(filme)}>Apagar</button>
                    <button onClick={() => this.props.onEditar(filme)}>Editar</button>
                </td>
            </tr>
            )}
        </table>
    }
}