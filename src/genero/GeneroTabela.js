import React from 'react';
import Table from 'react-bootstrap/Table';
import { Container, Button } from 'react-bootstrap';

export default class GeneroTabela extends React.Component {

    render() {
        return <div>
            <Container>
                <Table responsive size="md" striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nome</th>
                            <th>Descrição</th>
                            <th colSpan="2">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.itens.map((genero) => <tr key={genero.id}>
                            <td>{genero.id}</td>
                            <td>{genero.nomeGenero}</td>
                            <td>{genero.descricaoGenero}</td>
                            <td>
                                <Button variant="warning" onClick={() => this.props.onApagar(genero)}>Apagar</Button>
                                <Button variant="secondary" onClick={() => this.props.onEditar(genero)}>Editar</Button>
                            </td>
                        </tr>
                        )}
                    </tbody>
                </Table>
            </Container>
        </div>

    }
}