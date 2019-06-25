import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';

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
                        </Container>
                    </Jumbotron>
                </div>
                <div>
                    <Jumbotron fluid>
                        <Container>
                            <h1>Gêneros mais Assistidos</h1>
                            <p>
                                Bem-vindo a seção de gêneros mais assistidos!
                    </p>
                        </Container>
                    </Jumbotron>
                </div>
            </div>
        );
    }
}