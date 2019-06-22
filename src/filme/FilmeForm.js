import React from 'react';

export default class UsuarioForm extends React.Component {

    constructor(props) {
        super(props);
        if (this.props.editar) {
            this.state = {
                nomeFilme: this.props.editar.nomeFilme,
                duracaoFilme: this.props.editar.duracaoFilme,
                faixaEtaria: this.props.editar.faixaEtaria
            }
        } else {
            this.state = {
                nomeFilme:"",
                duracaoFilme:"",
                faixaEtaria:""
            }
        }
    }

    limpar() {
        if (this.props.editar) {
            this.props.onCancelar();
        } else {
            this.setState({
                nomeFilme:"",
                duracaoFilme:"",
                faixaEtaria:""
            });
        }
    }

    confirmar() {
        if (this.props.editar) {
            this.props.onAtualizar({
                nomeFilme: this.state.nomeFilme,
                duracaoFilme: this.state.duracaoFilme,
                faixaEtaria: this.state.faixaEtaria
            });
        } else {
            this.props.onCadastrar({
                nomeFilme: this.state.nomeFilme,
                duracaoFilme: this.state.duracaoFilme,
                faixaEtaria: this.state.faixaEtaria                
            });
        }
        this.limpar();
    }

    render() {
        return <fieldset>
            <legend>Cadastrar Filme:</legend>
            <label>Nome do Filme:</label>
                <input value={this.state.nomeFilme}
                       onChange={(filme) => this.setState({
                            nomeFilme: filme.target.value
                    })}
                /> <br />
            <label>Duração:</label>
                <input value={this.state.login} type = "number"
                       onChange={(filme) => this.setState({
                            duracaoFilme: filme.target.value
                       })}
                /> <br />
            <label>Faixa Etária:</label>
                <input value={this.state.faixaEtaria}
                       onChange={(filme) => this.setState({
                            faixaEtaria: filme.target.value
                       })}
                /> <br />

            <button 
                disabled={this.state.nomeFilme === ""}
                onClick={() => this.confirmar()}
            >{this.props.editar ? "Confirmar" : "Cadastrar"}</button>
            
            <button
                onClick={() => this.limpar()}
            >{this.props.editar ? "Cancelar" : "Limpar"}</button>
        </fieldset>
    }
}