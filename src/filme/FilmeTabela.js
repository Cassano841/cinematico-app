import React from 'react';
import { Table, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

export default class FilmeTabela extends React.Component {

    render() {
        return <div>
            <Container>
                <Table responsive size="md" striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nome do Filme</th>
                            <th>Duração</th>
                            <th>Faixa Etária</th>
                            <th>Avaliação</th>
                            <th>Gênero</th>
                            <th>Produtora</th>
                            <th colSpan="2">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.itens.map((filme) => <tr key={filme.id}>
                            <td>{filme.id}</td>
                            <td>{filme.nomeFilme}</td>
                            <td>{filme.duracaoFilme}</td>
                            <td>{filme.faixaEtaria}</td>
                            <td>{filme.avaliacao}</td>
                            <td>{filme.genero ? (
                                filme.genero.nomeGenero) : ""}</td>
                            <td>{filme.produtora ? (
                                filme.produtora.nomeProdutora) : ""}</td>
                            <td>
                                <button onClick={() => this.props.onApagar(filme)}>Apagar</button>
                                <button onClick={() => this.props.onEditar(filme)}>Editar</button>
                            </td>
                        </tr>
                        )}
                    </tbody>
                </Table>
            </Container>
        </div>
    }
}