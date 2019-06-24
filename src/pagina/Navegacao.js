import React from 'react';
import { Navbar, Nav, Button, ButtonGroup } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default class Navegacao extends React.Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <LinkContainer to="/">
                        <Button variant="warning">Home</Button>
                    </LinkContainer>
                    <ButtonGroup>
                        <Nav className="mr-auto">
                            <LinkContainer to="/usuarios">
                                <Button variant="secondary">Usuários</Button>
                            </LinkContainer>
                            <LinkContainer to="/filmes">
                                <Button variant="secondary">Filmes</Button>
                            </LinkContainer>
                        </Nav>
                    </ButtonGroup>
                </Navbar>
            </div>

        );
    }
}