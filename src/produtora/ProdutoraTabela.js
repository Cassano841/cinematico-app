import React from 'react';
import Table from 'react-bootstrap/Table';
import { Container, Button } from 'react-bootstrap';

export default class ProdutoraTabela extends React.Component {

    render() {
        return <div>
            <Container>
                <Table responsive size="md" striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nome</th>
                            <th>Local</th>
                            <th colSpan="2">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.itens.map((produtora) => <tr key={produtora.id}>
                            <td width="10%">{produtora.id}</td>
                            <td width="50%">{produtora.nomeProdutora}</td>
                            <td width="10%">{produtora.localProdutora}</td>
                            <td width="30%">
                                <Button variant="warning" onClick={() => this.props.onApagar(produtora)}>Apagar</Button>
                                <Button variant="secondary" onClick={() => this.props.onEditar(produtora)}>Editar</Button>
                            </td>
                        </tr>
                        )}
                    </tbody>
                </Table>
            </Container>
        </div>

    }
}