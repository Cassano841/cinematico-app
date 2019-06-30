import React from 'react';
import { Table, Container } from 'react-bootstrap';
import axios from 'axios';

export default class FilmeTabela extends React.Component {

    state = {
        query: ''
    }

    getInfo = () => {
        axios.get(`/api/filmes/pesquisar/nomeFilme?contem=${this.state.query}`).then(({ data }) => {
            this.setState({
              results: data.data
            })
          })
      }

    handleInputChange = () => {
        this.setState({
            query: this.search.value
        })
    }

    

    render() {
        return <div>
            <Container>
                <Table>
                    <input
                        onSubmit={this.handleInputChange}
                        placeholder="Search for..."
                        ref={input => this.search = input}
                        
                    />
                    <p>{this.state.query}</p>
                </Table>
            </Container>
        </div>
    }
}