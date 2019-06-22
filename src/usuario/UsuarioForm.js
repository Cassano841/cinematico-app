import React from 'react';

export default class UsuarioForm extends React.Component {

    constructor(props) {
        super(props);
        if (this.props.editar) {
            this.state = {
                nome: this.props.editar.nome,
                login: this.props.editar.login,
                senha: this.props.editar.senha
            }
        } else {
            this.state = {
                nome:"",
                login:"",
                senha:""
            }
        }
    }

    limpar() {
        if (this.props.editar) {
            this.props.onCancelar();
        } else {
            this.setState({
                nome:"",
                login:"",
                senha:""
            });
        }
    }

    confirmar() {
        if (this.props.editar) {
            this.props.onAtualizar({
                nome: this.state.nome,
                login: this.state.login,
                senha: this.state.senha
            });
        } else {
            this.props.onCadastrar({
                nome: this.state.nome,
                login: this.state.login,
                senha: this.state.senha                
            });
        }
        this.limpar();
    }

    render() {
        return <fieldset>
            <legend>Cadastrar Usuario:</legend>
            <label>Nome:</label>
                <input value={this.state.nome}
                       onChange={(usuario) => this.setState({
                            nome: usuario.target.value
                    })}
                /> <br />
            <label>Login:</label>
                <input value={this.state.login}
                       onChange={(usuario) => this.setState({
                            login: usuario.target.value
                       })}
                /> <br />
            <label>Senha:</label>
                <input value={this.state.senha}
                       onChange={(usuario) => this.setState({
                            senha: usuario.target.value
                       })}
                /> <br />

            <button 
                disabled={this.state.nome === ""}
                onClick={() => this.confirmar()}
            >{this.props.editar ? "Confirmar" : "Cadastrar"}</button>
            
            <button
                onClick={() => this.limpar()}
            >{this.props.editar ? "Cancelar" : "Limpar"}</button>
        </fieldset>
    }
}