import React from 'react';

import { Table, Container, Button } from 'react-bootstrap';

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
                            <th>Ano Lançamento</th>
                            <th>Gênero</th>
                            <th>Produtora</th>
                            <th colSpan="2">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.itens.map((filme) => <tr key={filme.id}>
                            <td>{filme.id}</td>
                            <td>{filme.nomeFilme}</td>
                            <td>{filme.duracaoFilme} min</td>
                            <td>{filme.faixaEtaria} anos</td>
                            <td>{filme.anoLancamento}</td>
                            <td>{filme.genero ? (
                                filme.genero.nomeGenero) : ""}</td>
                            <td>{filme.produtora ? (
                                filme.produtora.nomeProdutora) : ""}</td>
                            <td>
                                <Button variant="warning" onClick={() => this.props.onApagar(filme)}>Apagar</Button>
                                <Button variant="secondary" onClick={() => this.props.onEditar(filme)}>Editar</Button>
                            </td>
                        </tr>
                        )}
                    </tbody>
                </Table>
            </Container>
        </div>
    }
}