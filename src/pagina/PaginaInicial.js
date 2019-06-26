import React from 'react';
import { Jumbotron, Container, Card, CardDeck } from 'react-bootstrap';

export default class PaginaInicial extends React.Component {

    render() {
        return (
            <div>
                <div>
                    <Jumbotron fluid>
                        <Container>
                            <h1>Página Inicial - Cinemático</h1>
                            <p>
                                Bem-vindo ao portal de cinema Cinemático!
                        </p>
                        </Container>
                    </Jumbotron>
                </div>
                <div>
                    <Jumbotron fluid>
                        <Container>
                            <h1>Filmes da Semana</h1>
                            <p>
                                Bem-vindo a seção de filmes da semana!
                            </p>
                            <CardDeck>
                                <Card border="warning" style={{ width: '18rem' }}>
                                    <Card.Body>
                                        <Card.Title>Card title</Card.Title>
                                        <Card.Text>
                                            This is a wider card with supporting text below as a natural lead-in to
                                            additional content. This content is a little bit longer.
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <small className="text-muted">Last updated 3 mins ago</small>
                                    </Card.Footer>
                                </Card>
                                <Card border="warning" style={{ width: '18rem' }}> 
                                    <Card.Body>
                                        <Card.Title>Card title</Card.Title>
                                        <Card.Text>
                                            This card has supporting text below as a natural lead-in to additional
                                            content.{' '}
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <small className="text-muted">Last updated 3 mins ago</small>
                                    </Card.Footer>
                                </Card>
                                <Card border="warning" style={{ width: '18rem' }}>
                                    <Card.Body>
                                        <Card.Title>Card title</Card.Title>
                                        <Card.Text>
                                            This is a wider card with supporting text below as a natural lead-in to
                                            additional content. This card has even longer content than the first to
                                            show that equal height action.
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <small className="text-muted">Last updated 3 mins ago</small>
                                    </Card.Footer>
                                </Card>
                            </CardDeck>
                        </Container>
                    </Jumbotron>
                </div>
                <div>
                    <Jumbotron fluid>
                        <Container>
                            <h1>Filmes Adicionados Recentemente</h1>
                            <p>
                                Bem-vindo a seção de gêneros mais assistidos!
                            </p>
                            <CardDeck>
                                <Card border="warning" style={{ width: '18rem' }}>
                                    <Card.Body>
                                        <Card.Title>Card title</Card.Title>
                                        <Card.Text>
                                            This is a wider card with supporting text below as a natural lead-in to
                                            additional content. This content is a little bit longer.
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <small className="text-muted">Last updated 3 mins ago</small>
                                    </Card.Footer>
                                </Card>
                                <Card border="warning" style={{ width: '18rem' }}> 
                                    <Card.Body>
                                        <Card.Title>Card title</Card.Title>
                                        <Card.Text>
                                            This card has supporting text below as a natural lead-in to additional
                                            content.{' '}
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <small className="text-muted">Last updated 3 mins ago</small>
                                    </Card.Footer>
                                </Card>
                                <Card border="warning" style={{ width: '18rem' }}>
                                    <Card.Body>
                                        <Card.Title>Card title</Card.Title>
                                        <Card.Text>
                                            This is a wider card with supporting text below as a natural lead-in to
                                            additional content. This card has even longer content than the first to
                                            show that equal height action.
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <small className="text-muted">Last updated 3 mins ago</small>
                                    </Card.Footer>
                                </Card>
                            </CardDeck>
                        </Container>
                    </Jumbotron>
                </div>
            </div>
        );
    }
}