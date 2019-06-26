import React from 'react';
import {
    Navbar,
    Nav,
    Button,
    ButtonToolbar,
    Form,
    FormControl
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default class Navegacao extends React.Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Nav className="mr-auto">
                        <LinkContainer to="/">
                            <Navbar.Brand>Home</Navbar.Brand>
                        </LinkContainer>
                    </Nav>
                    <Nav className="mr-auto">
                        <ButtonToolbar>
                            <LinkContainer to="/usuarios">
                                <Nav.Link>Usuários</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/filmes">
                                <Nav.Link>Filmes</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/generos">
                                <Nav.Link>Gêneros</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/produtoras">
                                <Nav.Link>Produtoras</Nav.Link>
                            </LinkContainer>
                        </ButtonToolbar>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Pesquisar" className="mr-sm-2"
                        />
                        <Button variant="outline-warning">Pesquisar</Button>
                    </Form>
                </Navbar>
            </div>

        );
    }
}