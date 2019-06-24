import React from 'react';
import { Button, Card, CardColumns, Container, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';


export default class FilmeTabela extends React.Component {

    render() {
        return <div>
            {this.props.itens.map((filme) => <Container>
                <Col xs={6}>
                    <CardColumns>
                        <Card key={filme.id} style={{ width: '13rem' }} >
                            <Card.Header>{filme.nomeFilme}</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    Duração: {filme.duracaoFilme} min
                                </Card.Text>
                                <Card.Text>
                                    Faixa Etária: {filme.faixaEtaria} anos
                                </Card.Text>
                                <Card.Text>
                                    Gênero: {filme.genero ? (
                                        filme.genero.nomeGenero
                                    ) : ""}
                                </Card.Text>
                                <Card.Text>
                                    Produtora: {filme.produtora ? (
                                        filme.produtora.nomeProdutora
                                    ) : ""}
                                </Card.Text>
                                <Button variant="primary" onClick={() => this.props.onApagar(filme)}>Apagar</Button>
                                <Button variant="secondary" onClick={() => this.props.onEditar(filme)}>Editar</Button>
                            </Card.Body>
                        </Card>
                    </CardColumns>
                </Col>
            </Container>
            )}
        </div>
    }
}